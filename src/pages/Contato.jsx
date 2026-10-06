import { useState } from 'react'
import TituloPagina from '../components/TituloPagina.jsx'
import ModalContato from '../components/ModalContato.jsx'
import { empresa } from '../data/projetos.js'

export default function Contato() {
  const [modal, setModal] = useState(false)

  return (
    <section className="secao">
      <TituloPagina leve="Informações" forte="de Contato" />

      <div className="contato">
        <div className="contato__info">
          <h2>{empresa.nome}</h2>
          <p>
            {empresa.endereco[0]}
            <br />
            {empresa.endereco[1]}
          </p>
          <p>{empresa.telefone}</p>
          <p>{empresa.email}</p>
          <button className="botao botao--escuro" onClick={() => setModal(true)}>
            CONTATAR
          </button>
        </div>

        <div className="contato__mapa">
          <iframe
            title="Mapa — localização do escritório"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-46.6700%2C-23.5700%2C-46.6450%2C-23.5530&layer=mapnik&marker=-23.5613%2C-46.6560"
            loading="lazy"
          />
        </div>
      </div>

      <ModalContato aberto={modal} onClose={() => setModal(false)} />
    </section>
  )
}
