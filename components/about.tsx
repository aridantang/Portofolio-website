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
        <span className="text-accent">/</span> About
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Photo */}
        <div className="lg:col-span-4">
          <div className="aspect-[3/4] bg-card rounded-lg overflow-hidden">
            <div className="w-full h-full bg-muted flex items-center justify-center">
              <span className="text-muted-foreground text-sm">Photo</span>
            </div>
          </div>
        </div>
        
        {/* Bio and Skills */}
        <div className="lg:col-span-8 space-y-12">
          <div className="space-y-6">
            <p className="text-lg md:text-xl text-foreground leading-relaxed max-w-2xl">
              {"I'm a product designer with 7+ years of experience creating digital products that balance user needs with business goals. Currently based in San Francisco."}
            </p>
            <p className="text-base text-muted-foreground leading-relaxed max-w-2xl">
              {"I've worked with startups and established companies across fintech, healthcare, and e-commerce. My approach combines deep user research with iterative prototyping to deliver experiences that feel intuitive and considered."}
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
