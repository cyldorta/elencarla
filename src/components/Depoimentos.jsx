import { Star } from "lucide-react"
import { useScrollReveal } from "../hooks/useAnimations"

const depoimentos = [
  { nome: "Ana Luísa M.", local: "Aracaju · SE", texto: "Encontrou exatamente o que eu procurava em tempo recorde. Atendimento delicado, profissional e extremamente eficiente." },
  { nome: "Carlos & Fernanda", local: "Barra dos Coqueiros · SE", texto: "Compramos nosso primeiro apê com a Elen. Toda a documentação cuidada sem nenhum stress. Recomendo de olhos fechados." },
  { nome: "Patrícia S.", local: "São Cristóvão · SE", texto: "Vendeu meu imóvel em três semanas, pelo preço que eu queria. Transparência do início ao fim. Excepcional." },
]

export default function Depoimentos() {
  const ref = useScrollReveal({ threshold: 0.1 })

  return (
    <section id="depoimentos" className="bg-sand py-16 sm:py-24 lg:py-36" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-12 gap-8 items-end mb-14 lg:mb-20">
          <div className="lg:col-span-8">
            <span className="reveal eyebrow">Prova social</span>
            <h2 className="reveal reveal-delay-1 mt-6 font-display text-ink font-light tracking-tight leading-[0.98] text-[clamp(2.2rem,5.5vw,4.6rem)]">
              Histórias que viraram<br />
              <span className="display-italic text-olive">endereços</span>.
            </h2>
          </div>
          <div className="lg:col-span-4 flex lg:justify-end">
            <div className="reveal reveal-delay-2 flex items-center gap-3">
              <div className="flex gap-0.5">
                {Array(5).fill(0).map((_, k) => <Star key={k} size={16} className="text-clay fill-clay" />)}
              </div>
              <span className="text-stone text-[13px]">5,0 · avaliação média</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 border-t border-line/80">
          {depoimentos.map((d, i) => (
            <figure
              key={i}
              className={`reveal reveal-delay-${i + 1} flex flex-col justify-between p-8 lg:p-10 border-b md:border-b-0 border-line/80 ${i < 2 ? "md:border-r" : ""}`}
            >
              <blockquote className="font-display text-ink font-light text-[1.45rem] leading-[1.25] tracking-tight">
                “{d.texto}”
              </blockquote>
              <figcaption className="flex items-center gap-3 mt-10 pt-6 border-t border-line">
                <span className="grid place-items-center w-11 h-11 rounded-full bg-olive/10 font-display text-olive text-lg">
                  {d.nome.charAt(0)}
                </span>
                <div>
                  <p className="text-ink text-[14px] font-medium">{d.nome}</p>
                  <p className="text-stone text-[12px]">{d.local}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
