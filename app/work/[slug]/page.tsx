import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const projects: Record<string, { 
  title: string
  tags: string
  description: string
  overview: string
  challenge: string
  solution: string
}> = {
  "fintech-app": {
    title: "Fintech Mobile App",
    tags: "Mobile · B2B · 2024",
    description: "Redesigning the mobile banking experience for small business owners.",
    overview: "A complete redesign of a mobile banking app serving over 50,000 small business owners. The goal was to simplify complex financial tasks while maintaining security and trust.",
    challenge: "Small business owners needed to manage invoices, track expenses, and monitor cash flow on the go. The existing app was cluttered with features that made simple tasks difficult to complete.",
    solution: "I led the design of a simplified navigation system and introduced a dashboard that surfaces the most important financial metrics. User testing showed a 40% reduction in time-to-task completion."
  },
  "saas-dashboard": {
    title: "Analytics Dashboard",
    tags: "Web · SaaS · 2024",
    description: "A data visualization platform for marketing teams.",
    overview: "Designed a comprehensive analytics dashboard that helps marketing teams understand campaign performance across multiple channels.",
    challenge: "Marketing teams were juggling multiple tools to track performance. They needed a unified view that could provide actionable insights without overwhelming them with data.",
    solution: "Created a modular dashboard system with customizable widgets. Users can create their own views based on their specific needs and share them with team members."
  },
  "health-platform": {
    title: "Health Platform",
    tags: "Mobile · B2C · 2023",
    description: "Connecting patients with healthcare providers through telehealth.",
    overview: "A telehealth platform that makes it easy for patients to connect with healthcare providers from anywhere.",
    challenge: "Patients faced long wait times and scheduling difficulties. Healthcare providers needed a reliable way to conduct virtual consultations.",
    solution: "Designed an intuitive booking flow and video consultation experience that reduced no-show rates by 25% and improved patient satisfaction scores."
  },
  "ecommerce-redesign": {
    title: "E-commerce Redesign",
    tags: "Web · B2C · 2023",
    description: "Modernizing the shopping experience for a sustainable fashion brand.",
    overview: "A complete e-commerce redesign for a sustainable fashion brand looking to improve conversion rates and communicate their values.",
    challenge: "The brand struggled to convey their sustainability story while maintaining a seamless shopping experience. Cart abandonment rates were high.",
    solution: "Integrated sustainability information throughout the shopping journey and streamlined the checkout process. Conversion rates improved by 35%."
  }
}

export default async function CaseStudyPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params
  const project = projects[slug]

  if (!project) {
    return (
      <main className="max-w-5xl mx-auto px-6 md:px-8 py-24">
        <p className="text-muted-foreground">Project not found</p>
        <Link href="/" className="text-foreground underline underline-offset-4 mt-4 inline-block">
          Go back
        </Link>
      </main>
    )
  }

  return (
    <main className="max-w-5xl mx-auto px-6 md:px-8 py-24">
      <Link 
        href="/#work"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-16 group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        Back to work
      </Link>

      <article className="space-y-16">
        {/* Header */}
        <header className="space-y-4">
          <p className="text-sm text-muted-foreground">{project.tags}</p>
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-foreground text-balance">
            {project.title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            {project.description}
          </p>
        </header>

        {/* Hero Image */}
        <div className="aspect-video bg-card rounded-lg overflow-hidden">
          <div className="w-full h-full bg-muted flex items-center justify-center">
            <span className="text-muted-foreground">Project Hero Image</span>
          </div>
        </div>

        {/* Overview */}
        <section className="space-y-4">
          <h2 className="text-sm uppercase tracking-widest text-muted-foreground">Overview</h2>
          <p className="text-lg text-foreground leading-relaxed max-w-3xl">
            {project.overview}
          </p>
        </section>

        {/* Challenge */}
        <section className="space-y-4">
          <h2 className="text-sm uppercase tracking-widest text-muted-foreground">The Challenge</h2>
          <p className="text-lg text-foreground leading-relaxed max-w-3xl">
            {project.challenge}
          </p>
        </section>

        {/* Process Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="aspect-[4/3] bg-card rounded-lg overflow-hidden">
            <div className="w-full h-full bg-muted flex items-center justify-center">
              <span className="text-muted-foreground text-sm">Process Image 1</span>
            </div>
          </div>
          <div className="aspect-[4/3] bg-card rounded-lg overflow-hidden">
            <div className="w-full h-full bg-muted flex items-center justify-center">
              <span className="text-muted-foreground text-sm">Process Image 2</span>
            </div>
          </div>
        </div>

        {/* Solution */}
        <section className="space-y-4">
          <h2 className="text-sm uppercase tracking-widest text-muted-foreground">The Solution</h2>
          <p className="text-lg text-foreground leading-relaxed max-w-3xl">
            {project.solution}
          </p>
        </section>

        {/* Final Images */}
        <div className="aspect-video bg-card rounded-lg overflow-hidden">
          <div className="w-full h-full bg-muted flex items-center justify-center">
            <span className="text-muted-foreground">Final Design</span>
          </div>
        </div>

        {/* Navigation */}
        <div className="pt-8 border-t border-border">
          <Link 
            href="/#work"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to all work
          </Link>
        </div>
      </article>
    </main>
  )
}
