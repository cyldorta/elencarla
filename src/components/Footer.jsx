import { ArrowUpRight, Instagram, MessageCircle, Mail } from "lucide-react"
import Logo from "./Logo"
import { waLink } from "../utils/whatsapp"

const nav = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Imóveis", href: "#imoveis" },
  { label: "Processo", href: "#processo" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
]

export default function Footer() {
  const WHATSAPP = waLink()
  const social = [
    { icon: Instagram, href: "https://www.instagram.com/elen.imoveiselotes" },
    { icon: MessageCircle, href: WHATSAPP },
    { icon: Mail, href: "mailto:elen@elenreisimoveis.com.br" },
  ]
  return (
    <footer className="section-dark">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">

        {/* faixa CTA */}
        <div className="py-16 lg:py-24 border-b border-white/10 flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          <h2 className="font-display text-bone font-light tracking-tight leading-[0.95] text-[clamp(2.6rem,8vw,7rem)]">
            Vamos achar<br /><span className="display-italic text-sand">o seu lugar?</span>
          </h2>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-light flex-shrink-0">
            Falar com a Elen
            <ArrowUpRight size={16} />
          </a>
        </div>

        {/* colunas */}
        <div className="py-14 grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-3">
              <Logo variant="light" className="w-12 h-8" />
              <span className="flex flex-col leading-none">
                <span className="font-display text-bone text-[17px] tracking-tight">Elen Carla Reis</span>
                <span className="text-[9.5px] text-bone/50 tracking-[0.3em] uppercase mt-1">Corretora Imobiliária</span>
              </span>
            </div>
            <p className="text-bone/45 text-[13px] leading-relaxed max-w-xs mt-5">
              Assessoria imobiliária completa em Sergipe, para quem leva a sério
              a decisão de morar e investir bem.
            </p>
            <div className="flex gap-3 mt-6">
              {social.map(({ icon: Icon, href }, i) => (
                <a key={i} href={href} target="_blank" rel="noopener noreferrer"
                  className="grid place-items-center w-10 h-10 rounded-full border border-bone/15 text-bone/60 hover:bg-bone hover:text-ink hover:border-bone transition-all">
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-bone/40 text-[10px] uppercase tracking-[0.22em] mb-5">Navegação</h4>
            <ul className="space-y-3">
              {nav.map(({ label, href }) => (
                <li key={href}>
                  <a href={href} className="text-bone/70 hover:text-bone text-[14px] link-underline">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-bone/40 text-[10px] uppercase tracking-[0.22em] mb-5">Contato</h4>
            <ul className="space-y-3 text-bone/70 text-[14px]">
              <li>Aracaju · Sergipe — Brasil</li>
              <li><a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="link-underline">(79) 9 9868-1888</a></li>
              <li><a href="mailto:elen@elenreisimoveis.com.br" className="link-underline">elen@elenreisimoveis.com.br</a></li>
            </ul>
          </div>
        </div>

        <div className="py-7 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-3 text-[11px] text-bone/35">
          <p>© 2026 Elen Carla Reis · CRECI 6884 PF/SE</p>
          <p>Atendimento e experiência premium.</p>
        </div>
      </div>
    </footer>
  )
}
