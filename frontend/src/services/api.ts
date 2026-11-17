import type { Categoria, Producto } from "@/types"

const API_URL = "http://localhost:8000/api"

async function obtener<T>(ruta: string): Promise<T> {
  const respuesta = await fetch(`${API_URL}${ruta}`)

  if (!respuesta.ok) {
    throw new Error(`Error ${respuesta.status} al consultar ${ruta}`)
  }

  return respuesta.json()
}

export function obtenerProductos(): Promise<Producto[]> {
  return obtener<Producto[]>("/productos/")
}

export function obtenerCategorias(): Promise<Categoria[]> {
  return obtener<Categoria[]>("/categorias/")
}