import { Link } from 'react-router-dom'
import { PLAY_URL } from '../menu.js'

export default function Home() {
  return <>
    <section className="wrap home-hero">
      <div className="home-hero-copy">
        <p className="eyebrow">TURISMO DE VALOR · CULTURA · TERRITÓRIO</p>
        <h1>O território tem histórias. <em>As comunidades têm muito a compartilhar.</em></h1>
        <p className="home-hero-lead">O Quaraci conecta pessoas aos saberes, às experiências e aos modos de vida das comunidades tradicionais — valorizando quem vive no território e as relações que tornam cada lugar único.</p>
        <div className="actions">
          <Link className="btn" to="/territorios">Conhecer os territórios <span>↗</span></Link>
          <Link className="text-link" to="/projeto">Conheça o projeto <span>→</span></Link>
        </div>
        <div className="hero-signature"><span className="signature-line" />Pesquisa, extensão e tecnologia a serviço da valorização territorial.</div>
      </div>
      <div className="home-hero-visual" aria-label="Espaço reservado para fotografia de uma comunidade ou paisagem dos territórios">
        <div className="photo-placeholder">
          <span className="photo-index">01 / TERRITÓRIO</span>
          <div className="photo-placeholder-center"><span>Imagem em construção</span><small>Fotografia oficial de uma comunidade parceira</small></div>
          <span className="photo-caption">CHAPADA DIAMANTINA · BAHIA</span>
        </div>
        <p className="visual-note">Um projeto construído a partir dos lugares e de quem vive neles.</p>
      </div>
    </section>

    <section className="home-manifesto">
      <div className="wrap manifesto-layout">
        <div className="manifesto-label"><span>01</span><p className="eyebrow">NOSSA PERSPECTIVA</p></div>
        <div className="manifesto-main">
          <h2>Não se trata apenas de conhecer um destino. É sobre <em>reconhecer as pessoas, os saberes e as histórias</em> que fazem um território existir.</h2>
          <div className="manifesto-bottom">
            <p>O turismo pode criar oportunidades quando respeita os modos de vida, reconhece o protagonismo comunitário e fortalece a relação entre cultura, natureza e território.</p>
            <Link className="text-link light-link" to="/territorios">Nossa visão sobre turismo <span>↗</span></Link>
          </div>
        </div>
      </div>
    </section>

    <section className="wrap home-pathways">
      <div className="section-kicker"><span>02 — PARTICIPE</span><span>O QUARACI É UM ESPAÇO DE CONEXÃO</span></div>
      <div className="pathways-heading">
        <h2>Diferentes caminhos.<br/><em>Um território em comum.</em></h2>
        <p>O site e o aplicativo aproximam pessoas, comunidades e iniciativas. Cada pessoa pode chegar ao Quaraci de um jeito.</p>
      </div>
      <div className="pathway-list">
        <article className="pathway">
          <span className="pathway-number">01</span><div><p className="eyebrow">PARA QUEM QUER CONHECER</p><h3>Descubra lugares e experiências.</h3><p>Encontre comunidades, conheça histórias e descubra possibilidades de vivenciar os territórios com respeito e interesse genuíno.</p></div><Link to="/aplicativo" aria-label="Saiba como conhecer pelo aplicativo">↗</Link>
        </article>
        <article className="pathway">
          <span className="pathway-number">02</span><div><p className="eyebrow">PARA QUEM FAZ PARTE</p><h3>Compartilhe o que existe no seu território.</h3><p>Comunidades e pessoas locais podem dar visibilidade aos seus saberes, iniciativas, serviços e experiências.</p></div><Link to="/aplicativo" aria-label="Saiba como participar pelo aplicativo">↗</Link>
        </article>
        <article className="pathway">
          <span className="pathway-number">03</span><div><p className="eyebrow">PARA QUEM PESQUISA E COLABORA</p><h3>Conhecimento que se constrói em conjunto.</h3><p>Pesquisa e extensão contribuem para registrar conhecimentos, apoiar iniciativas e fortalecer ações de valorização e conservação territorial.</p></div><Link to="/projeto" aria-label="Conheça pesquisa e extensão">↗</Link>
        </article>
      </div>
    </section>

    <section className="home-app">
      <div className="wrap app-layout">
        <div className="app-visual">
          <div className="app-device">
            <div className="device-top"><span>QUARACI</span><span>● ● ●</span></div>
            <div className="device-image"><span>ESPAÇO PARA IMAGEM DO APLICATIVO</span></div>
            <div className="device-lines"><i/><i/><i/></div>
            <div className="device-bottom"><span>Comunidades</span><span>Experiências</span><span>Perfil</span></div>
          </div>
          <span className="app-visual-note">QUARACI APP · PLATAFORMA DIGITAL</span>
        </div>
        <div className="app-copy">
          <p className="eyebrow">03 — CONEXÃO NA PALMA DA MÃO</p>
          <h2>O território também se encontra <em>na tela.</em></h2>
          <p>O Quaraci App amplia as possibilidades de conexão. Nele, pessoas podem criar perfis, compartilhar experiências, encontrar comunidades tradicionais e descobrir lugares e histórias.</p>
          <ul className="app-benefits"><li>Conheça comunidades e seus territórios.</li><li>Descubra experiências e iniciativas locais.</li><li>Conecte-se com pessoas que vivem nesses lugares.</li></ul>
          <div className="actions"><a className="btn" href={PLAY_URL} target="_blank" rel="noreferrer">Acessar na Google Play ↗</a><Link className="text-link" to="/aplicativo">Entenda o aplicativo <span>→</span></Link></div>
        </div>
      </div>
    </section>

    <section className="wrap home-principles">
      <div className="section-kicker"><span>04 — PRINCÍPIOS</span><span>O QUE ORIENTA NOSSO TRABALHO</span></div>
      <div className="principles-layout">
        <h2>Valorizar o território é reconhecer <em>tudo o que o constitui.</em></h2>
        <div className="principles-grid">
          <article><span>01</span><h3>Diversidade</h3><p>Reconhecer a pluralidade de povos, culturas e modos de vida.</p></article>
          <article><span>02</span><h3>Vivência</h3><p>Valorizar experiências construídas no cotidiano e no encontro.</p></article>
          <article><span>03</span><h3>Autenticidade</h3><p>Dar visibilidade aos saberes, às histórias e às práticas locais.</p></article>
          <article><span>04</span><h3>Protagonismo</h3><p>Reconhecer as comunidades como participantes centrais das decisões e iniciativas.</p></article>
        </div>
      </div>
    </section>

    <section className="home-research">
      <div className="wrap research-layout">
        <div><p className="eyebrow">05 — PESQUISA E EXTENSÃO</p><h2>Conhecer para valorizar. Colaborar para transformar.</h2></div>
        <div><p>A tecnologia é uma ferramenta. A pesquisa e a extensão ajudam a aproximar conhecimentos científicos e tradicionais, registrar patrimônios, apoiar iniciativas comunitárias e contribuir para a conservação dos territórios.</p><Link className="text-link light-link" to="/projeto">Conheça nossas frentes de atuação <span>↗</span></Link></div>
      </div>
    </section>

    <section className="wrap home-publications">
      <div className="publication-heading"><div><p className="eyebrow">06 — BIBLIOTECA</p><h2>Registros, pesquisas e saberes compartilhados.</h2></div><p>Publicações e materiais que ajudam a conhecer os territórios, suas comunidades, culturas e biodiversidade.</p></div>
      <div className="publication-feature"><div className="publication-feature-mark">Q<span>.</span></div><div><span className="eyebrow">CONHECIMENTO EM CIRCULAÇÃO</span><h3>Um acervo para continuar descobrindo.</h3><p>Explore materiais produzidos em diálogo com as comunidades e os territórios.</p><Link className="text-link" to="/publicacoes">Explorar publicações <span>→</span></Link></div></div>
    </section>

    <section className="wrap home-final">
      <p className="eyebrow">O TERRITÓRIO É O PONTO DE PARTIDA</p>
      <h2>Tem muita história esperando para ser conhecida.</h2>
      <div className="home-final-actions"><p>Explore o projeto, descubra o aplicativo e conheça outras formas de se aproximar do Quaraci.</p><div className="actions"><Link className="btn btn-light" to="/projeto">Conhecer o projeto ↗</Link><a className="text-link light-link" href={PLAY_URL} target="_blank" rel="noreferrer">Acessar o aplicativo <span>→</span></a></div></div>
    </section>
  </>
}
