import { useState } from 'react'

// Imagem com fundo cinza e fallback caso o link falhe (ou src seja nulo)
export default function Imagem({ src, alt = '', className = '' }) {
  const [erro, setErro] = useState(false)

  return (
    <div className={`imagem ${className}`}>
      {src && !erro && <img src={src} alt={alt} loading="lazy" onError={() => setErro(true)} />}
    </div>
  )
}
