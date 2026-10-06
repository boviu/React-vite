import { useParams, Link } from 'react-router-dom'
import TituloPagina from '../components/TituloPagina.jsx'
import Imagem from '../components/Imagem.jsx'
import Botao from '../components/Botao.jsx'
import { projetos } from '../data/projetos.js'

export default function ProjetoDetalhe() {
  // Lê o parâmetro dinâmico da URL: /projetos/:id
  const { id } = useParams()
  const projeto = projetos.find((p) => p.id === Number(id))

  if (!projeto) {
    return (
      <section className="secao centro">
        <TituloPagina leve="Projeto" forte="não encontrado" />
        <p className="texto">Não existe nenhum projeto com o código “{id}”.</p>
        <Botao to="/projetos">VOLTAR AOS PROJETOS</Botao>
      </section>
    )
  }

  // "Projeto Exemplo 1" -> leve: "Projeto", forte: "Exemplo 1"
  const [primeira, ...resto] = projeto.nome.split(' ')

  const indice = projetos.findIndex((p) => p.id === projeto.id)
  const anterior = projetos[(indice - 1 + projetos.length) % projetos.length]
  const proximo = projetos[(indice + 1) % projetos.length]

  return (
    <section className="secao">
      <TituloPagina leve={primeira} forte={resto.join(' ')} />

      <Imagem src={projeto.capa} alt={projeto.nome} className="detalhe__capa" />

      <div className="detalhe__corpo">
        <Imagem src={projeto.imagemMenor} alt={`${projeto.nome} — interior`} className="detalhe__menor" />
        <div className="detalhe__texto">
          {projeto.texto.map((t, i) => (
            <p key={i}>{t}</p>
          ))}
        </div>
      </div>

      <div className="detalhe__plantas">
        {projeto.planta.map((src, i) => (
          <Imagem key={i} src={src} alt={`Planta ${i + 1}`} />
        ))}
      </div>

      <div className="detalhe__nav">
        <Link to={`/projetos/${anterior.id}`}>← {anterior.nome}</Link>
        <Link to="/projetos">Todos os projetos</Link>
        <Link to={`/projetos/${proximo.id}`}>{proximo.nome} →</Link>
      </div>
    </section>
  )
}
