import Pagina from '../components/Pagina.jsx'

const PUBLICACOES = [
 {tipo:'Manual', titulo:'Manual do Quaraci', autores:'Material institucional listado no acervo público.'},
 {tipo:'Material de referência', titulo:'Comunidades, Vilas e Povoados', autores:'Material listado na página de publicações do Quaraci.'},
 {tipo:'Inventário', titulo:'Aves de Riacho do Mel', autores:'Caio G. Machado, Gustavo F. Santana, Raíssa M. M. Meireles, Camila B. C. Barbosa, João Pedro Q. Azevedo, Nauberte M. Silva e Cristiane E. C. Nunes.'},
 {tipo:'Inventário', titulo:'Etnovariedades de Riacho do Mel', autores:'Fabiane Keile Souza Teixeira, Maycon Silva Costa e Fábio Pedro Souza de Ferreira Bandeira.'},
 {tipo:'Cartografia', titulo:'Cartografia participativa de Riacho do Mel', autores:'Raphael Souza, Pedro Correia, Ricardo Machado, Nilton Santana, Luciano Pereira, Otávio Silva e Fábio Bandeira.'},
 {tipo:'Inventário', titulo:'Os peixes de Riacho do Mel', autores:'Marystrela Pires Alves e Alexandre Clistenes de Alcântara Santos.'},
 {tipo:'Artigo', titulo:'Desenvolvimento do turismo de natureza em comunidades rurais negras da Chapada Diamantina', autores:'Fábio Bandeira, Bruno C. E. Souza, Ricardo Machado, Alexandre C. Santos e Caio G. Machado.'},
]
export default function Publicacoes(){return <Pagina titulo="Publicações" eyebrow="CONHECIMENTO E NOTÍCIAS" resumo="Produções e materiais relacionados ao Quaraci, às comunidades e aos territórios.">
 <section className="content-block"><div className="publication-intro"><div><p className="eyebrow">ACERVO DO PROJETO</p><h2>Pesquisa, extensão e conhecimento compartilhado.</h2></div><p>O acervo público do Quaraci reúne materiais institucionais e produções relacionadas ao território, à biodiversidade, ao conhecimento local e ao turismo de natureza.</p></div><div className="publication-toolbar"><span>{PUBLICACOES.length} materiais identificados no acervo público</span><a href="https://www.quaraci.com/publica%C3%A7%C3%B5es" target="_blank" rel="noreferrer">Consultar página original ↗</a></div><div className="publication-list">{PUBLICACOES.map((item,i)=><article className="publication-item" key={item.titulo}><span className="pub-index">{String(i+1).padStart(2,'0')}</span><div><span className="pub-type">{item.tipo}</span><h3>{item.titulo}</h3><p>{item.autores}</p></div><span className="pub-arrow" aria-hidden="true">↗</span></article>)}</div><div className="legal-alert"><b>Sobre os arquivos</b><p>Os títulos e autorias acima foram transcritos da página pública de publicações do Quaraci. Como os endereços individuais dos arquivos não puderam ser recuperados nesta auditoria, mantivemos o link para o acervo original em vez de criar links de download não verificados.</p></div></section>
 </Pagina>}
