/** Hand-authored line icons — no third-party icon font. 24×24, 1.6 stroke. */
const paths = {
  cart: (
    <>
      <path d="M2.5 4h2.6l2.4 10.8h10l2.2-7.6H6.6" />
      <circle cx="9.6" cy="19" r="1.6" />
      <circle cx="17.2" cy="19" r="1.6" />
    </>
  ),
  heart: <path d="M12 20.3l-1.3-1.2C6.1 15 3.2 12.4 3.2 9.2A4.2 4.2 0 017.5 5c1.5 0 2.9.7 3.8 1.8L12 7.6l.7-.8A5 5 0 0116.5 5a4.2 4.2 0 014.3 4.2c0 3.2-2.9 5.8-7.5 9.9z" />,
  search: (
    <>
      <circle cx="10.8" cy="10.8" r="6.3" />
      <path d="M15.4 15.4l4.6 4.6" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8.2" r="3.5" />
      <path d="M5 20v-1.2A5.2 5.2 0 0110.2 13.6h3.6A5.2 5.2 0 0119 18.8V20" />
    </>
  ),
  truck: (
    <>
      <path d="M2.5 6.5h11v10h-11z" />
      <path d="M13.5 10h4l3 3.2v3.3h-7z" />
      <circle cx="7" cy="18" r="1.9" />
      <circle cx="17" cy="18" r="1.9" />
    </>
  ),
  returns: (
    <>
      <path d="M4 11.5a8 8 0 0113.6-5.2L20 8.5" />
      <path d="M20 4v4.5h-4.5" />
      <path d="M20 12.5a8 8 0 01-13.6 5.2L4 15.5" />
      <path d="M4 20v-4.5h4.5" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3.2l7 2.6v5.2c0 4.2-2.8 7.8-7 9.2-4.2-1.4-7-5-7-9.2V5.8z" />
      <path d="M9.3 12l1.9 1.9L15 10.2" />
    </>
  ),
  headset: (
    <>
      <path d="M4.5 14v-2.5a7.5 7.5 0 0115 0V14" />
      <path d="M4.5 13h2.2v5H6A1.5 1.5 0 014.5 16.5zM19.5 13h-2.2v5H18a1.5 1.5 0 001.5-1.5z" />
      <path d="M17.3 18v.5a2.5 2.5 0 01-2.5 2.5H12" />
    </>
  ),
  star: <path d="M12 3.8l2.5 5.2 5.7.8-4.1 4 1 5.7-5.1-2.7-5.1 2.7 1-5.7-4.1-4 5.7-.8z" />,
  eye: (
    <>
      <path d="M2.5 12S6 5.8 12 5.8 21.5 12 21.5 12 18 18.2 12 18.2 2.5 12 2.5 12z" />
      <circle cx="12" cy="12" r="2.8" />
    </>
  ),
  compare: <path d="M4 7h10M4 7l3-3M4 7l3 3M20 17H10M20 17l-3-3M20 17l-3 3" />,
  arrowRight: <path d="M4.5 12h15M13 5.5l6.5 6.5-6.5 6.5" />,
  arrowLeft: <path d="M19.5 12h-15M11 5.5L4.5 12l6.5 6.5" />,
  arrowUpRight: <path d="M7 17L17 7M9 7h8v8" />,
  plus: <path d="M12 5v14M5 12h14" />,
  minus: <path d="M5 12h14" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  chevronDown: <path d="M6 9.5l6 6 6-6" />,
  filter: <path d="M4 6h16M7 12h10M10 18h4" />,
  phone: <path d="M7 3.9l2.4 4-1.7 1.9a12 12 0 006.5 6.5l1.9-1.7 4 2.4-.6 3a1.6 1.6 0 01-1.8 1.3C10.9 20.3 3.7 13.1 2.8 5.2A1.6 1.6 0 014.1 3.4z" />,
  mail: (
    <>
      <rect x="3" y="5.5" width="18" height="13" rx="2" />
      <path d="M3.6 6.8L12 12.8l8.4-6" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21c0-.1 6.5-5.6 6.5-10.4a6.5 6.5 0 10-13 0C5.5 15.4 12 20.9 12 21z" />
      <circle cx="12" cy="10.5" r="2.4" />
    </>
  ),
  check: <path d="M4.5 12.5l5 5 10-11" />,
}

export default function Icon({ name, className = 'h-5 w-5' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name] ?? paths.check}
    </svg>
  )
}

/** Cart glyph used in the wordmark — filled, so it reads at small sizes. */
export function CartMark({ className = 'h-7 w-7' }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <path
        d="M3 5h4l3.4 14h13l3-10H9"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="13" cy="25" r="2.4" fill="currentColor" />
      <circle cx="22" cy="25" r="2.4" fill="currentColor" />
    </svg>
  )
}
