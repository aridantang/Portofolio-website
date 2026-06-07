"use client"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const services = [
  {
    number: "01",
    title: "B2B SaaS Enterprise Products",
    description:
      "Designing complex platforms for fintech, regtech, and enterprise — from lending tools used by major Indonesian banks to operational interfaces.",
  },
  {
    number: "02",
    title: "Web3 & Crypto Projects",
    description:
      "Crafting interfaces for the decentralized web, including federated social platforms, NFT tooling, and blockchain-adjacent products.",
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
      "Embedded with cross-functional teams across industries — from discovery and research through to delivery and handoff.",
  },
]

export function Services() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((i) => (i === 0 ? services.length - 1 : i - 1))
  const next = () => setCurrent((i) => (i === services.length - 1 ? 0 : i + 1))

  return (
    <section id="services" className="py-24 md:py-32">
      <div className="mb-12">
        <div className="flex items-center gap-6 mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-accent shrink-0">
            <path d="M12.983 21.186a1 1 0 0 1-1.966 0 10 10 0 0 0-8.203-8.203 1 1 0 0 1 0-1.966 10 10 0 0 0 8.203-8.203 1 1 0 0 1 1.966 0 10 10 0 0 0 8.203 8.203 1 1 0 0 1 0 1.966 10 10 0 0 0-8.203 8.203"/>
  </svg>
        </div>
        <p className="text-2xl md:text-3xl font-medium text-foreground max-w-xl leading-snug">
          Custom design solutions for your requirements.
        </p>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* Mobile Carousel */}
      <div className="md:hidden">
        <div className="relative mb-8">
          <div className="p-6 border border-border rounded-lg bg-card">
            <span className="text-xs text-muted-foreground/50 font-mono">{services[current].number}</span>
            <h3 className="text-lg font-medium text-foreground mt-3 mb-3">
              {services[current].title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {services[current].description}
            </p>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prev}
            className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-card border border-border flex items-center justify-center hover:bg-muted transition-colors"
          >
            <ChevronLeft className="w-4 h-4 text-foreground" />
          </button>
          <button
            onClick={next}
            className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-card border border-border flex items-center justify-center hover:bg-muted transition-colors"
          >
            <ChevronRight className="w-4 h-4 text-foreground" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex gap-2 justify-center">
          {services.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                i === current
                  ? "bg-foreground w-4"
                  : "bg-foreground/40 hover:bg-foreground/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}