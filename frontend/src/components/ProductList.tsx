import ProductCard from "@/components/ProductCard"
import type { Producto } from "@/types"

interface ProductListProps {
  productos: Producto[]
}

function ProductList({ productos }: ProductListProps) {
  if (productos.length === 0) {
    return (
      <p className="py-12 text-muted-foreground">
        No hay productos en esta categoría por ahora.
      </p>
    )
  }

  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-6">
      {productos.map((producto) => (
        <ProductCard
          key={producto.id}
          nombre={producto.nombre}
          descripcion={producto.descripcion}
          precio={producto.precio}
          imagen={producto.imagen}
          categoria={producto.categoria}
          stock={producto.stock}
          estadoStock={producto.estado_stock}
        />
      ))}
    </div>
  )
}

export default ProductList