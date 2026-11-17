import { Button } from "@/components/ui/button"
import type { Categoria } from "@/types"

interface CategoryFilterProps {
  categorias: Categoria[]
  seleccionada: string | null
  onSeleccionar: (nombre: string | null) => void
}

function CategoryFilter({
  categorias,
  seleccionada,
  onSeleccionar,
}: CategoryFilterProps) {
  return (
    <div
      role="group"
      aria-label="Filtrar por categoría"
      className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 sm:pb-0"
    >
      <Button
        variant={seleccionada === null ? "default" : "outline"}
        aria-pressed={seleccionada === null}
        onClick={() => onSeleccionar(null)}
        className="h-10 shrink-0 rounded-full px-5"
      >
        Todas
      </Button>

      {categorias.map((categoria) => (
        <Button
          key={categoria.id}
          variant={seleccionada === categoria.nombre ? "default" : "outline"}
          aria-pressed={seleccionada === categoria.nombre}
          onClick={() => onSeleccionar(categoria.nombre)}
          className="h-10 shrink-0 rounded-full px-5"
        >
          {categoria.nombre}
        </Button>
      ))}
    </div>
  )
}

export default CategoryFilter