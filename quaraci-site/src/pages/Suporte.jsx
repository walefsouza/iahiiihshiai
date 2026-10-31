import Pagina from '../components/Pagina.jsx'
import { SUPPORT_EMAIL } from '../menu.js'
export default function Suporte(){return <Pagina titulo="Suporte" eyebrow="AJUDA COM O APLICATIVO" resumo="Precisa de ajuda para utilizar o Quaraci App?">
 <section className="content-block"><h2>Como solicitar suporte</h2><p>Envie uma mensagem para o e-mail de suporte informando que está utilizando o Quaraci App e descrevendo sua dúvida ou dificuldade. Se possível, inclua o modelo do aparelho e a versão do sistema, sem enviar senhas ou informações sensíveis.</p><a className="btn" href={`mailto:${SUPPORT_EMAIL}?subject=Suporte%20Quaraci%20App`}>Falar com o suporte ↗</a><p className="small-note">E-mail divulgado na página do aplicativo na Google Play: {SUPPORT_EMAIL}.</p></section>
 </Pagina>}
