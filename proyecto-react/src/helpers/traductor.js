const TRADUCCIONES = {
  es: {
    hola: 'hola'
  },
  en: {
    hola: 'hello'
  },
  fr: {
    hola: 'bonjour'
  },
}

export const traducir = (key, idioma) => {
  return TRADUCCIONES[idioma]?.[key] || 'No tenemos esta traducción'
}