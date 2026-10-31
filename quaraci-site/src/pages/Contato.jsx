import Pagina from '../components/Pagina.jsx'
import { SUPPORT_EMAIL } from '../menu.js'
export default function Contato(){return <Pagina titulo="Contato" eyebrow="FALE COM O QUARACI" resumo="Dúvidas sobre o aplicativo ou sobre a iniciativa? Entre em contato.">
 <section className="content-block contact-layout"><div><p className="eyebrow">SUPORTE E INFORMAÇÕES</p><h2>Estamos disponíveis por e-mail.</h2><p>Para dúvidas, solicitações de suporte ou informações sobre o Quaraci App, utilize o endereço de contato informado na página do aplicativo na Google Play.</p><a className="btn" href={`mailto:${SUPPORT_EMAIL}`}>Enviar e-mail ↗</a></div><aside className="contact-card"><span>E-MAIL DE SUPORTE</span><a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a><small>Endereço informado na ficha do Quaraci na Google Play.</small></aside></section>
 </Pagina>}
