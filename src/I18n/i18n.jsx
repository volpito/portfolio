const FR = require ('../I18n/langages/fr')
const EN = require ('../I18n/langages/en')

export const translation = (language, key) => {
  if (language === 'en'){
    return EN[key]
  }
  else if (language === 'fr'){
    return FR[key]
  }
}