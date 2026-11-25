import { useState } from "react"
import { Menu, X } from "lucide-react"
import Bloom from "@/components/Bloom"
import { Button } from "@/components/ui/button"

const enlaces = [
  { texto: "Inicio", href: "#inicio" },
  { texto: "Catálogo", href: "#catalogo" },
  { texto: "Categorías", href: "#categorias" },
]

function Header() {
  const [menuAbierto, setMenuAbierto] = useState(false)

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

        {/* Navegación para pantallas medianas y grandes */}
        <nav className="hidden items-center gap-6 text-sm font-medium sm:flex">
          {enlaces.map((enlace) => (
            <a
              key={enlace.href}
              href={enlace.href}
              className="underline-offset-8 transition-colors hover:text-primary hover:underline"
            >
              {enlace.texto}
            </a>
          ))}
        </nav>

        {/* Botón del menú, solo en móvil */}
        <Button
          variant="ghost"
          size="icon"
          className="size-11 sm:hidden"
          aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuAbierto}
          aria-controls="menu-movil"
          onClick={() => setMenuAbierto(!menuAbierto)}
        >
          {menuAbierto ? <X className="size-6" /> : <Menu className="size-6" />}
        </Button>
      </div>

      {/* Menú desplegable, solo en móvil */}
      {menuAbierto && (
        <nav
          id="menu-movil"
          className="absolute inset-x-0 top-full border-b border-border bg-background shadow-sm sm:hidden"
        >
          <ul className="mx-auto max-w-6xl px-4 py-2">
            {enlaces.map((enlace) => (
              <li key={enlace.href}>
                <a
                  href={enlace.href}
                  onClick={() => setMenuAbierto(false)}
                  className="block rounded-md px-2 py-3 text-base font-medium hover:bg-accent"
                >
                  {enlace.texto}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}

export default Header