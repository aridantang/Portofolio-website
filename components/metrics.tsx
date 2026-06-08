"use client"
import { Counter } from "./counter"

export function Metrics() {
  const metrics = [
    { number: "21", label: "Intuitive Web Apps" },
    { number: "32", label: "Happy Clients" },
    { number: "9", label: "Design Systems" },
    { number: "6", label: "Industries" },
  ]

  return (
    <section className="py-16 md:py-24 border-y border-border">
      <div className="text-center mb-16">
        <h2 className="text-2xl md:text-3xl font-medium text-foreground mb-4">
          Proven, Measured, and Meaningful <span className="text-accent">Results.</span>
        </h2>
        <p className="text-base text-muted-foreground max-w-2xl mx-auto">
          Each number tells a story of client trust and design consistency — proof that great UX isn't just about aesthetics, it's about impact.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {metrics.map((metric, i) => (
          <div key={i} className="text-center">
            <p className="text-3xl md:text-4xl font-medium text-foreground mb-2">
              <Counter value={metric.number} duration={1000} />
            </p>
            <p className="text-sm text-muted-foreground">
              {metric.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}