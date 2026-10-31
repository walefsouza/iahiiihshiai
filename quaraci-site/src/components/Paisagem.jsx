// Ilustração provisória (serra, rio e sol) feita só com formas SVG.
// Serve de marcador até chegarem as imagens oficiais.
export default function Paisagem() {
  return (
    <svg viewBox="0 0 600 560" role="img" aria-label="Ilustração de serras, rio e sol da Chapada Diamantina">
      <defs>
        <clipPath id="blob">
          <path d="M60 300C20 170 130 40 290 50C450 60 590 150 570 320C550 480 420 540 280 530C140 520 100 430 60 300Z" />
        </clipPath>
      </defs>
      <g clipPath="url(#blob)">
        <rect width="600" height="560" fill="#FCE4C8" />
        <circle cx="400" cy="190" r="62" fill="#F4A261" />
        <path d="M0 360C80 300 120 240 200 250C260 258 290 190 360 200C440 212 500 300 600 280L600 560L0 560Z" fill="#40916C" />
        <path d="M0 450C100 390 210 400 300 450C400 505 500 440 600 410L600 560L0 560Z" fill="#2D6A4F" />
        <path d="M0 500C120 470 220 520 330 505C440 490 520 470 600 490L600 560L0 560Z" fill="#D06A42" />
        <path d="M330 262C310 320 380 360 330 410C285 460 250 480 270 560" fill="none" stroke="#457B9D" strokeWidth="18" strokeLinecap="round" />
      </g>
    </svg>
  )
}
