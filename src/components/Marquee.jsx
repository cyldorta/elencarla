const palavras = [
  "Compra",
  "Venda",
  "Investimento",
  "Imóveis na planta",
  "Consultoria",
  "Documentação segura",
  "Financiamento",
  "Atendimento sob medida",
]

export default function Marquee() {
  const lista = [...palavras, ...palavras]

  return (
    <section className="section-dark py-6 overflow-hidden border-y border-white/10 select-none" aria-hidden="true">
      <div className="marquee">
        {lista.map((p, i) => (
          <span key={i} className="marquee-item">
            <span className="font-display text-2xl md:text-[2rem] font-light text-bone/85 px-8">{p}</span>
            <span className="text-clay text-base">✦</span>
          </span>
        ))}
      </div>
    </section>
  )
}
