import Bloom from "@/components/Bloom"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

function Hero() {
  return (
    <section className="bg-hoja text-petalo">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:py-20 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Flores para cada ocasión
          </h1>
          <p className="mt-6 max-w-md text-lg text-rubor/90">
            Ramos, arreglos florales, plantas de interior y detalles para
            regalar.
          </p>
          <a
            href="#catalogo"
            className={cn(
              buttonVariants({ size: "lg" }),
              "mt-8 h-12 rounded-full bg-petalo px-8 text-base text-hoja hover:bg-rubor",
            )}
          >
            Ver catálogo
          </a>
        </div>

        <Bloom
          animada
          className="mx-auto w-48 sm:w-80 lg:w-full lg:max-w-md"
        />
      </div>
    </section>
  )
}

export default Hero