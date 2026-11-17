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
  categoria: string
}