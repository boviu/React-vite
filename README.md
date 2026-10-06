# Digital Project — Site de Arquitetura

Recuperação do 3º bimestre. Recriação do protótipo
[Website of Architects (Figma)](https://www.figma.com/community/file/891374608655348853/website-of-architects-free-website)
usando React + Vite + React Router.

## Integrantes

Aurora Santos Gonçalves

Letícia Anti de Freitas Andrade

## Tecnologias utilizadas

- React 19
- Vite
- React Router DOM

## Rotas

| Rota             | Página              | Descrição                                                        |
| ---------------- | ------------------- | ---------------------------------------------------------------- |
| `/`              | Início              | Hero com carrossel, sobre, missão, projetos, formulário          |
| `/galeria`       | Galeria de Fotos    | Grade de fotos com paginação                                     |
| `/projetos`      | Nossos Projetos     | Lista de projetos com paginação                                  |
| `/projetos/:id`  | Detalhes do Projeto | **Rota dinâmica** (usa `useParams`)                              |
| `/certificacoes` | Certificações       | Certificações da empresa                                         |
| `/sobre`         | Sobre               | Apresentação da empresa                                          |
| `/contato`       | Contatos            | Dados de contato, mapa e modal de formulário                     |
| `*`              | 404                 | Página não encontrada                                            |

## Rota dinâmica

A rota `/projetos/:id` é declarada em `src/App.jsx`. Em
`src/pages/ProjetoDetalhe.jsx`, o hook `useParams()` lê o `id` da URL e busca o
projeto em `src/data/projetos.js`. As listagens usam `<Link to={`/projetos/${id}`}>`.
Ids inexistentes mostram uma mensagem de "projeto não encontrado".

## Estrutura

```
src/
├── components/   # Layout, Header, Footer, Logo, Botao, Imagem, TituloPagina,
│                 # Paginacao, ModalContato, Icones
├── data/         # projetos.js (projetos, galeria, certificações, dados da empresa)
├── pages/        # Home, Galeria, Projetos, ProjetoDetalhe, Certificacoes,
│                 # Sobre, Contato, NotFound
├── styles/       # global.css
├── App.jsx       # Definição das rotas
└── main.jsx      # BrowserRouter
```

## Como executar

```bash
npm install
npm run dev
```

Build de produção: `npm run build`.

## Destaques

- Layout compartilhado com `<Outlet />` (cabeçalho e rodapé fixos entre as páginas)
- `NavLink` com destaque da página atual
- Carrossel no hero da Home (setas e contador)
- Paginação funcional na Galeria e em Projetos
- Modal "Faça uma pergunta" e modal de agradecimento (fecha com Esc ou clique fora)
- Responsivo, com menu hambúrguer no celular
- Imagens com fallback cinza caso o arquivo falhe
- Logo (versão escura e branca) e ícones das redes sociais; todas as imagens ficam em `public/img/`

## Imagens

As imagens do protótipo ficam em `public/img/` e são referenciadas em
`src/data/projetos.js` (objeto `imagens`, listas de projetos, galeria e hero).
Para trocar uma foto, substitua o arquivo ou altere o caminho nesse arquivo.
