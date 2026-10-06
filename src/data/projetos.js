// Imagens do protótipo (ficam em /public/img)
const img = (nome) => `/img/${nome}`

export const imagens = {
  hero: img('hero-1.jpg'),
  sobre1: img('sobre-1.png'),
  sobre2: img('sobre-2.png'),
  sobre3: img('sobre-3.png'),
  mosaico1: img('mosaico-1.png'), // cúpula
  mosaico2: img('mosaico-2.png'), // vista aérea
  mosaico3: img('mosaico-3.png'), // edifícios
  mosaico4: img('mosaico-4.png'), // monumento
  telefone: img('contato-telefone.jpg'),
  projeto1: img('projeto-1.png'),
  projeto2: img('projeto-2.png'),
  projeto3: img('projeto-3.png'),
  detalheCapa: img('detalhe-capa.png'),
  detalheInterior: img('detalhe-interior.png'),
  detalhePlanta: img('detalhe-planta.png'),
}

const textoCurto =
  'O projeto parte da relação entre o terreno, a luz natural e as pessoas que vão ocupar o espaço. Cada decisão, da implantação aos materiais, busca equilíbrio entre estética, conforto e desempenho.'

const textoLongo = [
  'Este projeto nasceu da necessidade de reunir, em um único edifício, ambientes de trabalho colaborativos e áreas de concentração. A planta foi organizada em módulos hexagonais, que favorecem a circulação e a integração entre as equipes.',
  'A fachada recebeu grandes aberturas para aproveitar a iluminação natural durante todo o dia, reduzindo o consumo de energia. Na estrutura, optamos por materiais duráveis e de fácil manutenção, mantendo um acabamento limpo e contemporâneo.',
  'Nos espaços internos, a paleta em tons neutros e o mobiliário sob medida criam uma atmosfera sóbria e acolhedora. Cada estação de trabalho foi pensada para oferecer ergonomia, privacidade e flexibilidade de uso.',
  'O resultado é um ambiente que acompanha o crescimento da empresa, com infraestrutura preparada para futuras ampliações e para novas formas de trabalho.',
]

const detalhe = {
  imagemMenor: imagens.detalheInterior,
  planta: [imagens.detalhePlanta],
  texto: textoLongo,
}

export const projetos = [
  { id: 1, nome: 'Projeto Exemplo 1', imagem: imagens.projeto1, capa: imagens.detalheCapa, resumo: textoCurto, ...detalhe },
  { id: 2, nome: 'Projeto Exemplo 2', imagem: imagens.projeto2, capa: imagens.detalheCapa, resumo: textoCurto, ...detalhe },
  { id: 3, nome: 'Projeto Exemplo 3', imagem: imagens.projeto3, capa: imagens.detalheCapa, resumo: textoCurto, ...detalhe },
  { id: 4, nome: 'Projeto Exemplo 4', imagem: imagens.mosaico3, capa: imagens.detalheCapa, resumo: textoCurto, ...detalhe },
  { id: 5, nome: 'Projeto Exemplo 5', imagem: imagens.mosaico2, capa: imagens.detalheCapa, resumo: textoCurto, ...detalhe },
  { id: 6, nome: 'Projeto Exemplo 6', imagem: imagens.mosaico4, capa: imagens.detalheCapa, resumo: textoCurto, ...detalhe },
]

// Slides do hero da Home
export const destaques = [
  { id: 1, titulo: 'Lorum', imagem: imagens.hero },
  { id: 2, titulo: 'Ipsum', imagem: imagens.sobre2 },
  { id: 3, titulo: 'Dolor', imagem: imagens.sobre1 },
]

// Galeria: 10 fotos por página (a 1ª é o espaço cinza do protótipo). A 2ª página repete as fotos.
const fotos = Array.from({ length: 10 }, (_, i) => img(`galeria-${String(i + 1).padStart(2, '0')}.png`))
export const galeria = [...fotos, ...fotos]

export const certificacoes = [
  { id: 1, nome: 'ISO 9001', descricao: 'Sistema de gestão da qualidade' },
  { id: 2, nome: 'ISO 14001', descricao: 'Gestão ambiental' },
  { id: 3, nome: 'AQUA-HQE', descricao: 'Alta qualidade ambiental' },
  { id: 4, nome: 'LEED', descricao: 'Construção sustentável' },
  { id: 5, nome: 'CREA / CAU', descricao: 'Registro profissional' },
  { id: 6, nome: 'PBQP-H', descricao: 'Qualidade do habitat' },
]

export const empresa = {
  nome: 'Digital Project',
  endereco: ['Av. Paulista, 1234, Sala 56', 'São Paulo – SP, 01310-100'],
  telefone: '(11) 3333-2222',
  email: 'contato@digitalproject.com.br',
}
