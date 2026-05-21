import Link from "next/link"
import Image from "next/image"

const projects = [
  {
    slug: "fintech-app",
    title: "Fintech Mobile App",
    tags: "Mobile · B2B · 2024",
    description: "Redesigning the mobile banking experience for small business owners.",
    image: "/projects/fintech.jpg"
  },
  {
    slug: "saas-dashboard",
    title: "Analytics Dashboard",
    tags: "Web · SaaS · 2024",
    description: "A data visualization platform for marketing teams.",
    image: "/projects/dashboard.jpg"
  },
  {
    slug: "health-platform",
    title: "Health Platform",
    tags: "Mobile · B2C · 2023",
    description: "Connecting patients with healthcare providers through telehealth.",
    image: "/projects/health.jpg"
  },
  {
    slug: "ecommerce-redesign",
    title: "E-commerce Redesign",
    tags: "Web · B2C · 2023",
    description: "Modernizing the shopping experience for a sustainable fashion brand.",
    image: "/projects/ecommerce.jpg"
  }
]

export function Work() {
  return (
    <section id="work" className="py-24 md:py-32">
      <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-12">
        Selected Work
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {projects.map((project) => (
          <Link 
            key={project.slug} 
            href={`/work/${project.slug}`}
            className="group block"
          >
            <article className="space-y-4">
              <div className="aspect-[4/3] bg-card rounded-lg overflow-hidden relative">
                <div className="absolute inset-0 bg-muted flex items-center justify-center">
                  <span className="text-muted-foreground text-sm">Thumbnail</span>
                </div>
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-300" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-medium text-foreground group-hover:text-foreground/80 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {project.tags}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  )
}
