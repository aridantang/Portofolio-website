const services = [
  {
    number: "01",
    title: "B2B SaaS Design",
    description:
      "Designing complex platforms for fintech, regtech, and enterprise — from lending tools used by major Indonesian banks to operational interfaces that make data-heavy workflows feel effortless.",
  },
  {
    number: "02",
    title: "Web3 & Decentralized Products",
    description:
      "Crafting interfaces for the decentralized web, including federated social platforms, NFT tooling, and blockchain-adjacent products where trust and clarity are everything.",
  },
  {
    number: "03",
    title: "Government & Civic Tech",
    description:
      "Designing public-facing dashboards and real-time monitoring systems for city-scale operations, from COVID response platforms to stadium surveillance infrastructure.",
  },
  {
    number: "04",
    title: "End-to-End Product Consulting",
    description:
      "Embedded with cross-functional teams across industries — from discovery and research through to delivery and handoff — shaping product direction from the ground up.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32">
      <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
        <span className="text-accent">//</span> Services
      </h2>
      <p className="text-2xl md:text-3xl font-medium text-foreground max-w-xl mb-16 leading-snug">
        Custom design solutions for your requirements.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, i) => (
          <div key={i} className="p-6 border border-border rounded-lg hover:border-border/60 transition-colors group">
            <span className="text-xs text-muted-foreground/50 font-mono">{service.number}</span>
            <h3 className="text-lg font-medium text-foreground mt-3 mb-3 group-hover:text-accent transition-colors">
              {service.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}