import { Search, Home, FileCheck, Handshake, TrendingUp, Key, ArrowUpRight } from "lucide-react"
import { useScrollReveal } from "../hooks/useAnimations"

const servicos = [
  { icon: Search, n: "01", titulo: "Busca personalizada", texto: "Seleção de imóveis alinhada ao seu perfil, rotina e orçamento — sem perda de tempo." },
  { icon: Home, n: "02", titulo: "Compra & venda", texto: "Assessoria completa em todas as etapas, do primeiro contato ao registro em cartório." },
  { icon: FileCheck, n: "03", titulo: "Documentação segura", texto: "Toda a parte jurídica conferida com transparência e segurança absoluta." },
  { icon: Handshake, n: "04", titulo: "Negociação ética", texto: "Condições justas e proteção real dos seus interesses em cada transação." },
  { icon: TrendingUp, n: "05", titulo: "Consultoria de investimento", texto: "Análise de valorização e seleção das melhores oportunidades do mercado." },
  { icon: Key, n: "06", titulo: "Imóveis na planta", texto: "Acesso aos melhores lançamentos e pré-vendas das incorporadoras de Sergipe." },
]

export default function Servicos() {
  const ref = useScrollReveal({ threshold: 0.08 })

  return (
    <section id="servicos" className="bg-sand py-16 sm:py-24 lg:py-36" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-12 gap-8 items-end mb-14 lg:mb-20">
          <div className="lg:col-span-8">
            <span className="reveal eyebrow">Como posso ajudar</span>
            <h2 className="reveal reveal-delay-1 mt-6 font-display text-ink font-light tracking-tight leading-[0.98] text-[clamp(2.2rem,5.5vw,4.6rem)]">
              Um serviço completo,<br />
              <span className="display-italic text-olive">do desejo às chaves</span>.
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="reveal reveal-delay-2 text-stone text-[15px] leading-relaxed">
              Seja para comprar, vender ou investir, cada etapa é conduzida com método,
              discrição e atenção aos detalhes.
            </p>
          </div>
        </div>

        {/* lista editorial */}
        <div className="border-t border-line/80">
          {servicos.map((s, i) => {
            const Icon = s.icon
            return (
              <a
                key={s.n}
                href="#contato"
                className={`reveal reveal-delay-${(i % 3) + 1} group grid grid-cols-[auto_1fr_auto] md:grid-cols-[5rem_1fr_2fr_auto] items-center gap-5 md:gap-8 py-7 md:py-8 border-b border-line/80 transition-colors hover:bg-paper/60 px-2 md:px-4 -mx-2 md:-mx-4 rounded-lg`}
              >
                <span className="index-num text-stone text-sm group-hover:text-olive transition-colors">{s.n}</span>

                <h3 className="font-display text-ink text-[clamp(1.4rem,2.6vw,2.1rem)] leading-tight tracking-tight">
                  {s.titulo}
                </h3>

                <p className="hidden md:block text-stone text-[14px] leading-relaxed max-w-md">{s.texto}</p>

                <span className="grid place-items-center w-11 h-11 rounded-full border border-line text-ink/70 group-hover:bg-olive group-hover:text-bone group-hover:border-olive transition-all">
                  <Icon size={17} className="group-hover:hidden" />
                  <ArrowUpRight size={17} className="hidden group-hover:block" />
                </span>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
