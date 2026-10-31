// Marca provisória (sol + folha). Troque pelo logo oficial quando existir.
export default function Marca({ size = 34 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" aria-hidden="true">
      <circle cx="20" cy="20" r="13" fill="#F4A261" />
      <path d="M4 27C14 22 24 23 36 31C26 38 12 38 4 27Z" fill="#2D6A4F" />
    </svg>
  )
}
