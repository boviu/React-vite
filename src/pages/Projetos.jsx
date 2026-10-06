import { useState } from 'react'
import TituloPagina from '../components/TituloPagina.jsx'
import Imagem from '../components/Imagem.jsx'
import Botao from '../components/Botao.jsx'
import Paginacao from '../components/Paginacao.jsx'
import { projetos } from '../data/projetos.js'

const POR_PAGINA = 3

export default function Projetos() {
  const [pagina, setPagina] = useState(1)
  const total = Math.ceil(projetos.length / POR_PAGINA)
  const lista = projetos.slice((pagina - 1) * POR_PAGINA, pagina * POR_PAGINA)

  return (
    <section className="secao">
      <TituloPagina leve="Nossos" forte="Projetos" />

      <div className="lista-projetos">
        {lista.map((p) => (
          <article className="projeto-linha" key={p.id}>
            <Imagem src={p.imagem} alt={p.nome} />
            <div className="projeto-linha__card">
              <h2>{p.nome}</h2>
              <p>{p.resumo}</p>
              <Botao to={`/projetos/${p.id}`} variante="link">
                VER MAIS
              </Botao>
            </div>
          </article>
        ))}
      </div>

      <Paginacao pagina={pagina} total={total} onChange={setPagina} />
    </section>
  )
}
