import { Button } from "@/components/ui/button"

interface PromoBannerProps {
  cantidad: number
  descuentoMaximo: number
  soloOfertas: boolean
  onAlternar: () => void
}

function PromoBanner({
  cantidad,
  descuentoMaximo,
  soloOfertas,
  onAlternar,
}: PromoBannerProps) {
  return (
    <section
      aria-label="Promociones"
      className="mb-8 flex flex-col gap-4 rounded-2xl bg-rubor px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8"
    >
      <div>
        <p className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
          Hasta {descuentoMaximo}% de descuento
        </p>
        <p className="mt-1 text-sm text-hoja/80">
          en {cantidad} {cantidad === 1 ? "producto" : "productos"} de la
          tienda
        </p>
      </div>

      <Button
        onClick={onAlternar}
        className="h-11 rounded-full px-6 sm:shrink-0"
      >
        {soloOfertas ? "Ver todo el catálogo" : "Ver ofertas"}
      </Button>
    </section>
  )
}

export default PromoBanner