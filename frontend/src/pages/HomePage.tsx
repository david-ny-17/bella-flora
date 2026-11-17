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
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    Promise.all([obtenerProductos(), obtenerCategorias()])
      .then(([productosData, categoriasData]) => {
        setProductos(productosData)
        setCategorias(categoriasData)
      })
      .catch(() => {
        setError(
          "No se pudo cargar el catálogo. Verifica que el servidor esté en funcionamiento.",
        )
      })
      .finally(() => setCargando(false))
  }, [])

  const productosFiltrados =
    categoriaSeleccionada === null
      ? productos
      : productos.filter(
          (producto) => producto.categoria === categoriaSeleccionada,
        )

  if (cargando) {
    return (
      <main className="mx-auto max-w-6xl px-4 py-8">
        <p className="text-muted-foreground">Cargando catálogo...</p>
      </main>
    )
  }

  if (error) {
    return (
      <main className="mx-auto max-w-6xl px-4 py-8">
        <p
          role="alert"
          className="rounded-md border border-destructive/50 bg-destructive/10 p-4 text-destructive"
        >
          {error}
        </p>
      </main>
    )
  }

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