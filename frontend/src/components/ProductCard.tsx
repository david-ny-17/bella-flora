import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface ProductCardProps {
  nombre: string
  descripcion: string
  precio: number
  imagen: string
  categoria: string
}

function ProductCard({
  nombre,
  descripcion,
  precio,
  imagen,
  categoria,
}: ProductCardProps) {
  return (
    <Card className="h-full gap-0 rounded-none border-0 bg-transparent py-0 shadow-none">
      <div className="relative overflow-hidden rounded-t-full bg-rubor">
        <img
          src={imagen}
          alt={nombre}
          loading="lazy"
          decoding="async"
          className="aspect-[4/5] w-full object-cover"
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

      <CardFooter className="mt-auto px-1 pt-3">
        <span className="text-base font-semibold text-primary sm:text-lg">
          S/ {precio.toFixed(2)}
        </span>
      </CardFooter>
    </Card>
  )
}

export default ProductCard