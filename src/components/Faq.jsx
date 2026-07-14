import { useState } from "react"
import { Plus } from "lucide-react"
import { useScrollReveal } from "../hooks/useAnimations"

const perguntas = [
  { pergunta: "Quanto custa contar com uma corretora?", resposta: "A comissão é paga apenas na conclusão da venda e já está contemplada no valor do imóvel. Para o comprador, em geral, o serviço não tem custo adicional." },
  { pergunta: "Você ajuda com financiamento imobiliário?", resposta: "Sim. Acompanho todo o processo, da simulação no banco à aprovação e assinatura do contrato, sem custos extras." },
  { pergunta: "Quais regiões de Sergipe você atende?", resposta: "Atendo toda a Grande Aracaju — Aracaju, Barra dos Coqueiros, São Cristóvão e Nossa Senhora do Socorro." },
  { pergunta: "Como funciona a venda do meu imóvel?", resposta: "Faço avaliação gratuita, preparo a documentação, divulgo nos principais portais e redes, e apresento o imóvel a compradores qualificados." },
  { pergunta: "Em quanto tempo consigo vender?", resposta: "Depende de preço, localização e condições do imóvel. Com a precificação correta e boa divulgação, a média é de 30 a 90 dias." },
]

export default function Faq() {
  const [aberto, setAberto] = useState(0)
  const ref = useScrollReveal({ threshold: 0.08 })

  return (
    <section className="bg-bone py-16 sm:py-24 lg:py-36" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 lg:gap-20">

        <div className="lg:col-span-4">
          <span className="reveal eyebrow">Dúvidas frequentes</span>
          <h2 className="reveal reveal-delay-1 mt-6 font-display text-ink font-light tracking-tight leading-[0.98] text-[clamp(2.2rem,5.5vw,4rem)]">
            Antes de<br /><span className="display-italic text-olive">começarmos</span>.
          </h2>
          <p className="reveal reveal-delay-2 text-stone text-[14px] leading-relaxed mt-6 max-w-xs">
            Ficou alguma dúvida que não está aqui? Fale comigo no WhatsApp — respondo
            pessoalmente.
          </p>
        </div>

        <div className="lg:col-span-8 border-t border-line">
          {perguntas.map((p, i) => {
            const open = aberto === i
            return (
              <div key={i} className={`reveal reveal-delay-${(i % 3) + 1} border-b border-line`}>
                <button
                  onClick={() => setAberto(open ? null : i)}
                  className="w-full flex items-center justify-between gap-6 py-6 text-left group"
                  aria-expanded={open}
                >
                  <span className={`font-display text-[1.4rem] lg:text-[1.7rem] tracking-tight transition-colors ${open ? "text-ink" : "text-ink/70 group-hover:text-ink"}`}>
                    {p.pergunta}
                  </span>
                  <span className={`flex-shrink-0 grid place-items-center w-9 h-9 rounded-full border transition-all duration-300 ${open ? "bg-olive text-bone border-olive rotate-45" : "border-line text-ink group-hover:border-ink"}`}>
                    <Plus size={16} />
                  </span>
                </button>
                <div className={`grid transition-all duration-500 ease-editorial ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <p className="text-stone text-[15px] leading-relaxed pb-7 max-w-xl">{p.resposta}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
