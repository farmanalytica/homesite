// Blog posts mirrored from farmanalytica.com.br/blog (Portuguese content).
// `url` points to the existing WordPress article until posts are migrated in-app.
export interface Post {
  title: string
  url: string
  topic: string
}

export const POSTS: Post[] = [
  {
    title: 'Agricultura de Precisão que Cabe no Bolso: O ROI do Monitoramento por Satélite',
    url: 'https://farmanalytica.com.br/blog/682/',
    topic: 'Agricultura de precisão',
  },
  {
    title: 'Além do NDVI: Desbloqueando Análises Avançadas com NDRE e SAVI',
    url: 'https://farmanalytica.com.br/blog/alem-do-ndvi-desbloqueando-analises-avancadas-com-ndre-e-savi/',
    topic: 'Índices de vegetação',
  },
  {
    title:
      'Do Mapa de NDVI à Ação: 5 Problemas Críticos que Você Pode Identificar na Lavoura (Antes que Virem Prejuízo)',
    url: 'https://farmanalytica.com.br/blog/do-mapa-de-ndvi-a-acao-5-problemas-criticos-que-voce-pode-identificar-na-lavoura-antes-que-virem-prejuizo/',
    topic: 'Sensoriamento remoto',
  },
  {
    title:
      'Sensoriamento Remoto na Agricultura: Satélites vs. Drones — Qual a Melhor Ferramenta para a Sua Realidade?',
    url: 'https://farmanalytica.com.br/blog/674/',
    topic: 'Sensoriamento remoto',
  },
  {
    title: 'O Raio-X Digital da Sua Lavoura',
    url: 'https://farmanalytica.com.br/blog/o-raio-x-digital-da-sua-lavoura/',
    topic: 'Sensoriamento remoto',
  },
  {
    title: 'Introdução: Da Agricultura 4.0 para a 5.0',
    url: 'https://farmanalytica.com.br/blog/introducao-da-agricultura-4-0-para-a-5-0/',
    topic: 'Agricultura digital',
  },
  {
    title:
      'Agricultura de Precisão para Pequenos e Médios Produtores: Por Onde Começar sem Grandes Investimentos?',
    url: 'https://farmanalytica.com.br/blog/agricultura-de-precisao-para-pequenos-e-medios-produtores-por-onde-comecar-sem-grandes-investimentos/',
    topic: 'Agricultura de precisão',
  },
  {
    title:
      'O ROI da Agricultura de Precisão: Um Guia Prático para Calcular o Retorno do seu Investimento',
    url: 'https://farmanalytica.com.br/blog/o-roi-da-agricultura-de-precisao-um-guia-pratico-para-calcular-o-retorno-do-seu-investimento/',
    topic: 'Agricultura de precisão',
  },
  {
    title: 'O Paradoxo Digital das Cooperativas',
    url: 'https://farmanalytica.com.br/blog/gestao-inteligente-para-cooperativas-5-passos-para-integrar-dados-e-fortalecer-o-cooperativismo-na-era-digital/',
    topic: 'Cooperativas',
  },
  {
    title:
      'Agricultura Digital em 2025: Como Superar os 3 Maiores Desafios do Produtor Brasileiro com Estratégia',
    url: 'https://farmanalytica.com.br/blog/agricultura-digital-em-2025-como-superar-os-3-maiores-desafios-do-produtor-brasileiro-com-estrategia/',
    topic: 'Agricultura digital',
  },
]
