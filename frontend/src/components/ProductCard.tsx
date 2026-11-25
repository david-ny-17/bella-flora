import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"
import type { EstadoStock } from "@/types"

interface ProductCardProps {
  nombre: string
  descripcion: string
  precio: number
  imagen: string
  categoria: string
  stock: number
  estadoStock: EstadoStock
}

const colorPunto: Record<EstadoStock, string> = {
  disponible: "bg-emerald-600",
  ultimas: "bg-amber-500",
  agotado: "bg-zinc-400",
}

function textoStock(estado: EstadoStock, stock: number) {
  if (estado === "agotado") return "Agotado"
  if (estado === "ultimas") {
    return stock === 1 ? "Última unidad" : `Últimas ${stock} unidades`
  }
  return "Disponible"
}

function ProductCard({
  nombre,
  descripcion,
  precio,
  imagen,
  categoria,
  stock,
  estadoStock,
}: ProductCardProps) {
  return (
    <Card className="h-full gap-0 rounded-none border-0 bg-transparent py-0 shadow-none ring-0">
      <div className="relative overflow-hidden rounded-t-full bg-rubor">
        <img
          src={imagen}
          alt={nombre}
          loading="lazy"
          decoding="async"
          className={cn(
            "aspect-[4/5] w-full object-cover",
            estadoStock === "agotado" && "opacity-60 grayscale",
          )}
        />
        <Badge className="absolute bottom-3 left-3 border-0 bg-petalo/90 text-hoja backdrop-blur-sm">
          {categoria}
        </Badge>
      </div>

      <CardHeader className="gap-1 px-1 pt-4">
        <CardTitle className="font-display text-base font-semibold leading-snug sm:text-lg">
          {nombre}
        </CardTitle>
        <CardDescription className="line-clamp-2">
          {descripcion}
        </CardDescription>
      </CardHeader>

      <CardFooter className="mt-auto flex-col items-start gap-1 border-t-0 bg-transparent px-1 pb-0 pt-3">
        <span className="text-base font-semibold text-primary sm:text-lg">
          S/ {precio.toFixed(2)}
        </span>
        <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <span
            aria-hidden="true"
            className={cn("size-2 rounded-full", colorPunto[estadoStock])}
          />
          {textoStock(estadoStock, stock)}
        </span>
      </CardFooter>
    </Card>
  )
}

export default ProductCard