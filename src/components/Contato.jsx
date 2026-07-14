import { ArrowUpRight, MessageCircle, Mail, Instagram, MapPin, Clock } from "lucide-react"
import { useScrollReveal, useParallax, useMagnetic } from "../hooks/useAnimations"
import { waLink } from "../utils/whatsapp"

export default function Contato() {
  const ref = useScrollReveal({ threshold: 0.08 })
  const orb = useParallax(0.14, 60)
  const ctaRef = useMagnetic(0.25)
  const WHATSAPP = waLink()

  const canais = [
    { icon: MessageCircle, label: "WhatsApp", valor: "(79) 9 9868-1888", href: WHATSAPP, ext: true },
    { icon: Mail, label: "E-mail", valor: "elen@elenreisimoveis.com.br", href: "mailto:elen@elenreisimoveis.com.br", ext: false },
    { icon: Instagram, label: "Instagram", valor: "@elencarlareis.corretor", href: "https://instagram.com", ext: true },
    { icon: MapPin, label: "Atendimento", valor: "Aracaju · Sergipe", href: WHATSAPP, ext: true },
  ]

  return (
    <section id="contato" className="section-dark relative py-16 sm:py-24 lg:py-36 overflow-hidden" ref={ref}>
      <div ref={orb} className="mesh-orb w-[48vw] h-[48vw] bg-olive/25 -top-[18%] left-1/2 -translate-x-1/2 will-change-transform" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-14 lg:gap-20 items-center">

        {/* coluna esquerda */}
        <div className="lg:col-span-6">
          <span className="reveal eyebrow eyebrow--light">Vamos conversar</span>
          <h2 className="reveal reveal-delay-1 mt-6 font-display text-bone font-light tracking-tight leading-[0.96] text-[clamp(2.6rem,6.5vw,5.5rem)]">
            O próximo<br />
            <span className="display-italic text-sand">endereço</span> é seu.
          </h2>
          <p className="reveal reveal-delay-2 text-bone/55 text-[16px] leading-relaxed mt-8 max-w-md">
            Me conte o que você procura — bairro, faixa de valor, número de quartos.
            Respondo pessoalmente, normalmente em poucas horas.
          </p>

          <div className="reveal reveal-delay-3 mt-10 flex flex-wrap items-center gap-4">
            <span ref={ctaRef} className="inline-block">
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-light">
                <MessageCircle size={17} />
                Chamar no WhatsApp
                <ArrowUpRight size={16} />
              </a>
            </span>
            <a href="mailto:elen@elenreisimoveis.com.br" className="btn-ghost btn-ghost--light">Enviar e-mail</a>
          </div>

          <div className="reveal reveal-delay-4 flex items-center gap-2.5 mt-8 text-bone/45 text-[13px]">
            <Clock size={14} className="text-sand" />
            Seg a Sáb · 8h às 20h · resposta rápida e sem compromisso
          </div>
        </div>

        {/* coluna direita — canais */}
        <div className="lg:col-span-6">
          <div className="reveal reveal-delay-2 grid sm:grid-cols-2 gap-px bg-white/10 rounded-3xl overflow-hidden">
            {canais.map((c, i) => {
              const Icon = c.icon
              return (
                <a
                  key={i}
                  href={c.href}
                  target={c.ext ? "_blank" : undefined}
                  rel={c.ext ? "noopener noreferrer" : undefined}
                  className="group bg-ink hover:bg-ink2 p-7 lg:p-8 flex flex-col gap-6 min-h-[170px] justify-between transition-colors"
                >
                  <span className="flex items-center justify-between">
                    <span className="grid place-items-center w-11 h-11 rounded-full bg-white/5 text-sand group-hover:bg-clay group-hover:text-bone transition-all">
                      <Icon size={17} />
                    </span>
                    <ArrowUpRight size={16} className="text-bone/30 group-hover:text-bone transition-colors" />
                  </span>
                  <span>
                    <span className="block text-[10px] text-bone/40 uppercase tracking-[0.2em] mb-1.5">{c.label}</span>
                    <span className="block text-bone text-[15px]">{c.valor}</span>
                  </span>
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
