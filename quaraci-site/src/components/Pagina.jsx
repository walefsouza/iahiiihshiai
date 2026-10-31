import { useEffect } from 'react'

export default function Pagina({ titulo, resumo, eyebrow, children, className = '' }) {
  useEffect(() => { document.title = `${titulo} | Quaraci` }, [titulo])
  return <>
    <section className="page-head">
      <div className="wrap page-head-layout">
        <div className="page-head-copy">
          <p className="eyebrow">{eyebrow || 'QUARACI'}</p>
          <h1>{titulo}</h1>
          {resumo && <p className="lead">{resumo}</p>}
        </div>
        <div className="page-head-index" aria-hidden="true"><span>QUARACI</span><i>CONHECIMENTO</i><i>TERRITÓRIO</i><i>CONEXÃO</i></div>
      </div>
    </section>
    <div className={`wrap page-content ${className}`}>{children}</div>
  </>
}
