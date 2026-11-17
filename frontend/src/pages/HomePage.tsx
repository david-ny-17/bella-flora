import { useEffect, useState } from "react"
import CategoryFilter from "@/components/CategoryFilter"
import ProductList from "@/components/ProductList"
import { obtenerCategorias, obtenerProductos } from "@/services/api"
import type { Categoria, Producto } from "@/types"

function HomePage() {
  const [productos, setProductos] = useState<Producto[]>([])
  const [categorias, setCategorias] = useState<Categoria[]>([])
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<
    string | null
  >(null)

  useEffect(() => {
    obtenerProductos().then(setProductos)
    obtenerCategorias().then(setCategorias)
  }, [])

  const productosFiltrados =
    categoriaSeleccionada === null
      ? productos
      : productos.filter(
          (producto) => producto.categoria === categoriaSeleccionada,
        )

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
        <h2 className="mb-4 text-2xl font-semibold">Nuestro catálogo</h2>
        <ProductList productos={productosFiltrados} />
      </section>
    </main>
  )
}

export default HomePage