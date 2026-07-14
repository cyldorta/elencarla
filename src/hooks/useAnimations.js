import { useEffect, useRef, useState } from "react"

/* ──────────────────────────────────────────────────────────
   Motor de animações — UI/UX sênior
   Tudo respeita prefers-reduced-motion e usa rAF (60fps).
   ────────────────────────────────────────────────────────── */

const prefersReduced = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches

const isCoarse = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(pointer: coarse)").matches

/* ── Gerenciador único de scroll (passive + rAF) ──────────── */
const scrollSubs = new Set()
let scrollTicking = false

function runScroll() {
  scrollTicking = false
  const y = window.scrollY
  const vh = window.innerHeight
  scrollSubs.forEach((fn) => fn(y, vh))
}

function onGlobalScroll() {
  if (!scrollTicking) {
    scrollTicking = true
    requestAnimationFrame(runScroll)
  }
}

function subscribeScroll(fn) {
  if (scrollSubs.size === 0) {
    window.addEventListener("scroll", onGlobalScroll, { passive: true })
    window.addEventListener("resize", onGlobalScroll)
  }
  scrollSubs.add(fn)
  fn(window.scrollY, window.innerHeight) // estado inicial
  return () => {
    scrollSubs.delete(fn)
    if (scrollSubs.size === 0) {
      window.removeEventListener("scroll", onGlobalScroll)
      window.removeEventListener("resize", onGlobalScroll)
    }
  }
}

/* ── 1. Scroll reveal encenado ────────────────────────────── */
/* Attache o ref no container; todos os filhos `.reveal`
   entram com stagger ao surgir na viewport.               */
export function useScrollReveal({ threshold = 0.15, rootMargin = "0px 0px -8% 0px" } = {}) {
  const ref = useRef(null)
  useEffect(() => {
    const root = ref.current
    if (!root) return
    const els = root.querySelectorAll(
      ".reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-clip, .draw-line, .word-reveal"
    )

    if (prefersReduced()) {
      els.forEach((el) => el.classList.add("visible"))
      return
    }

    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible")
            obs.unobserve(e.target)
          }
        }),
      { threshold, rootMargin }
    )
    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [threshold, rootMargin])
  return ref
}

/* ── 2. Parallax vertical (transform suave, estável + limitado) ─ */
export function useParallax(speed = 0.12, max = 60) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el || prefersReduced()) return
    return subscribeScroll((y, vh) => {
      // mede SEM o transform aplicado para não realimentar o offset
      el.style.transform = "none"
      const rect = el.getBoundingClientRect()
      const center = rect.top + rect.height / 2 // relativo à viewport
      let offset = (center - vh / 2) * -speed
      offset = Math.max(-max, Math.min(max, offset)) // limita o deslocamento
      el.style.transform = `translate3d(0, ${offset.toFixed(2)}px, 0)`
    })
  }, [speed, max])
  return ref
}

/* ── 3. Fade/scale conforme o scroll (ex.: hero saindo) ───── */
export function useScrollFade({ start = 0, end = 600, fadeTo = 0, scaleTo = 1.08, translate = 80 } = {}) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el || prefersReduced()) return
    return subscribeScroll((y) => {
      const p = Math.min(Math.max((y - start) / (end - start), 0), 1)
      el.style.opacity = String(1 - p * (1 - fadeTo))
      el.style.transform = `translate3d(0, ${(-p * translate).toFixed(2)}px, 0) scale(${(1 + (scaleTo - 1) * p).toFixed(4)})`
    })
  }, [start, end, fadeTo, scaleTo, translate])
  return ref
}

/* ── 4. Contador animado (dispara ao aparecer) ────────────── */
export function useCountUp(end, { duration = 1800, prefix = "", suffix = "" } = {}) {
  const ref = useRef(null)
  const fired = useRef(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (prefersReduced()) {
      el.textContent = `${prefix}${end}${suffix}`
      return
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !fired.current) {
            fired.current = true
            const t0 = performance.now()
            const tick = (now) => {
              const p = Math.min((now - t0) / duration, 1)
              const eased = 1 - Math.pow(1 - p, 3)
              el.textContent = `${prefix}${Math.round(end * eased)}${suffix}`
              if (p < 1) requestAnimationFrame(tick)
            }
            requestAnimationFrame(tick)
            obs.disconnect()
          }
        })
      },
      { threshold: 0.6 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [end, duration, prefix, suffix])
  return ref
}

/* ── 5. Botão/elemento magnético (segue o cursor) ─────────── */
export function useMagnetic(strength = 0.35) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el || prefersReduced() || isCoarse()) return
    let raf = null
    const move = (e) => {
      const r = el.getBoundingClientRect()
      const x = (e.clientX - (r.left + r.width / 2)) * strength
      const y = (e.clientY - (r.top + r.height / 2)) * strength
      if (raf) cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        el.style.transform = `translate(${x.toFixed(2)}px, ${y.toFixed(2)}px)`
      })
    }
    const reset = () => {
      if (raf) cancelAnimationFrame(raf)
      el.style.transform = "translate(0,0)"
    }
    el.addEventListener("mousemove", move)
    el.addEventListener("mouseleave", reset)
    return () => {
      el.removeEventListener("mousemove", move)
      el.removeEventListener("mouseleave", reset)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [strength])
  return ref
}

/* ── 6. Tilt 3D + spotlight no hover do card ──────────────── */
export function useTilt(max = 8) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el || prefersReduced() || isCoarse()) return
    let raf = null
    const move = (e) => {
      const r = el.getBoundingClientRect()
      const px = (e.clientX - r.left) / r.width
      const py = (e.clientY - r.top) / r.height
      const rx = (0.5 - py) * max
      const ry = (px - 0.5) * max
      el.style.setProperty("--mx", `${(px * 100).toFixed(1)}%`)
      el.style.setProperty("--my", `${(py * 100).toFixed(1)}%`)
      if (raf) cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        el.style.transform = `perspective(900px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg) translateY(-6px)`
      })
    }
    const reset = () => {
      if (raf) cancelAnimationFrame(raf)
      el.style.transform = ""
    }
    el.addEventListener("mousemove", move)
    el.addEventListener("mouseleave", reset)
    return () => {
      el.removeEventListener("mousemove", move)
      el.removeEventListener("mouseleave", reset)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [max])
  return ref
}

/* ── 7. Parallax do mouse (camadas do hero) ───────────────── */
export function useMouseParallax() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  useEffect(() => {
    if (prefersReduced() || isCoarse()) return
    let raf = null
    const move = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2
      const y = (e.clientY / window.innerHeight - 0.5) * 2
      if (raf) cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => setPos({ x, y }))
    }
    window.addEventListener("mousemove", move)
    return () => {
      window.removeEventListener("mousemove", move)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])
  return pos
}

/* ── 8. Progresso de scroll (0 → 1) ───────────────────────── */
export function useScrollProgress() {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    return subscribeScroll((y) => {
      const h = document.documentElement.scrollHeight - window.innerHeight
      setProgress(h > 0 ? Math.min(y / h, 1) : 0)
    })
  }, [])
  return progress
}
