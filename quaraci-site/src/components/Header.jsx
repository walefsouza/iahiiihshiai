import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Marca from './Marca.jsx'
import AccessibilityPanel from './AccessibilityPanel.jsx'
import { MENU, PLAY_URL } from '../menu.js'
export default function Header({ prefs, setPrefs, defaults, a11yOpen, setA11yOpen }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const navRef = useRef(null)
  const { pathname } = useLocation()
  useEffect(() => setMobileOpen(false), [pathname])
  useEffect(() => {
    const close = e => { if (e.key === 'Escape') setMobileOpen(false) }
    document.addEventListener('keydown', close)
    return () => document.removeEventListener('keydown', close)
  }, [])
  return <>
    <header className="site-header">
      <div className="wrap bar">
        <Link to="/" className="brand" aria-label="Quaraci, página inicial"><Marca /> <span>quaraci</span></Link>
        <button className="menu-toggle" aria-expanded={mobileOpen} aria-controls="menu-principal" onClick={() => setMobileOpen(!mobileOpen)}>{mobileOpen ? 'Fechar' : 'Menu'}</button>
        <nav ref={navRef} id="menu-principal" className={'nav' + (mobileOpen ? ' is-open' : '')} aria-label="Navegação principal">
          <ul>{MENU.map(item => <li key={item.to}><NavLink end={item.to === '/'} to={item.to} className={({isActive}) => 'nav-link' + (isActive ? ' active' : '')}>{item.label}</NavLink></li>)}</ul>
        </nav>
        <div className="bar-actions">
          <button className="a11y-toggle" aria-expanded={a11yOpen} aria-controls="painel-acessibilidade" onClick={() => setA11yOpen(!a11yOpen)} aria-label="Opções de acessibilidade">Acessibilidade</button>
          <a className="btn header-cta" href={PLAY_URL} target="_blank" rel="noreferrer">Baixar o app <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </header>
    {a11yOpen && <AccessibilityPanel prefs={prefs} setPrefs={setPrefs} defaults={defaults} onClose={() => setA11yOpen(false)} />}
  </>
}
