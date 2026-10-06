import { Link } from 'react-router-dom'

// Logo do protótipo (arquivos em /public/img):
// - logo.png         → versão escura, usada no header
// - logo-branca.png  → versão branca, usada no footer (prop `claro`)
export default function Logo({ claro = false, onClick }) {
  return (
    <Link
      to="/"
      className={`logo ${claro ? 'logo--claro' : ''}`}
      onClick={onClick}
      aria-label="Digital Project — página inicial"
    >
      <img
        className="logo__img"
        src={claro ? '/img/logo-branca.png' : '/img/logo.png'}
        alt="Digital Project"
        width={claro ? 145 : 70}
        height={claro ? 94 : 44}
      />
    </Link>
  )
}
