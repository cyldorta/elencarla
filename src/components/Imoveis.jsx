import { useState } from "react"
import { ArrowUpRight, MapPin, Sparkles, Building2 } from "lucide-react"
import { useScrollReveal, useTilt, useMagnetic } from "../hooks/useAnimations"
import { waLink } from "../utils/whatsapp"

const WHATSAPP = waLink()

// Empreendimentos em destaque — 1 por card.
// Para adicionar a foto: salve o render em /public com o nome indicado em `img`.
const empreendimentos = [
  {
    ready: true,
    nome: "Città Jardins",
    bairro: "Jardins",
    construtora: "VERG Construtora · Felizola Imobiliária",
    desc: "O lugar perfeito pra quem vive a cidade e vive a vida.",
    img: "/citta-jardins.jpg",
  },
  {
    ready: true,
    nome: "Concept",
    bairro: "Jardins",
    construtora: "",
    desc: "Design contemporâneo e localização privilegiada no bairro Jardins.",
    img: "/concept.jpg",
  },
  {
    ready: true,
    nome: "Casa Jardins",
    bairro: "Jardins",
    construtora: "",
    desc: "Conforto e sofisticação para morar bem em um dos melhores endereços de Aracaju.",
    img: "/casa-jardins.jpg",
  },
  {
    ready: true,
    nome: "Dumont Art",
    bairro: "Orla de Atalaia",
    construtora: "",
    desc: "Na exclusiva Reserva Parque dos Coqueiros, à beira da Orla de Atalaia.",
    img: "/dumont-art.jpg",
  },
]

function EmpreendimentoCard({ e, i }) {
  const tilt = useTilt(3)
  const [imgErr, setImgErr] = useState(false)
  const temFoto = e.ready && e.img && !imgErr

  // Slot ainda não preenchido
  if (!e.ready) {
    return (
      <div className={`reveal-scale reveal-delay-${(i % 2) + 1} rounded-3xl border border-dashed border-line grid place-items-center min-h-[320px] text-center px-6`}>
        <div className="text-stone">
          <span className="grid place-items-center w-12 h-12 rounded-full bg-paper mx-auto mb-4">
            <Building2 size={20} />
          </span>
          <p className="font-display text-ink text-xl">Em breve</p>
          <p className="text-[13px] mt-1.5">Mais um empreendimento selecionado por Elen Reis.</p>
        </div>
      </div>
    )
  }

  return (
    <a
      ref={tilt}
      href={WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      className={`reveal-scale reveal-delay-${(i % 2) + 1} tilt-card group flex flex-col rounded-3xl overflow-hidden bg-ink text-bone`}
    >
      {/* imagem do empreendimento */}
      <div className="relative aspect-[16/10] overflow-hidden bg-olive">
        {temFoto && (
          <img
            src={e.img}
            alt={`${e.nome} — ${e.bairro}`}
            onError={() => setImgErr(true)}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />

        <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 text-[10px] tracking-[0.2em] uppercase text-bone bg-ink/45 backdrop-blur-sm px-3 py-1.5 rounded-full">
          <MapPin size={12} /> {e.bairro}
        </span>
        <span className="absolute top-4 right-4 grid place-items-center w-9 h-9 rounded-full bg-ink/45 backdrop-blur-sm border border-white/25 transition-all group-hover:bg-bone group-hover:text-ink">
          <ArrowUpRight size={15} />
        </span>
      </div>

      {/* info */}
      <div className="p-7 lg:p-8 flex-1 flex flex-col">
        {e.construtora && (
          <span className="text-[10px] tracking-[0.2em] uppercase text-sand mb-3">{e.construtora}</span>
        )}
        <h3 className="font-display text-[1.9rem] leading-tight tracking-tight">{e.nome}</h3>
        <p className="text-bone/60 text-[14px] leading-relaxed mt-2">{e.desc}</p>
        <span className="arrow-link arrow-link--light mt-6 text-[13px]">
          Quero saber mais <ArrowUpRight size={15} />
        </span>
      </div>
    </a>
  )
}

export default function Imoveis() {
  const ref = useScrollReveal({ threshold: 0.08 })
  const ctaRef = useMagnetic(0.22)

  return (
    <section id="imoveis" className="bg-bone py-16 sm:py-24 lg:py-32 overflow-hidden" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">

        {/* cabeçalho */}
        <div className="flex flex-wrap items-end justify-between gap-6 mb-10 lg:mb-12">
          <div>
            <span className="reveal eyebrow">Empreendimentos</span>
            <h2 className="reveal reveal-delay-1 mt-6 font-display text-ink font-light tracking-tight leading-[0.98] text-[clamp(2.2rem,5.5vw,4.6rem)]">
              Lançamentos<br /><span className="display-italic text-olive">em destaque</span>
            </h2>
          </div>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="reveal reveal-delay-2 arrow-link">
            Falar sobre um empreendimento <ArrowUpRight size={16} />
          </a>
        </div>

        {/* FAIXA — busca sob medida */}
        <div className="reveal-scale relative overflow-hidden rounded-3xl bg-ink text-bone mb-8 p-8 lg:p-14 grid lg:grid-cols-12 gap-10 items-center">
          <div className="mesh-orb w-[30vw] h-[30vw] bg-olive/40 -top-1/3 -right-[5%]" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 w-72 h-72 rounded-full border border-white/10 spin-slow" />

          <div className="relative lg:col-span-7">
            <span className="inline-flex items-center gap-2 text-[10px] tracking-[0.24em] uppercase text-sand mb-5">
              <Sparkles size={13} /> Seleção sob medida
            </span>
            <h3 className="font-display font-light tracking-tight leading-[1.02] text-[clamp(1.9rem,4.2vw,3.4rem)]">
              Me diga o que você procura —<br />
              <span className="display-italic text-sand">eu encontro o imóvel certo.</span>
            </h3>
          </div>

          <div className="relative lg:col-span-5 lg:pl-10 lg:border-l border-white/12">
            <p className="text-bone/60 text-[15px] leading-relaxed mb-7">
              Bairro, faixa de valor, número de quartos, perfil de investimento — você me
              conta a sua necessidade e eu trago opções selecionadas, sem você perder tempo
              em busca por portais.
            </p>
            <span ref={ctaRef} className="inline-block">
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-light">
                Começar minha busca
                <ArrowUpRight size={16} />
              </a>
            </span>
          </div>
        </div>

        {/* empreendimentos */}
        <div className="grid sm:grid-cols-2 gap-6">
          {empreendimentos.map((e, i) => <EmpreendimentoCard key={i} e={e} i={i} />)}
        </div>

        <p className="reveal text-center text-stone text-[13px] mt-12">
          Procura um empreendimento ou tipo de imóvel específico?{" "}
          <a href="#contato" className="text-ink link-underline">Conte para a Elen.</a>
        </p>
      </div>
    </section>
  )
}
