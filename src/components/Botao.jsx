import { Link } from 'react-router-dom'
import { IconeSeta } from './Icones.jsx'

// variante "escuro": botão preenchido | variante "link": texto com seta
export default function Botao({ to, children, variante = 'escuro', seta = true, ...props }) {
  const classe = `botao botao--${variante}`
  const conteudo = (
    <>
      {children}
      {seta && <IconeSeta />}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={classe} {...props}>
        {conteudo}
      </Link>
    )
  }
  return (
    <button className={classe} {...props}>
      {conteudo}
    </button>
  )
}
