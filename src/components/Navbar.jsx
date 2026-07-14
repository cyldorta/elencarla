import { useState, useEffect } from "react"
import { Menu, X, ArrowUpRight } from "lucide-react"
import Logo from "./Logo"
import { waLink } from "../utils/whatsapp"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState("")
  const WHATSAPP = waLink()

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      const sections = ["sobre", "servicos", "imoveis", "processo", "depoimentos", "contato"]
      for (let id of sections) {
        const el = document.getElementById(id)
        if (!el) continue
        const rect = el.getBoundingClientRect()
        if (rect.top <= 140 && rect.bottom >= 140) { setActive(`#${id}`); break }
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
  }, [open])

  const light = !scrolled && !open

  const links = [
    { label: "Sobre", href: "#sobre", n: "01" },
    { label: "Serviços", href: "#servicos", n: "02" },
    { label: "Imóveis", href: "#imoveis", n: "03" },
    { label: "Processo", href: "#processo", n: "04" },
    { label: "Depoimentos", href: "#depoimentos", n: "05" },
    { label: "Contato", href: "#contato", n: "06" },
  ]

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 bg-bone/85 backdrop-blur-xl border-b border-line"
          : "py-5 bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex items-center justify-between">

        {/* WORDMARK */}
        <a href="#top" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <Logo variant={light ? "light" : "dark"} className="w-12 h-8" />
          <span className="flex flex-col leading-none">
            <span className={`font-display text-[17px] tracking-tight transition-colors ${light ? "text-bone" : "text-ink"}`}>Elen Carla Reis</span>
            <span className={`text-[9.5px] tracking-[0.32em] uppercase mt-1 transition-colors ${light ? "text-bone/60" : "text-stone"}`}>Corretora Imobiliária</span>
          </span>
        </a>

        {/* NAV DESKTOP */}
        <nav className="hidden lg:flex items-center gap-9">
          {links.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className={`link-underline text-[12.5px] font-medium tracking-wide transition-colors ${
                light
                  ? (active === href ? "text-bone" : "text-bone/70 hover:text-bone")
                  : (active === href ? "text-ink" : "text-stone hover:text-ink")
              }`}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* CTA + MOBILE */}
        <div className="flex items-center gap-3">
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className={`hidden sm:inline-flex ${light ? "btn-primary btn-light" : "btn-primary"}`}>
            Agendar conversa
            <ArrowUpRight size={15} />
          </a>
          <button
            onClick={() => setOpen(!open)}
            className={`lg:hidden grid place-items-center w-11 h-11 rounded-full border transition-colors ${light ? "border-bone/40 text-bone" : "border-line text-ink"}`}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* OVERLAY MOBILE */}
      <div
        className={`lg:hidden fixed inset-0 top-0 bg-bone transition-all duration-500 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        style={{ height: "100dvh" }}
      >
        <div className="h-full flex flex-col px-6 pt-28 pb-10">
          <nav className="flex-1 flex flex-col">
            {links.map(({ label, href, n }, i) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="group flex items-baseline justify-between py-5 border-b border-line"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                <span className="font-display text-4xl text-ink tracking-tight group-hover:text-olive transition-colors">{label}</span>
                <span className="index-num text-stone text-sm">{n}</span>
              </a>
            ))}
          </nav>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-primary justify-center mt-8 w-full">
            Agendar conversa
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </header>
  )
}
