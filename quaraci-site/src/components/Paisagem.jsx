// Ilustração provisória de paisagem. Pode ser substituída por fotografia oficial.
export default function Paisagem() {
  return (
    <svg viewBox="0 0 600 560" role="img" aria-label="Ilustração abstrata de serras, rio e vegetação">
      <defs>
        <clipPath id="paisagem-quaraci">
          <path d="M60 300C20 170 130 40 290 50C450 60 590 150 570 320C550 480 420 540 280 530C140 520 100 430 60 300Z" />
        </clipPath>
      </defs>
      <g clipPath="url(#paisagem-quaraci)">
        <rect width="600" height="560" fill="#F2E4CB" />
        <circle cx="400" cy="190" r="62" fill="#E8AD55" />
        <path d="M0 360C80 300 120 240 200 250C260 258 290 190 360 200C440 212 500 300 600 280L600 560L0 560Z" fill="#638E78" />
        <path d="M0 450C100 390 210 400 300 450C400 505 500 440 600 410L600 560L0 560Z" fill="#356B50" />
        <path d="M0 500C120 470 220 520 330 505C440 490 520 470 600 490L600 560L0 560Z" fill="#C97855" />
        <path d="M330 262C310 320 380 360 330 410C285 460 250 480 270 560" fill="none" stroke="#5F8990" strokeWidth="18" strokeLinecap="round" />
      </g>
    </svg>
  )
}
