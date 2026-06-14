// Founders. Role/name/bio resolve via i18n key `founders.<key>.*`.
export interface Founder {
  key: 'gustavo' | 'caio'
  image: string
  linkedin: string
}

export const FOUNDERS: Founder[] = [
  {
    key: 'gustavo',
    image: '/img/founder-gustavo.webp',
    linkedin: 'https://www.linkedin.com/in/gustavosettijunqueirapimenta/',
  },
  {
    key: 'caio',
    image: '/img/founder-caio.webp',
    linkedin: 'https://www.linkedin.com/in/caioarantes',
  },
]
