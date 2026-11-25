import { useEffect, useState } from "react"
import ProductList from "@/components/ProductList"
import { obtenerRecomendados } from "@/services/api"
import type { Producto } from "@/types"

interface RecommendedProductsProps {
  categoria: string | null
}

function RecommendedProducts({ categoria }: RecommendedProductsProps) {
  const [productos, setProductos] = useState<Producto[]>([])

  useEffect(() => {
    let vigente = true

    obtenerRecomendados(categoria)
      .then((datos) => {
        if (vigente) setProductos(datos)
      })
      .catch(() => {
        // Las recomendaciones son un complemento: si fallan, se oculta la sección
        if (vigente) setProductos([])
      })

    return () => {
      vigente = false
    }
  }, [categoria])

  if (productos.length === 0) return null

  return (
    <section
      id="recomendados"
      aria-labelledby="titulo-recomendados"
      className="mt-16 scroll-mt-20 sm:mt-20"
    >
      <h2
        id="titulo-recomendados"
        className="font-display text-3xl font-semibold tracking-tight sm:text-4xl"
      >
        Recomendados para ti
      </h2>
      <p className="mb-8 mt-1 text-sm text-muted-foreground">
        {categoria
          ? `Productos de ${categoria} y favoritos de la florería.`
          : "Los favoritos de la florería."}
      </p>

      <ProductList productos={productos} />
    </section>
  )
}

export default RecommendedProducts