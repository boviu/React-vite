import { useState } from 'react'
import { Link } from 'react-router-dom'
import Imagem from '../components/Imagem.jsx'
import Botao from '../components/Botao.jsx'
import ModalContato from '../components/ModalContato.jsx'
import { IconeSeta } from '../components/Icones.jsx'
import { destaques, imagens, projetos } from '../data/projetos.js'

const dois = (n) => String(n).padStart(2, '0')

function Hero() {
  const [i, setI] = useState(0)
  const atual = destaques[i]
  const anterior = () => setI((i - 1 + destaques.length) % destaques.length)
  const proximo = () => setI((i + 1) % destaques.length)

  return (
    <section className="hero">
      <div className="hero__texto">
        <h1 className="titulo titulo--grande">
          <span className="titulo__leve">PROJETO</span>
          <span className="titulo__forte">{atual.titulo}</span>
        </h1>
        <div className="hero__controles">
          <button aria-label="Slide anterior" onClick={anterior}>
            <IconeSeta direcao="esquerda" />
          </button>
          <button aria-label="Próximo slide" onClick={proximo}>
            <IconeSeta />
          </button>
        </div>
        <div className="hero__contador">
          <strong>{dois(i + 1)}</strong> <span>/ {dois(destaques.length)}</span>
        </div>
      </div>

      <div className="hero__imagem">
        <Imagem src={atual.imagem} alt={`Projeto ${atual.titulo}`} />
        <Botao to={`/projetos/${atual.id}`} variante="link">
          VER PROJETO
        </Botao>
      </div>
    </section>
  )
}

function Sobre() {
  return (
    <section className="secao sobre-home">
      <div className="sobre-home__colagem">
        <Imagem src={imagens.sobre1} alt="Edifício de vidro" className="c1" />
        <Imagem src={imagens.sobre2} alt="Fachada de vidro" className="c2" />
        <Imagem src={imagens.sobre3} alt="Detalhe em preto e branco" className="c3" />
      </div>
      <div className="sobre-home__texto">
        <h2 className="titulo titulo--secao">
          <span className="titulo__leve">Sobre</span>
        </h2>
        <p>
          Somos um escritório de arquitetura dedicado a criar espaços funcionais, bonitos e
          sustentáveis. Há mais de uma década atuamos em projetos residenciais, corporativos e
          institucionais, sempre com atenção aos detalhes e ao prazo.
        </p>
        <p>
          Nossa equipe reúne arquitetos, engenheiros e designers que trabalham juntos desde o
          estudo preliminar até a entrega da obra, acompanhando cada etapa de perto.
        </p>
        <Botao to="/sobre" variante="link">
          VER MAIS
        </Botao>
      </div>
    </section>
  )
}

function Missao() {
  return (
    <section className="secao">
      <h2 className="titulo titulo--secao">
        <span className="titulo__leve">Foco Principal / Declaração de Missão</span>
      </h2>
      <div className="missao">
        <div className="missao__item">
          <span className="missao__numero">1</span>
          <p>
            Projetar com responsabilidade, unindo criatividade, técnica e respeito ao meio
            ambiente em cada obra que assinamos.
          </p>
        </div>
        <div className="missao__item">
          <span className="missao__numero">2</span>
          <p>
            Entregar a melhor experiência ao cliente, com transparência, comunicação clara e
            compromisso com os resultados.
          </p>
        </div>
      </div>
    </section>
  )
}

function NossosProjetos() {
  return (
    <section className="secao">
      <h2 className="titulo titulo--secao">
        <span className="titulo__leve">Nossos Projetos</span>
      </h2>

      <div className="mosaico">
        <Link to="/projetos/1" className="mosaico__item m1 mosaico__item--escuro">
          <Imagem src={projetos[0].imagem} alt="Projeto Exemplo" />
          <span className="mosaico__legenda">
            Projeto
            <br />
            Exemplo
          </span>
        </Link>
        <Link to="/projetos/2" className="mosaico__item m2">
          <Imagem src={imagens.mosaico1} alt="Projeto com cúpula" />
        </Link>
        <Link to="/projetos/3" className="mosaico__item m3">
          <Imagem src={imagens.mosaico2} alt="Vista aérea de projeto" />
        </Link>
        <Link to="/projetos/4" className="mosaico__item m4">
          <Imagem src={imagens.mosaico3} alt="Conjunto de edifícios" />
        </Link>
        <Link to="/projetos/5" className="mosaico__item m5">
          <Imagem src={imagens.mosaico4} alt="Monumento" />
        </Link>
      </div>

      <div className="direita">
        <Botao to="/projetos">TODOS OS PROJETOS</Botao>
      </div>
    </section>
  )
}

function FaleConosco() {
  const [modal, setModal] = useState(false)

  function enviar(e) {
    e.preventDefault()
    setModal(true)
    e.target.reset()
  }

  return (
    <section className="secao">
      <h2 className="titulo titulo--secao">
        <span className="titulo__leve">Fale Conosco</span>
      </h2>

      <div className="fale">
        <form className="fale__form" onSubmit={enviar}>
          <input type="text" placeholder="Nome" required />
          <input type="tel" placeholder="Telefone" required />
          <input type="email" placeholder="E-mail" required />
          <input type="text" placeholder="Assunto" />
          <textarea placeholder="Mensagem" rows="5" required />
          <div>
            <Botao type="submit">ENVIAR E-MAIL</Botao>
          </div>
        </form>
        <div className="fale__foto">
          <Imagem src={imagens.telefone} alt="Homem ao telefone" />
        </div>
      </div>

      <ModalContato aberto={modal} etapaInicial="sucesso" onClose={() => setModal(false)} />
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <Sobre />
      <Missao />
      <NossosProjetos />
      <FaleConosco />
    </>
  )
}
