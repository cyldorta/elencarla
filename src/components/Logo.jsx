// Marca da Elen Reis — usa o SÍMBOLO (chave) transparente.
// variant "light"  → símbolo branco  (para fundos escuros / hero sobre vídeo)
// variant "dark"   → símbolo preto   (para fundos claros)
// O arquivo original tem muita margem transparente, então ampliamos e
// recortamos (overflow-hidden + scale) para o símbolo preencher a caixa.

const SRC = {
  light: "/LOGO ELEN REIS (SIMBOLO BRANCO TRANSPARENTE).png",
  dark: "/LOGO ELEN REIS (SIMBOLO PRETO TRANSPARENTE).png",
}

export default function Logo({ variant = "light", className = "w-16 h-9" }) {
  return (
    <span className={`relative inline-flex overflow-hidden ${className}`} aria-hidden="true">
      <img
        src={SRC[variant]}
        alt=""
        className="absolute inset-0 w-full h-full object-contain scale-[2.7]"
        draggable="false"
      />
    </span>
  )
}
