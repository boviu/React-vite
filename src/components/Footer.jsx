import { Link } from 'react-router-dom'
import Logo from './Logo.jsx'
import { IconePin, IconeTelefone, IconeEmail, Redes } from './Icones.jsx'
import { links } from './Header.jsx'
import { empresa } from '../data/projetos.js'

export default function Footer() {
  return (
    <footer className="footer colunas colunas--escuras">
      <div className="footer__grid">
        <div>
          <Logo claro />
        </div>

        <div>
          <h4>Informações</h4>
          <ul className="footer__lista">
            {links.map((l) => (
              <li key={l.to}>
                <Link to={l.to}>{l.label}</Link>
              </li>
            ))}
            <li>
              <Link to="/sobre">Sobre</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4>Contatos</h4>
          <ul className="footer__contatos">
            <li>
              <IconePin />
              <span>
                {empresa.endereco[0]}
                <br />
                {empresa.endereco[1]}
              </span>
            </li>
            <li>
              <IconeTelefone />
              <span>{empresa.telefone}</span>
            </li>
            <li>
              <IconeEmail />
              <span>{empresa.email}</span>
            </li>
          </ul>
        </div>

        <div>
          <h4>Redes Sociais</h4>
          <Redes />
        </div>
      </div>

      <p className="footer__copy">© {new Date().getFullYear()} Digital Project. Todos os direitos reservados.</p>
    </footer>
  )
}
