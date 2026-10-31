import { Link } from 'react-router-dom'
import Marca from './Marca.jsx'
import { MENU, PLAY_URL, SUPPORT_EMAIL } from '../menu.js'
export default function Footer() {
 return <footer className="site-footer">
  <div className="wrap footer-top">
   <div className="footer-about"><Link to="/" className="footer-brand"><Marca size={34}/> Quaraci</Link><p>Turismo, território e comunidades: conheça a proposta do Quaraci e o aplicativo.</p><a className="footer-download" href={PLAY_URL} target="_blank" rel="noreferrer">Conheça o Quaraci App ↗</a></div>
   <nav aria-label="Navegação do rodapé"><h2>Explore</h2><ul>{MENU.map(m=><li key={m.to}><Link to={m.to}>{m.label}</Link></li>)}</ul></nav>
   <nav aria-label="Ajuda e informações"><h2>Ajuda e informações</h2><ul><li><Link to="/ajuda/guia-do-aplicativo">Guia do aplicativo</Link></li><li><Link to="/ajuda/suporte">Suporte</Link></li><li><Link to="/privacidade">Política de privacidade</Link></li><li><Link to="/exclusao-de-conta">Exclusão de conta</Link></li><li><a href={`mailto:${SUPPORT_EMAIL}`}>E-mail de suporte</a></li></ul></nav>
  </div>
  <div className="wrap footer-bottom"><span>© Quaraci. Todos os direitos reservados.</span><span>Um projeto ligado à pesquisa, à extensão e ao território.</span></div>
 </footer>
}
