import ProductList from "@/components/ProductList"
import { productos } from "@/data/mockData"

function HomePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <section id="catalogo">
        <ProductList productos={productos} />
      </section>
    </main>
  )
}

export default HomePage