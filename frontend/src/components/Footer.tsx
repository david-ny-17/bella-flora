function Footer() {
  return (
    <footer className="bg-hoja text-rubor">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-10 sm:flex-row sm:items-center sm:justify-between">
        <span className="font-display text-xl font-semibold text-petalo">
          Bella Flora
        </span>
        <p className="text-sm">
          © {new Date().getFullYear()} Bella Flora. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  )
}

export default Footer