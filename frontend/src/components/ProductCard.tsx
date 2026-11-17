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
    <Card className="overflow-hidden pt-0">
      <img
        src={imagen}
        alt={nombre}
        loading="lazy"
        className="aspect-[4/3] w-full object-cover"
      />
      <CardHeader>
        <Badge variant="secondary" className="w-fit">
          {categoria}
        </Badge>
        <CardTitle>{nombre}</CardTitle>
        <CardDescription>{descripcion}</CardDescription>
      </CardHeader>
      <CardFooter>
        <span className="text-xl font-bold text-pink-600">
          S/ {precio.toFixed(2)}
        </span>
      </CardFooter>
    </Card>
  )
}

export default ProductCard