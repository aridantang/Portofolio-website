export function Hero() {
  return (
    <section className="min-h-[70vh] flex flex-col justify-center py-24 md:py-32">
      <div className="space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-foreground text-balance">
          Alex Chen
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground">
          Product Designer<span className="text-accent"> —</span>
        </p>
        <p className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
          Crafting thoughtful digital experiences at the intersection of design and technology.
        </p>
      </div>
    </section>
  )
}
