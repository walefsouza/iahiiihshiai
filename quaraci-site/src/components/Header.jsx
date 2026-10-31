import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Marca from './Marca.jsx'
import { MENU, PLAY_URL } from '../menu.js'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => setMobileOpen(false), [pathname])

  useEffect(() => {
    const close = event => {
      if (event.key === 'Escape') setMobileOpen(false)
    }
    document.addEventListener('keydown', close)
    return () => document.removeEventListener('keydown', close)
  }, [])

  return <header className="site-header">
    <div className="wrap bar">
      <Link to="/" className="brand" aria-label="Quaraci, página inicial"><Marca /> <span>quaraci</span></Link>
      <button className="menu-toggle" aria-expanded={mobileOpen} aria-controls="menu-principal" onClick={() => setMobileOpen(!mobileOpen)}>{mobileOpen ? 'Fechar' : 'Menu'}</button>
      <nav id="menu-principal" className={'nav' + (mobileOpen ? ' is-open' : '')} aria-label="Navegação principal">
        <ul>{MENU.map(item => <li key={item.to}><NavLink end={item.to === '/'} to={item.to} className={({isActive}) => 'nav-link' + (isActive ? ' active' : '')}>{item.label}</NavLink></li>)}</ul>
      </nav>
      <div className="bar-actions">
        <a className="btn header-cta" href={PLAY_URL} target="_blank" rel="noreferrer">Baixar o app <span aria-hidden="true">↗</span></a>
      </div>
    </div>
  </header>
}
