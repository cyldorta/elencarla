import { ArrowUpRight } from "lucide-react"
import { useScrollReveal, useParallax, useCountUp } from "../hooks/useAnimations"
import { waLink } from "../utils/whatsapp"

const principios = [
  { n: "01", t: "Seleção, não catálogo", d: "Apresento apenas o que faz sentido para o seu perfil, estilo de vida e orçamento." },
  { n: "02", t: "Segurança em cada etapa", d: "Documentação, due diligence e registro acompanhados de perto, sem surpresas." },
  { n: "03", t: "Negociação com transparência", d: "Condições justas, comunicação clara e sua decisão sempre no centro." },
]

export default function Sobre() {
  const ref = useScrollReveal({ threshold: 0.12 })
  const WHATSAPP = waLink()
  const imgParallax = useParallax(0.06, 32)
  const anos = useCountUp(2, { suffix: "" })

  return (
    <section id="sobre" className="bg-bone py-16 sm:py-24 lg:py-36 overflow-hidden" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">

        {/* cabeçalho */}
        <div className="grid lg:grid-cols-12 gap-8 items-end mb-16 lg:mb-24">
          <div className="lg:col-span-7">
            <span className="reveal eyebrow">Quem conduz</span>
            <h2 className="reveal reveal-delay-1 mt-6 font-display text-ink font-light tracking-tight leading-[0.98] text-[clamp(2.2rem,5.5vw,4.6rem)]">
              Elen Carla Reis,<br />
              <span className="display-italic text-olive">corretora de confiança</span> em Sergipe.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="reveal reveal-delay-2 text-stone text-[15px] leading-relaxed lg:pl-8 lg:border-l border-line">
              Há dois anos unindo conhecimento técnico e sensibilidade humana para guiar
              pessoas na decisão financeira mais importante de suas vidas — com clareza,
              cuidado e resultado.
            </p>
          </div>
        </div>

        {/* corpo: imagem + princípios */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-stretch">

          {/* retrato */}
          <div className="lg:col-span-5 reveal-scale">
            <div ref={imgParallax} className="relative will-change-transform">
              <div className="media-frame aspect-[4/5]">
                <img src="/fotocelular.png" alt="Elen Carla Reis — corretora de imóveis" />
              </div>
              {/* selo credencial */}
              <div className="absolute bottom-4 right-4 lg:-bottom-5 lg:right-5 z-10 bg-paper shadow-lift rounded-xl lg:rounded-2xl px-4 py-3 lg:px-5 lg:py-4 float-soft">
                <p className="text-[9px] lg:text-[10px] text-stone tracking-[0.2em] uppercase">Certificada</p>
                <p className="font-display text-ink text-sm lg:text-base leading-none mt-1 whitespace-nowrap">CRECI 6884 PF/SE</p>
              </div>
              <div className="absolute -top-6 -left-6 w-24 h-24 border border-line rounded-full spin-slow -z-0" />
            </div>
          </div>

          {/* coluna direita */}
          <div className="lg:col-span-7 flex flex-col">

            {/* pull-quote */}
            <blockquote className="reveal font-display text-ink font-light tracking-tight leading-[1.15] text-[clamp(1.6rem,3vw,2.6rem)]">
              “A casa certa não é a mais cara. É aquela onde a sua vida cabe — e o seu
              <span className="display-italic text-olive"> patrimônio cresce</span>.”
            </blockquote>

            {/* contadores */}
            <div className="reveal reveal-delay-2 flex gap-12 mt-10 mb-12">
              <div>
                <p ref={anos} className="font-display text-5xl text-ink leading-none">0</p>
                <p className="text-[12px] text-stone tracking-wide uppercase mt-3">Anos de mercado</p>
              </div>
            </div>

            {/* princípios */}
            <div className="border-t border-line">
              {principios.map((p, i) => (
                <div key={p.n} className={`reveal reveal-delay-${i + 1} grid grid-cols-[auto_1fr] gap-5 py-6 border-b border-line`}>
                  <span className="index-num text-stone text-sm pt-1">{p.n}</span>
                  <div>
                    <h3 className="font-display text-ink text-xl">{p.t}</h3>
                    <p className="text-stone text-[14px] leading-relaxed mt-1.5">{p.d}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="reveal mt-10">
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Conversar com a Elen
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
