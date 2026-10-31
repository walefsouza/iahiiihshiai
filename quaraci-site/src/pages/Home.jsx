import { Link } from 'react-router-dom'
import Paisagem from '../components/Paisagem.jsx'
import { PLAY_URL } from '../menu.js'

export default function Home() {
  return <>
    <section className="wrap hero">
      <div className="hero-copy">
        <p className="eyebrow">TURISMO • CULTURA • TERRITÓRIO</p>
        <h1>Conhecer um lugar também é <em>viver suas histórias.</em></h1>
        <p className="lead">O Quaraci conecta pessoas aos saberes e às experiências das comunidades tradicionais. Um convite a conhecer o cotidiano, os modos de vida e as relações com a natureza que dão sentido a cada território.</p>
        <div className="actions">
          <a className="btn" href={PLAY_URL} target="_blank" rel="noreferrer">Conheça o Quaraci App <span>↗</span></a>
          <Link className="text-link" to="/projeto">Entenda o projeto <span>→</span></Link>
        </div>
        <p className="hero-note">Pesquisa, extensão e tecnologia como caminhos de conexão e valorização territorial.</p>
      </div>
      <div className="hero-art">
        <Paisagem />
        <span className="art-caption">Ilustração provisória — espaço para imagens dos territórios.</span>
      </div>
    </section>

    <section className="statement-section">
      <div className="wrap statement-grid">
        <p className="eyebrow">MAIS DO QUE VISITAR</p>
        <h2>O cotidiano, o saber-fazer e a relação com a natureza também fazem parte da viagem.</h2>
        <p>Viajar pode reunir lazer, conhecimento e relevância social. O turismo em comunidades tradicionais valoriza modos de vida, tradições e experiências construídas no próprio território. Quando realizado com respeito e participação, pode abrir oportunidades para que as comunidades integrem a cadeia produtiva do turismo e se beneficiem dessa atividade.</p>
        <Link className="text-link light-link" to="/territorios">Conheça essa perspectiva <span>→</span></Link>
      </div>
    </section>

    <section className="wrap section intro-grid">
      <div>
        <p className="eyebrow">O PROJETO</p>
        <h2>Conhecimento, comunidades e visitantes em conexão.</h2>
      </div>
      <div>
        <p>O Quaraci aproxima a pesquisa e a extensão de uma proposta de turismo de valor em comunidades tradicionais. O conhecimento sobre os territórios, os saberes locais e a participação das comunidades são partes importantes dessa construção.</p>
        <Link className="text-link" to="/projeto">Conheça o Quaraci <span>→</span></Link>
      </div>
    </section>

    <section className="wrap section app-feature">
      <div className="app-mark">
        <div className="app-mark-inner"><span>Q</span></div>
        <small>QUARACI APP</small>
      </div>
      <div>
        <p className="eyebrow">NO SEU CELULAR</p>
        <h2>Descubra comunidades, experiências e histórias.</h2>
        <p>Com o aplicativo, você pode cadastrar seu perfil, publicar experiências, encontrar comunidades tradicionais e se conectar com pessoas dos territórios.</p>
        <div className="actions">
          <a className="btn" href={PLAY_URL} target="_blank" rel="noreferrer">Baixar na Google Play ↗</a>
          <Link className="text-link" to="/aplicativo">Saiba como funciona <span>→</span></Link>
        </div>
      </div>
    </section>

    <section className="wrap section pillars">
      <div className="head-row">
        <div>
          <p className="eyebrow">O QUE NOS MOVE</p>
          <h2>Uma experiência construída com respeito ao território.</h2>
        </div>
        <Link className="text-link" to="/territorios">Saiba mais <span>→</span></Link>
      </div>
      <div className="pillar-grid">
        <article className="pillar p-green"><span>01</span><h3>Diversidade</h3><p>Reconhecer a pluralidade de povos, culturas e modos de vida.</p></article>
        <article className="pillar p-orange"><span>02</span><h3>Vivência</h3><p>Valorizar experiências que aproximam visitantes do cotidiano local.</p></article>
        <article className="pillar p-blue"><span>03</span><h3>Autenticidade</h3><p>Dar visibilidade aos saberes, às histórias e às práticas de cada território.</p></article>
        <article className="pillar p-sand"><span>04</span><h3>Comunidades tradicionais</h3><p>Reconhecer as comunidades como protagonistas de suas histórias e iniciativas.</p></article>
        <article className="pillar p-orange"><span>05</span><h3>Protagonismo</h3><p>Valorizar a participação comunitária na construção do turismo em seus territórios.</p></article>
      </div>
    </section>

    <section className="wrap section publication-teaser">
      <div>
        <p className="eyebrow">CONHECIMENTO E REGISTROS</p>
        <h2>O que está sendo produzido e compartilhado.</h2>
        <p>Conheça publicações e materiais relacionados às comunidades, aos territórios, à biodiversidade e às ações do Quaraci.</p>
        <Link className="text-link" to="/publicacoes">Acessar publicações <span>→</span></Link>
      </div>
      <div className="publication-art" aria-hidden="true"><span>Q.</span><i>Pesquisa</i><i>Extensão</i><i>Território</i></div>
    </section>

    <section className="wrap section final-cta">
      <p className="eyebrow">COMECE A DESCOBRIR</p>
      <h2>Conheça o Quaraci.</h2>
      <p>Explore a proposta e descubra o aplicativo.</p>
      <a className="btn btn-light" href={PLAY_URL} target="_blank" rel="noreferrer">Acessar na Google Play ↗</a>
    </section>
  </>
}
