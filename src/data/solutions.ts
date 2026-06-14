// Solution plans. Display strings resolve via i18n key `solutions.<key>.*`.
// Each solution has its own image gallery, mirrored from farmanalytica.com.br
// (see public/img/sol/).
export interface Solution {
  key: 'basic' | 'premium' | 'assist' | 'monitoramento'
  gallery: string[]
  featured?: boolean
}

export const SOLUTIONS: Solution[] = [
  {
    key: 'basic',
    gallery: ['/img/sol/basic-1.webp', '/img/sol/basic-2.webp', '/img/sol/basic-3.webp'],
  },
  {
    key: 'premium',
    featured: true,
    gallery: [
      '/img/sol/premium-1.webp',
      '/img/sol/premium-2.webp',
      '/img/sol/premium-3.webp',
      '/img/sol/premium-4.webp',
    ],
  },
  {
    key: 'assist',
    gallery: ['/img/sol/assist-1.webp', '/img/sol/assist-2.webp', '/img/sol/assist-3.webp'],
  },
  {
    key: 'monitoramento',
    gallery: ['/img/sol/monit-1.webp', '/img/sol/monit-2.webp'],
  },
]
