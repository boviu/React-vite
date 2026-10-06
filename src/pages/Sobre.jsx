import TituloPagina from '../components/TituloPagina.jsx'
import Imagem from '../components/Imagem.jsx'
import Botao from '../components/Botao.jsx'
import { imagens } from '../data/projetos.js'

export default function Sobre() {
  return (
    <section className="secao">
      <TituloPagina leve="Sobre a" forte="Empresa" />

      <div className="sobre">
        <Imagem src={imagens.hero} alt="Edifício projetado pela Digital Project" />
        <div className="sobre__texto">
          <p>
            A Digital Project é um escritório de arquitetura voltado a projetos que combinam
            design contemporâneo, eficiência e sustentabilidade. Atuamos do estudo preliminar ao
            acompanhamento de obra, em projetos residenciais, corporativos e institucionais.
          </p>
          <p>
            Acreditamos que a boa arquitetura nasce da escuta: cada terreno, cada cliente e cada
            cidade pedem uma resposta própria. Por isso, nosso processo é colaborativo e
            transparente em todas as etapas.
          </p>
          <p>
            Nossa equipe multidisciplinar reúne arquitetos, urbanistas, engenheiros e designers de
            interiores, sempre atualizados com as melhores práticas e tecnologias do mercado.
          </p>
          <div className="numeros">
            <div>
              <strong>15+</strong>
              <span>anos de experiência</span>
            </div>
            <div>
              <strong>120</strong>
              <span>projetos entregues</span>
            </div>
            <div>
              <strong>18</strong>
              <span>prêmios</span>
            </div>
          </div>
          <Botao to="/contato">FALE CONOSCO</Botao>
        </div>
      </div>
    </section>
  )
}
