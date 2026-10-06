import { IconeSeta } from './Icones.jsx'

const dois = (n) => String(n).padStart(2, '0')

export default function Paginacao({ pagina, total, onChange }) {
  return (
    <div className="paginacao">
      <span className="paginacao__atual">{dois(pagina)}</span>
      <span className="paginacao__sep">/</span>
      <span className="paginacao__total">{dois(total)}</span>
      <button
        aria-label="Página anterior"
        disabled={pagina === 1}
        onClick={() => onChange(pagina - 1)}
      >
        <IconeSeta direcao="esquerda" />
      </button>
      <button
        aria-label="Próxima página"
        disabled={pagina === total}
        onClick={() => onChange(pagina + 1)}
      >
        <IconeSeta />
      </button>
    </div>
  )
}
