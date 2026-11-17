import { Flower2 } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"

const enlaces = [
  { texto: "Inicio", href: "#inicio" },
  { texto: "Catálogo", href: "#catalogo" },
  { texto: "Categorías", href: "#categorias" },
]

function Header() {
  return (
    <header id="inicio" className="border-b bg-background">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#inicio" className="flex items-center gap-2 text-pink-600">
          <Flower2 className="size-7" />
          <span className="text-xl font-bold">Bella Flora</span>
        </a>

        <nav className="hidden items-center gap-1 sm:flex">
          {enlaces.map((enlace) => (
            <a
              key={enlace.href}
              href={enlace.href}
              className={buttonVariants({ variant: "ghost", size: "sm" })}
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