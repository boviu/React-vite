import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from './Logo.jsx'

export const links = [
  { to: '/', label: 'Início' },
  { to: '/galeria', label: 'Galeria' },
  { to: '/projetos', label: 'Projetos' },
  { to: '/certificacoes', label: 'Certificações' },
  { to: '/contato', label: 'Contatos' },
]

export default function Header() {
  const [aberto, setAberto] = useState(false)

  return (
    <header className="header">
      <div className="header__inner">
        <Logo onClick={() => setAberto(false)} />

        <button
          className="header__toggle"
          aria-label="Abrir menu"
          aria-expanded={aberto}
          onClick={() => setAberto(!aberto)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav ${aberto ? 'nav--aberto' : ''}`}>
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) => `nav__link ${isActive ? 'nav__link--ativo' : ''}`}
              onClick={() => setAberto(false)}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
