import TituloPagina from '../components/TituloPagina.jsx'
import Botao from '../components/Botao.jsx'

export default function NotFound() {
  return (
    <section className="secao centro">
      <TituloPagina leve="Erro 404" forte="Página não encontrada" />
      <p className="texto">O endereço que você tentou acessar não existe.</p>
      <Botao to="/">VOLTAR AO INÍCIO</Botao>
    </section>
  )
}
