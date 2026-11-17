interface BloomProps {
  className?: string
  animada?: boolean
}

const exteriores = Array.from({ length: 8 }, (_, i) => i * 45)
const interiores = Array.from({ length: 8 }, (_, i) => i * 45 + 22.5)

function Bloom({ className, animada = false }: BloomProps) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      {exteriores.map((angulo, i) => (
        <g key={angulo} transform={`rotate(${angulo} 100 100)`}>
          <ellipse
            cx="100"
            cy="52"
            rx="21"
            ry="46"
            fill="#e5578a"
            fillOpacity="0.92"
            className={animada ? "petalo" : undefined}
            style={animada ? { animationDelay: `${i * 70}ms` } : undefined}
          />
        </g>
      ))}

      {interiores.map((angulo, i) => (
        <g key={angulo} transform={`rotate(${angulo} 100 100)`}>
          <ellipse
            cx="100"
            cy="66"
            rx="14"
            ry="32"
            fill="#f8d7de"
            className={animada ? "petalo" : undefined}
            style={animada ? { animationDelay: `${450 + i * 70}ms` } : undefined}
          />
        </g>
      ))}

      <circle cx="100" cy="100" r="12" fill="#f2b84b" />
    </svg>
  )
}

export default Bloom