import ProductCard from "@/components/ProductCard"
import type { Producto } from "@/types"

interface ProductListProps {
  productos: Producto[]
}

function ProductList({ productos }: ProductListProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {productos.map((producto) => (
        <ProductCard
          key={producto.id}
          nombre={producto.nombre}
          descripcion={producto.descripcion}
          precio={producto.precio}
          imagen={producto.imagen}
          categoria={producto.categoria}
        />
      ))}
    </div>
  )
}

export default ProductList