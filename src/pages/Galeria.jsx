import { useState } from 'react'
import TituloPagina from '../components/TituloPagina.jsx'
import Imagem from '../components/Imagem.jsx'
import Paginacao from '../components/Paginacao.jsx'
import { galeria } from '../data/projetos.js'

const POR_PAGINA = 10

export default function Galeria() {
  const [pagina, setPagina] = useState(1)
  const total = Math.ceil(galeria.length / POR_PAGINA)
  const fotos = galeria.slice((pagina - 1) * POR_PAGINA, pagina * POR_PAGINA)

  return (
    <section className="secao">
      <TituloPagina leve="Galeria" forte="de Fotos" />

      <div className="galeria">
        {fotos.map((src, i) => (
          <Imagem key={`${pagina}-${i}`} src={src} alt={`Foto ${i + 1} da galeria`} />
        ))}
      </div>

      <Paginacao pagina={pagina} total={total} onChange={setPagina} />
    </section>
  )
}
