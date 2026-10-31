import { useEffect } from 'react'
export default function Pagina({ titulo, resumo, eyebrow, children, className = '' }) {
 useEffect(() => { document.title = `${titulo} | Quaraci` }, [titulo])
 return <><section className="page-head"><div className="wrap"><p className="eyebrow">{eyebrow || 'QUARACI'}</p><h1>{titulo}</h1>{resumo && <p className="lead">{resumo}</p>}</div></section><div className={`wrap page-content ${className}`}>{children}</div></>
}
