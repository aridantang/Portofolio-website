export function Hero() {
  return (
    <section className="min-h-[70vh] flex flex-col justify-center py-24 md:py-32">
      <div className="space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-foreground text-balance">
          Suryananda Aridantang
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground">
          <span className="font-semibold text-foreground">Product Designer</span><span className="text-accent"> —</span>
        </p>
        <div className="space-y-2 max-w-xl">
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Designing the tools that run businesses.
          </p>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            7+ years making SaaS platforms, dashboards, and data-heavy products feel effortless.
          </p>
        </div>
      </div>
    </section>
  )
}
