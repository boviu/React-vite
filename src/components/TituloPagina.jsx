// Título em duas linhas: a primeira clara/cinza, a segunda em negrito.
export default function TituloPagina({ leve, forte, tag: Tag = 'h1', className = '' }) {
  return (
    <Tag className={`titulo ${className}`}>
      <span className="titulo__leve">{leve}</span>
      {forte && <span className="titulo__forte">{forte}</span>}
    </Tag>
  )
}
