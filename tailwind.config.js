/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        // ── Editorial premium · "Beauty in STEM"-inspired ──
        ink:    "#16150F",   // texto / superfícies escuras (preto quente)
        ink2:   "#22201A",   // superfície escura alternativa
        bone:   "#ECE6DB",   // canvas principal (off-white quente)
        sand:   "#E2DACB",   // seção alternativa
        paper:  "#F7F4ED",   // cartões / superfície clara
        line:   "#D7CEBE",   // bordas / hairlines
        stone:  "#8A8170",   // texto secundário
        olive:  "#4F5942",   // acento botânico profundo (assinatura)
        sage:   "#79836A",   // acento médio
        clay:   "#B96A45",   // acento quente / conversão (uso pontual)

        // aliases de compatibilidade
        primary:   "#16150F",
        accent:    "#4F5942",
      },
      fontFamily: {
        display: ['"Fraunces"', "Georgia", "serif"],
        body:    ['"Inter"', "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter2: "-0.025em",
        widest3:  "0.28em",
      },
      boxShadow: {
        soft:   "0 2px 24px rgba(22,21,15,0.06), 0 1px 3px rgba(22,21,15,0.04)",
        lift:   "0 30px 60px -24px rgba(22,21,15,0.28)",
        editor: "0 40px 90px -40px rgba(22,21,15,0.45)",
      },
      borderRadius: {
        xl2: "1.5rem",
        xl3: "2rem",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      backgroundImage: {
        "grain": "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}
