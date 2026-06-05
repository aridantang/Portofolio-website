const skills = [
  "Figma",
  "Prototyping",
  "User Research",
  "Design Systems",
  "Interaction Design",
  "Framer",
  "HTML/CSS",
  "Usability Testing"
]

export function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-12">
        <span className="text-accent">//</span> About
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Photo */}
        <div className="lg:col-span-4">
          <div className="aspect-[3/4] bg-card rounded-lg overflow-hidden max-w-xs mx-auto lg:mx-0">
            <img
              src="/photo.jpg"
              alt="Profile photo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Bio and Skills */}
        <div className="lg:col-span-8 space-y-12">
          <div className="space-y-6">
            <p className="text-lg md:text-xl text-foreground leading-relaxed max-w-2xl">
              {"Senior Product Designer specializing in SaaS platforms, data visualization, and operational interfaces. With 7+ years of experience spanning fintech and consulting."}
            </p>
            <p className="text-base text-muted-foreground leading-relaxed max-w-2xl">
              {"Known for working closely with stakeholders to shape product direction from strategy through delivery, building design systems, owning end-to-end design processes, and delivering measurable outcomes across data-heavy B2B products."}
            </p>
          </div>

          {/* Skills */}
          <div className="space-y-4">
            <h3 className="text-sm uppercase tracking-widest text-muted-foreground">
              Skills & Tools <span className="text-accent">*</span>
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-sm text-foreground bg-card border border-border rounded-md"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}