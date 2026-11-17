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
    <div className="flex flex-wrap gap-2">
      <Button
        variant={seleccionada === null ? "default" : "outline"}
        onClick={() => onSeleccionar(null)}
      >
        Todas
      </Button>

      {categorias.map((categoria) => (
        <Button
          key={categoria.id}
          variant={seleccionada === categoria.nombre ? "default" : "outline"}
          onClick={() => onSeleccionar(categoria.nombre)}
        >
          {categoria.nombre}
        </Button>
      ))}
    </div>
  )
}

export default CategoryFilter