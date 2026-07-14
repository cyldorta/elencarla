import { useEffect, useRef } from "react"
import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react"
import { useMagnetic } from "../hooks/useAnimations"
import { waLink } from "../utils/whatsapp"
import video from "../assets/aracaju.mp4"

export default function Hero() {
  const ctaRef = useMagnetic(0.25)
  const titleRef = useRef(null)
  const WHATSAPP = waLink()

  useEffect(() => {
    const t = setTimeout(() => titleRef.current?.classList.add("visible"), 280)
    const els = document.querySelectorAll(".hero-stagger")
    els.forEach((el, i) => {
      setTimeout(() => {
        el.style.opacity = "1"
        el.style.transform = "none"
      }, 560 + i * 110)
    })
    return () => clearTimeout(t)
  }, [])

  const stagger = { opacity: 0, transform: "translateY(18px)", transition: "opacity .9s var(--ease), transform .9s var(--ease)" }

  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden text-bone">

      {/* VÍDEO FULLSCREEN */}
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
        <source src={video} type="video/mp4" />
      </video>

      {/* OVERLAYS — legibilidade editorial */}
      <div className="absolute inset-0 bg-ink/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-ink/55" />

      {/* CONTEÚDO */}
      <div className="relative z-10 min-h-[100svh] max-w-[1400px] mx-auto px-6 lg:px-10 pt-28 sm:pt-28 lg:pt-32 pb-8 sm:pb-10 flex flex-col">

        {/* meta topo */}
        <div className="flex items-center justify-between">
          <span className="hero-stagger eyebrow eyebrow--light" style={stagger}>Corretora Imobiliária · Sergipe</span>
          <span className="hero-stagger hidden sm:inline-flex items-center gap-2 text-[12px] text-bone/70 tracking-wide" style={stagger}>
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex w-full h-full rounded-full bg-sand opacity-70 animate-ping" />
              <span className="relative inline-flex w-2 h-2 rounded-full bg-sand" />
            </span>
            Atendendo Grande Aracaju
          </span>
        </div>

        {/* bloco principal */}
        <div className="mt-auto">
          <h1
            ref={titleRef}
            className="word-reveal font-display font-light tracking-tight leading-[0.96] lg:leading-[0.94] text-[clamp(2.5rem,8.5vw,8.5rem)]"
          >
            <span style={{ transitionDelay: ".02s" }}>O&nbsp;endereço&nbsp;</span>
            <span style={{ transitionDelay: ".10s" }}>certo</span>
            <br />
            <span className="display-italic text-sand" style={{ transitionDelay: ".20s" }}>encontra&nbsp;</span>
            <span style={{ transitionDelay: ".30s" }}>você.</span>
          </h1>

          <div className="mt-8 lg:mt-10 grid lg:grid-cols-12 gap-8 items-end">
            <p className="hero-stagger lg:col-span-5 text-bone/70 text-[15px] leading-relaxed max-w-md" style={stagger}>
              Mais que vender imóveis, conduzo cada cliente pela decisão mais importante
              da sua vida — com seleção criteriosa, segurança jurídica e atendimento sob medida.
            </p>

            <div className="hero-stagger lg:col-span-7 flex flex-wrap items-center gap-3 lg:justify-end" style={stagger}>
              <span ref={ctaRef} className="inline-block">
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-light">
                  Falar com a Elen
                  <ArrowUpRight size={16} />
                </a>
              </span>
              <a href="#imoveis" className="btn-ghost btn-ghost--light">Ver imóveis</a>
            </div>
          </div>
        </div>

        {/* rodapé do hero */}
        <div className="hero-stagger mt-10 lg:mt-12 flex items-end justify-between border-t border-white/15 pt-6" style={stagger}>
          <div className="flex gap-8 sm:gap-12">
            {[
              { v: "2 anos", l: "de mercado" },
              { v: "CRECI 6884", l: "PF/SE" },
            ].map((s, i) => (
              <div key={i}>
                <p className="font-display text-xl sm:text-2xl text-bone leading-none">{s.v}</p>
                <p className="text-[10px] sm:text-[11px] text-bone/50 tracking-wide uppercase mt-1.5">{s.l}</p>
              </div>
            ))}
          </div>

          <a href="#sobre" className="hidden sm:flex flex-col items-center gap-2 text-bone/60 hover:text-bone transition-colors">
            <span className="text-[10px] tracking-[0.3em] uppercase">Role</span>
            <ArrowDown size={15} className="animate-bounce" />
          </a>

          <div className="sm:hidden flex items-center gap-2 text-bone/70 text-[11px]">
            <MapPin size={12} className="text-sand" /> Aracaju · SE
          </div>
        </div>
      </div>
    </section>
  )
}
