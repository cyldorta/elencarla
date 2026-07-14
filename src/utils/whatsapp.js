// Número da corretora (formato internacional, só dígitos)
export const WHATSAPP_NUM = "5579998681888"

// Saudação conforme o horário de quem está acessando
export function saudacao(date = new Date()) {
  const h = date.getHours()
  if (h >= 5 && h < 12) return "bom dia"
  if (h >= 12 && h < 18) return "boa tarde"
  return "boa noite"
}

// Link do WhatsApp com mensagem pré-definida (saudação dinâmica)
export function waLink() {
  const msg = `Olá, ${saudacao()}! Vim do seu site e gostaria de mais informações de imóveis.`
  return `https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent(msg)}`
}
