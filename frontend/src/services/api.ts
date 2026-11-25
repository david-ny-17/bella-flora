import type { Categoria, Producto } from "@/types"

const API_URL = "http://localhost:8000/api"

async function obtener<T>(ruta: string): Promise<T> {
  const respuesta = await fetch(`${API_URL}${ruta}`)

  if (!respuesta.ok) {
    throw new Error(`Error ${respuesta.status} al consultar ${ruta}`)
  }

  return respuesta.json()
}

export function obtenerProductos(busqueda = ""): Promise<Producto[]> {
  const parametros = new URLSearchParams()
  if (busqueda) parametros.set("search", busqueda)

  const consulta = parametros.toString()
  return obtener<Producto[]>(`/productos/${consulta ? `?${consulta}` : ""}`)
}

export function obtenerCategorias(): Promise<Categoria[]> {
  return obtener<Categoria[]>("/categorias/")
}

export function obtenerRecomendados(
  categoria: string | null = null,
): Promise<Producto[]> {
  const parametros = new URLSearchParams()
  if (categoria) parametros.set("categoria", categoria)

  const consulta = parametros.toString()
  return obtener<Producto[]>(
    `/productos/recomendados/${consulta ? `?${consulta}` : ""}`,
  )
}