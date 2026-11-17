import { useState } from "react"
import CategoryFilter from "@/components/CategoryFilter"
import ProductList from "@/components/ProductList"
import { categorias, productos } from "@/data/mockData"

function HomePage() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<
    string | null
  >(null)

  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <section id="categorias" className="mb-6">
        <CategoryFilter
          categorias={categorias}
          seleccionada={categoriaSeleccionada}
          onSeleccionar={setCategoriaSeleccionada}
        />
      </section>

      <section id="catalogo">
        <ProductList productos={productos} />
      </section>
    </main>
  )
}

export default HomePage