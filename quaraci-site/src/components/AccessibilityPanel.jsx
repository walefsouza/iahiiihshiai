import { useEffect } from 'react'

export default function AccessibilityPanel({ prefs, setPrefs, defaults, onClose }) {
  const set = (patch) => setPrefs({ ...prefs, ...patch })
  const size = (delta) => set({ fontScale: Math.min(150, Math.max(80, prefs.fontScale + delta)) })

  // Esc fecha o painel
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <section id="painel-acessibilidade" className="a11y-panel" aria-label="Opções de acessibilidade">
      <div className="wrap a11y-grid">
        <div className="a11y-group" role="group" aria-label="Tamanho do texto">
          <span>Tamanho do texto ({prefs.fontScale}%)</span>
          <div>
            <button onClick={() => size(-10)} aria-label="Diminuir texto">A−</button>
            <button onClick={() => set({ fontScale: 100 })} aria-label="Tamanho padrão">A</button>
            <button onClick={() => size(10)} aria-label="Aumentar texto">A+</button>
          </div>
        </div>

        <label><input type="checkbox" checked={prefs.contrast} onChange={(e) => set({ contrast: e.target.checked })} /> Alto contraste</label>
        <label><input type="checkbox" checked={prefs.underline} onChange={(e) => set({ underline: e.target.checked })} /> Sublinhar links</label>
        <label><input type="checkbox" checked={prefs.calm} onChange={(e) => set({ calm: e.target.checked })} /> Reduzir animações</label>

        <div className="a11y-actions">
          <button onClick={() => setPrefs(defaults)}>Restaurar padrão</button>
          <button onClick={onClose}>Fechar</button>
        </div>
      </div>
    </section>
  )
}
