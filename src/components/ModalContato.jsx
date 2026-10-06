import { useEffect, useState } from 'react'
import { IconeFechar, IconeCheck } from './Icones.jsx'

// Modal de 2 etapas: formulário "Faça uma pergunta" -> mensagem de sucesso.
// `etapaInicial="sucesso"` abre direto na mensagem de agradecimento (usado no formulário da Home).
export default function ModalContato({ aberto, etapaInicial = 'form', onClose }) {
  const [etapa, setEtapa] = useState(etapaInicial)

  useEffect(() => {
    if (aberto) setEtapa(etapaInicial)
  }, [aberto, etapaInicial])

  useEffect(() => {
    if (!aberto) return
    const aoTeclar = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', aoTeclar)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', aoTeclar)
      document.body.style.overflow = ''
    }
  }, [aberto, onClose])

  if (!aberto) return null

  function enviar(e) {
    e.preventDefault()
    setEtapa('sucesso')
  }

  return (
    <div className="modal__fundo" onClick={onClose} role="presentation">
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal__fechar" aria-label="Fechar" onClick={onClose}>
          <IconeFechar />
        </button>

        {etapa === 'form' ? (
          <form onSubmit={enviar} className="modal__form">
            <h2>Faça uma pergunta</h2>
            <input type="text" name="nome" placeholder="Nome" />
            <input type="tel" name="telefone" placeholder="Número de telefone *" required />
            <input type="email" name="email" placeholder="E-mail *" required />
            <input type="text" name="interesse" placeholder="Produto/serviço de interesse" />
            <textarea name="mensagem" placeholder="Mensagem *" rows="6" required />
            <label className="modal__check">
              <input type="checkbox" defaultChecked required />
              <span>Ao enviar a solicitação, você concorda com a política de privacidade</span>
            </label>
            <button type="submit" className="botao botao--escuro botao--bloco">
              Enviar
            </button>
          </form>
        ) : (
          <div className="modal__sucesso">
            <div className="modal__selo">
              <span>
                <IconeCheck />
              </span>
            </div>
            <h2>Obrigado!</h2>
            <p>Sua mensagem foi enviada. Entraremos em contato com você o mais breve possível.</p>
            <button type="button" className="botao botao--escuro botao--bloco" onClick={onClose}>
              Voltar
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
