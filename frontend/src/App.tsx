import Header from "@/components/Header"
import ProductCard from "@/components/ProductCard"
import { productos } from "@/data/mockData"

function App() {
  const producto = productos[0]

  return (
    <div>
      <Header />
      <main className="mx-auto max-w-6xl px-4 py-8">
        <div className="max-w-xs">
          <ProductCard
            nombre={producto.nombre}
            descripcion={producto.descripcion}
            precio={producto.precio}
            imagen={producto.imagen}
            categoria={producto.categoria}
          />
        </div>
      </main>
    </div>
  )
}

export default App