// Ícones simples em SVG (sem dependências externas)
const props = {
  width: 14,
  height: 14,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}

export const IconePin = () => (
  <svg {...props}>
    <path d="M12 22s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
)

export const IconeTelefone = () => (
  <svg {...props}>
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
  </svg>
)

export const IconeEmail = () => (
  <svg {...props}>
    <rect x="3" y="5" width="18" height="14" rx="1" />
    <path d="M3 7l9 6 9-6" />
  </svg>
)

export const IconeSeta = ({ direcao = 'direita' }) => {
  const d = {
    direita: 'M4 12h16M14 6l6 6-6 6',
    esquerda: 'M20 12H4M10 6l-6 6 6 6',
  }[direcao]
  return (
    <svg {...props} width="16" height="16">
      <path d={d} />
    </svg>
  )
}

export const IconeFechar = () => (
  <svg {...props} width="22" height="22">
    <path d="M5 5l14 14M19 5L5 19" />
  </svg>
)

export const IconeCheck = () => (
  <svg {...props} width="44" height="44" strokeWidth={3}>
    <path d="M4 12.5l5 5L20 6.5" />
  </svg>
)

const redeProps = { width: 14, height: 14, viewBox: '0 0 24 24', fill: 'currentColor', 'aria-hidden': true }

export const Redes = () => (
  <div className="redes">
    <a href="#facebook" aria-label="Facebook">
      <svg {...redeProps}>
        <path d="M14 8.5V6.8c0-.8.2-1.3 1.4-1.3H17V2.2C16.700 2.200 15.700 2 14.600 2 12.100 2 10.400 3.500 10.400 6.300v2.200H7.500V12h2.900v10H14V12h2.700l.4-3.500H14z" />
      </svg>
    </a>
    <a href="#twitter" aria-label="Twitter">
      <svg {...redeProps}>
        <path d="M22 5.900c-.7.300-1.500.5-2.300.6.800-.5 1.500-1.300 1.800-2.200-.8.500-1.700.8-2.600 1a4.100 4.100 0 0 0-7 3.700A11.600 11.600 0 0 1 3.500 4.700a4.100 4.100 0 0 0 1.300 5.500c-.7 0-1.300-.2-1.900-.5 0 2 1.400 3.700 3.300 4.100-.6.200-1.200.2-1.800.1.500 1.600 2 2.800 3.800 2.800A8.200 8.200 0 0 1 2 18.300 11.600 11.600 0 0 0 8.300 20c7.500 0 11.700-6.300 11.700-11.700v-.5c.800-.6 1.500-1.300 2-2z" />
      </svg>
    </a>
    <a href="#linkedin" aria-label="LinkedIn">
      <svg {...redeProps}>
        <path d="M4.500 8.800h3.700V20H4.500V8.800zM6.400 3a2.100 2.100 0 1 1 0 4.300 2.100 2.100 0 0 1 0-4.300zM10.500 8.800H14v1.500h.1c.5-.9 1.700-1.800 3.500-1.800 3.700 0 4.400 2.400 4.400 5.600V20h-3.700v-5.100c0-1.200 0-2.800-1.700-2.800s-2 1.300-2 2.700V20h-3.700V8.800z" />
      </svg>
    </a>
    <a href="#pinterest" aria-label="Pinterest">
      <svg {...redeProps}>
        <path d="M12.100 2C6.600 2 4 5.900 4 9.200c0 2 .8 3.800 2.400 4.400.3.100.5 0 .6-.3l.2-.9c.1-.3 0-.4-.2-.7-.5-.6-.8-1.300-.8-2.400 0-3 2.300-5.700 5.900-5.700 3.200 0 5 1.900 5 4.500 0 3.400-1.500 6.300-3.700 6.300-1.200 0-2.100-1-1.800-2.200.3-1.500 1-3.100 1-4.200 0-1-.5-1.800-1.600-1.800-1.300 0-2.300 1.300-2.300 3.100 0 1.100.4 1.900.4 1.900l-1.500 6.300c-.4 1.800-.1 4.100 0 4.300 0 .1.200.2.300.1.100-.2 1.800-2.200 2.400-4.200l.9-3.500c.5.900 1.800 1.700 3.200 1.700 4.200 0 7-3.800 7-8.900C21 5.500 17.700 2 12.100 2z" />
      </svg>
    </a>
  </div>
)
