import Bloom from "@/components/Bloom"
import { cn } from "@/lib/utils"

const enlaces = [
  { texto: "Inicio", href: "#inicio", soloEscritorio: true },
  { texto: "Catálogo", href: "#catalogo", soloEscritorio: false },
  { texto: "Categorías", href: "#categorias", soloEscritorio: true },
]

function Header() {
  return (
    <header
      id="inicio"
      className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur"
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <a href="#inicio" className="flex items-center gap-2.5">
          <Bloom className="size-9" />
          <span className="font-display text-xl font-semibold tracking-tight">
            Bella Flora
          </span>
        </a>

        <nav className="flex items-center gap-6 text-sm font-medium">
          {enlaces.map((enlace) => (
            <a
              key={enlace.href}
              href={enlace.href}
              className={cn(
                "underline-offset-8 transition-colors hover:text-primary hover:underline",
                enlace.soloEscritorio && "hidden sm:inline",
              )}
            >
              {enlace.texto}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header