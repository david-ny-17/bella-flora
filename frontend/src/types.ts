export type EstadoStock = "disponible" | "ultimas" | "agotado"

export interface Categoria {
  id: number
  nombre: string
}

export interface Producto {
  id: number
  nombre: string
  descripcion: string
  precio: number
  imagen: string
  stock: number
  estado_stock: EstadoStock
  categoria: string
}