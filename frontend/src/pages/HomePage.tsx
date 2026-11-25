import { useEffect, useState } from "react"
import CategoryFilter from "@/components/CategoryFilter"
import Hero from "@/components/Hero"
import ProductList from "@/components/ProductList"
import SearchBar from "@/components/SearchBar"
import { cn } from "@/lib/utils"
import { obtenerCategorias, obtenerProductos } from "@/services/api"
import type { Categoria, Producto } from "@/types"

const MENSAJE_ERROR =
  "No se pudo cargar el catálogo. Verifica que el servidor esté en funcionamiento e intenta de nuevo."

interface Resultado {
  termino: string
  productos: Producto[]
}

function HomePage() {
  const [categorias, setCategorias] = useState<Categoria[]>([])
  const [resultado, setResultado] = useState<Resultado | null>(null)
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<
    string | null
  >(null)
  const [busqueda, setBusqueda] = useState("")
  const [terminoBusqueda, setTerminoBusqueda] = useState("")
  const [error, setError] = useState<string | null>(null)

  // Las categorías se consultan una sola vez
  useEffect(() => {
    obtenerCategorias()
      .then(setCategorias)
      .catch(() => setError(MENSAJE_ERROR))
  }, [])

  // Espera 300 ms después de la última tecla antes de buscar
  useEffect(() => {
    const temporizador = setTimeout(() => {
      setTerminoBusqueda(busqueda.trim())
    }, 300)

    return () => clearTimeout(temporizador)
  }, [busqueda])

  // Los productos se consultan al inicio y cada vez que cambia el término
  useEffect(() => {
    let vigente = true

    obtenerProductos(terminoBusqueda)
      .then((productos) => {
        if (vigente) {
          setResultado({ termino: terminoBusqueda, productos })
          setError(null)
        }
      })
      .catch(() => {
        if (vigente) setError(MENSAJE_ERROR)
      })

    return () => {
      vigente = false
    }
  }, [terminoBusqueda])

  const primeraCarga = resultado === null
  const buscando = resultado !== null && resultado.termino !== terminoBusqueda
  const productos = resultado?.productos ?? []

  const productosFiltrados =
    categoriaSeleccionada === null
      ? productos
      : productos.filter(
          (producto) => producto.categoria === categoriaSeleccionada,
        )

  const mensajeVacio = resultado?.termino
    ? `No encontramos productos que coincidan con “${resultado.termino}”${
        categoriaSeleccionada ? ` en ${categoriaSeleccionada}` : ""
      }. Prueba con otro nombre.`
    : "No hay productos en esta categoría por ahora."

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
          {!primeraCarga && !error && (
            <p className="text-sm text-muted-foreground" aria-live="polite">
              {productosFiltrados.length}{" "}
              {productosFiltrados.length === 1 ? "producto" : "productos"}
            </p>
          )}
        </div>

        {primeraCarga && !error && (
          <p className="text-muted-foreground">Cargando catálogo...</p>
        )}

        {error && (
          <p
            role="alert"
            className="mb-6 rounded-md border border-destructive/50 bg-destructive/10 p-4 text-destructive"
          >
            {error}
          </p>
        )}

        {!primeraCarga && (
          <>
            <div className="mb-5">
              <SearchBar valor={busqueda} onCambio={setBusqueda} />
            </div>

            <div id="categorias" className="mb-10 scroll-mt-20">
              <CategoryFilter
                categorias={categorias}
                seleccionada={categoriaSeleccionada}
                onSeleccionar={setCategoriaSeleccionada}
              />
            </div>

            {!error && (
              <div
                aria-busy={buscando}
                className={cn(
                  "transition-opacity",
                  buscando && "opacity-60",
                )}
              >
                <ProductList
                  productos={productosFiltrados}
                  mensajeVacio={mensajeVacio}
                />
              </div>
            )}
          </>
        )}
      </main>
    </>
  )
}

export default HomePage