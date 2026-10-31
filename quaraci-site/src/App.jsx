import { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import NossoTrabalho from './pages/NossoTrabalho.jsx'
import Aplicativo from './pages/Aplicativo.jsx'
import Territorios from './pages/Territorios.jsx'
import Publicacoes from './pages/Publicacoes.jsx'
import GuiaApp from './pages/GuiaApp.jsx'
import Suporte from './pages/Suporte.jsx'
import Contato from './pages/Contato.jsx'
import Privacidade from './pages/Privacidade.jsx'
import ExclusaoConta from './pages/ExclusaoConta.jsx'

const DEFAULTS = { fontScale: 100, contrast: false, underline: false, calm: false }
function loadPrefs() {
  try { return { ...DEFAULTS, ...JSON.parse(localStorage.getItem('a11y') || '{}') } }
  catch { return DEFAULTS }
}
export default function App() {
  const [prefs, setPrefs] = useState(loadPrefs)
  const [a11yOpen, setA11yOpen] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => {
    const root = document.documentElement
    root.style.fontSize = prefs.fontScale + '%'
    root.classList.toggle('contrast', prefs.contrast)
    root.classList.toggle('underline-links', prefs.underline)
    root.classList.toggle('calm', prefs.calm)
    try { localStorage.setItem('a11y', JSON.stringify(prefs)) } catch {}
  }, [prefs])
  useEffect(() => { window.scrollTo(0, 0); setA11yOpen(false) }, [pathname])
  return <>
    <a className="skip" href="#conteudo">Ir para o conteúdo</a>
    <Header prefs={prefs} setPrefs={setPrefs} defaults={DEFAULTS} a11yOpen={a11yOpen} setA11yOpen={setA11yOpen} />
    <main id="conteudo" tabIndex={-1}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projeto" element={<NossoTrabalho />} />
        <Route path="/projeto/nosso-trabalho" element={<NossoTrabalho />} />
        <Route path="/aplicativo" element={<Aplicativo />} />
        <Route path="/projeto/aplicativo" element={<Aplicativo />} />
        <Route path="/territorios" element={<Territorios />} />
        <Route path="/publicacoes" element={<Publicacoes />} />
        <Route path="/ajuda/guia-do-aplicativo" element={<GuiaApp />} />
        <Route path="/ajuda/suporte" element={<Suporte />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/ajuda/contato" element={<Contato />} />
        <Route path="/privacidade" element={<Privacidade />} />
        <Route path="/politica-de-privacidade" element={<Privacidade />} />
        <Route path="/exclusao-de-conta" element={<ExclusaoConta />} />
        <Route path="*" element={<section className="wrap section"><p className="eyebrow">ERRO 404</p><h1>Esta página não foi encontrada.</h1><a className="btn" href="/">Voltar ao início</a></section>} />
      </Routes>
    </main>
    <Footer />
  </>
}
