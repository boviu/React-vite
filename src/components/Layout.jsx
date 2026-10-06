import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

export default function Layout() {
  const { pathname } = useLocation()

  // Volta ao topo a cada troca de página
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="pagina">
      <Header />
      <main className="colunas">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
