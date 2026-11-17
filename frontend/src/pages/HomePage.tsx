import { useEffect, useState } from "react"
import CategoryFilter from "@/components/CategoryFilter"
import Hero from "@/components/Hero"
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
          "No se pudo cargar el catálogo. Verifica que el servidor esté en funcionamiento e intenta de nuevo.",
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

  return (
    <>
      <Hero />

      <main
        id="catalogo"
        className="mx-auto max-w-6xl scroll-mt-16 px-4 py-14 sm:py-20"
      >
        <div className="mb-8 flex flex-wrap items-end justify-between gap-x-6 gap-y-2">
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Nuestro catálogo
          </h2>
          {!cargando && !error && (
            <p className="text-sm text-muted-foreground" aria-live="polite">
              {productosFiltrados.length}{" "}
              {productosFiltrados.length === 1 ? "producto" : "productos"}
            </p>
          )}
        </div>

        {cargando && (
          <p className="text-muted-foreground">Cargando catálogo...</p>
        )}

        {error && (
          <p
            role="alert"
            className="rounded-md border border-destructive/50 bg-destructive/10 p-4 text-destructive"
          >
            {error}
          </p>
        )}

        {!cargando && !error && (
          <>
            <div id="categorias" className="mb-10 scroll-mt-20">
              <CategoryFilter
                categorias={categorias}
                seleccionada={categoriaSeleccionada}
                onSeleccionar={setCategoriaSeleccionada}
              />
            </div>
            <ProductList productos={productosFiltrados} />
          </>
        )}
      </main>
    </>
  )
}

export default HomePage