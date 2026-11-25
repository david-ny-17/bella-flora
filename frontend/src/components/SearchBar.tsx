import { Search, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface SearchBarProps {
  valor: string
  onCambio: (valor: string) => void
}

function SearchBar({ valor, onCambio }: SearchBarProps) {
  return (
    <div role="search" className="relative w-full sm:max-w-sm">
      <Search
        aria-hidden="true"
        className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground"
      />

      <Input
        type="text"
        inputMode="search"
        enterKeyHint="search"
        value={valor}
        onChange={(evento) => onCambio(evento.target.value)}
        placeholder="Buscar flores por nombre"
        aria-label="Buscar productos por nombre"
        className="h-11 rounded-full bg-background pl-11 pr-12"
      />

      {valor && (
        <Button
          type="button"
          variant="ghost"
          size="icon"
          aria-label="Borrar búsqueda"
          onClick={() => onCambio("")}
          className="absolute right-1 top-1/2 size-9 -translate-y-1/2 rounded-full"
        >
          <X className="size-4" />
        </Button>
      )}
    </div>
  )
}

export default SearchBar