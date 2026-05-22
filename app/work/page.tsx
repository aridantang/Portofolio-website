import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"

const allProjects = [
  {
    slug: "fintech-app",
    title: "Fintech Mobile App",
    tags: "Mobile · B2B · 2024",
    description: "Redesigning the mobile banking experience for small business owners.",
  },
  {
    slug: "saas-dashboard",
    title: "Analytics Dashboard",
    tags: "Web · SaaS · 2024",
    description: "A data visualization platform for marketing teams.",
  },
  {
    slug: "health-platform",
    title: "Health Platform",
    tags: "Mobile · B2C · 2023",
    description: "Connecting patients with healthcare providers through telehealth.",
  },
  {
    slug: "ecommerce-redesign",
    title: "E-commerce Redesign",
    tags: "Web · B2C · 2023",
    description: "Modernizing the shopping experience for a sustainable fashion brand.",
  },
  {
    slug: "travel-app",
    title: "Travel Booking App",
    tags: "Mobile · B2C · 2023",
    description: "Simplifying travel planning with an intuitive booking experience.",
  },
  {
    slug: "crm-platform",
    title: "CRM Platform",
    tags: "Web · B2B · 2023",
    description: "Enterprise customer relationship management for sales teams.",
  },
  {
    slug: "fitness-tracker",
    title: "Fitness Tracker",
    tags: "Mobile · B2C · 2022",
    description: "Helping users build healthy habits through gamification.",
  },
  {
    slug: "real-estate",
    title: "Real Estate Platform",
    tags: "Web · B2C · 2022",
    description: "Reimagining property search for first-time home buyers.",
  },
  {
    slug: "food-delivery",
    title: "Food Delivery App",
    tags: "Mobile · B2C · 2022",
    description: "Streamlining the ordering experience for local restaurants.",
  },
  {
    slug: "education-platform",
    title: "Learning Management System",
    tags: "Web · B2B · 2022",
    description: "Creating engaging online learning experiences for enterprises.",
  }
]

export default function AllWorkPage() {
  return (
    <>
      <Nav />
      <main className="max-w-5xl mx-auto px-6 md:px-8 pt-24 pb-16">
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-16 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back home
        </Link>

        <header className="mb-16">
          <h1 className="text-3xl md:text-4xl font-medium tracking-tight text-foreground mb-4">
            All Work
          </h1>
          <p className="text-muted-foreground max-w-xl">
            A collection of projects spanning product design, user research, and design systems across various industries.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {allProjects.map((project) => (
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
      </main>
      <Footer />
    </>
  )
}
