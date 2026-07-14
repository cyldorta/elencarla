import { useScrollReveal, useCountUp } from "../hooks/useAnimations"

const passos = [
  { n: "01", titulo: "Conversa inicial", texto: "Entendo o que você procura, seu momento de vida e seus objetivos — sem pressa." },
  { n: "02", titulo: "Seleção de opções", texto: "Seleciono as melhores oportunidades do mercado, pensadas para o seu perfil." },
  { n: "03", titulo: "Análise & documentação", texto: "Cuido de toda a parte jurídica e burocrática com segurança e transparência." },
  { n: "04", titulo: "Entrega das chaves", texto: "Acompanho até a conclusão, com suporte real no pós-venda." },
]

function Metric({ end, suffix, label }) {
  const ref = useCountUp(end, { suffix })
  return (
    <div className="reveal">
      <p ref={ref} className="font-display text-bone text-[clamp(2.5rem,5vw,4rem)] leading-none">0{suffix}</p>
      <p className="text-bone/50 text-[12px] tracking-wide uppercase mt-3">{label}</p>
    </div>
  )
}

export default function Processo() {
  const ref = useScrollReveal({ threshold: 0.08 })

  return (
    <section id="processo" className="section-dark py-16 sm:py-24 lg:py-36 overflow-hidden" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-12 gap-8 items-end mb-16 lg:mb-24">
          <div className="lg:col-span-8">
            <span className="reveal eyebrow eyebrow--light">A jornada</span>
            <h2 className="reveal reveal-delay-1 mt-6 font-display text-bone font-light tracking-tight leading-[0.98] text-[clamp(2.2rem,5.5vw,4.6rem)]">
              Um processo simples<br />
              <span className="display-italic text-sand">e sem ruído.</span>
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="reveal reveal-delay-2 text-bone/55 text-[15px] leading-relaxed">
              Do primeiro “olá” às chaves na mão, você sempre sabe onde está e qual o
              próximo passo.
            </p>
          </div>
        </div>

        {/* passos */}
        <div className="relative grid md:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden">
          {/* linha que se desenha */}
          <div className="hidden md:block absolute top-[4.5rem] left-0 right-0 h-px overflow-hidden">
            <div className="draw-line reveal-delay-2 h-full bg-gradient-to-r from-transparent via-sand/40 to-transparent" />
          </div>

          {passos.map((p, i) => (
            <div key={p.n} className={`reveal reveal-delay-${i + 1} bg-ink p-7 lg:p-9 group hover:bg-ink2 transition-colors`}>
              <div className="flex items-center justify-between mb-12">
                <span className="index-num text-sand/80 text-2xl">{p.n}</span>
                <span className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-clay transition-colors" />
              </div>
              <h3 className="font-display text-bone text-2xl tracking-tight mb-3">{p.titulo}</h3>
              <p className="text-bone/50 text-[14px] leading-relaxed">{p.texto}</p>
            </div>
          ))}
        </div>

        {/* métricas */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 mt-20 pt-14 border-t border-white/10">
          <Metric end={2} suffix=" anos" label="De experiência" />
          <Metric end={100} suffix="%" label="Clientes satisfeitos" />
          <Metric end={30} suffix=" dias" label="Venda média" />
        </div>
      </div>
    </section>
  )
}
