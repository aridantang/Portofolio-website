import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const projects: Record<string, { 
  title: string
  tags: string
  description: string
  overview: string
  problem: string
  process: string
  outcome: string
}> = {
  "fintech-app": {
    title: "Fintech Mobile App",
    tags: "Mobile · B2B · 2024",
    description: "Redesigning the mobile banking experience for small business owners.",
    overview: "A complete redesign of a mobile banking app serving over 50,000 small business owners. The goal was to simplify complex financial tasks while maintaining security and trust.",
    problem: "Small business owners needed to manage invoices, track expenses, and monitor cash flow on the go. The existing app was cluttered with features that made simple tasks difficult to complete. User research revealed that 68% of users felt overwhelmed by the interface, and task completion rates were significantly lower than industry benchmarks.",
    process: "I led a comprehensive discovery phase including user interviews, competitive analysis, and usability testing of the existing app. Working closely with stakeholders, we identified core workflows and prioritized features based on user needs. We created low-fidelity wireframes, tested them with users, and iterated through multiple rounds of design refinement before moving to high-fidelity prototypes.",
    outcome: "The redesigned app saw a 40% reduction in time-to-task completion and a 25% increase in daily active users within the first quarter post-launch. Customer satisfaction scores improved from 3.2 to 4.6 out of 5, and support tickets related to navigation dropped by 60%."
  },
  "saas-dashboard": {
    title: "Analytics Dashboard",
    tags: "Web · SaaS · 2024",
    description: "A data visualization platform for marketing teams.",
    overview: "Designed a comprehensive analytics dashboard that helps marketing teams understand campaign performance across multiple channels in a single, unified view.",
    problem: "Marketing teams were juggling multiple tools to track performance across email, social media, paid ads, and organic search. They needed a unified view that could provide actionable insights without overwhelming them with data. The existing workflow required switching between 5+ tools daily.",
    process: "I conducted contextual inquiry sessions with marketing managers and analysts to understand their daily workflows. We mapped out data sources and key metrics, then designed a modular widget system that allows users to customize their dashboard. Multiple prototype iterations were tested with real data to ensure the visualizations communicated insights effectively.",
    outcome: "Users can now create personalized views based on their specific needs and share them with team members. Time spent on weekly reporting decreased by 70%, and the platform achieved an NPS score of 72 within six months of launch."
  },
  "health-platform": {
    title: "Health Platform",
    tags: "Mobile · B2C · 2023",
    description: "Connecting patients with healthcare providers through telehealth.",
    overview: "A telehealth platform that makes it easy for patients to connect with healthcare providers from anywhere, reducing barriers to healthcare access.",
    problem: "Patients faced long wait times and scheduling difficulties with traditional healthcare. Many avoided seeking care due to the complexity of the process. Healthcare providers needed a reliable way to conduct virtual consultations without compromising the quality of care.",
    process: "We began with patient journey mapping and stakeholder interviews with both patients and healthcare providers. Accessibility was a primary concern, so we conducted testing with users of varying technical abilities and those using assistive technologies. The design went through three major iterations based on usability testing feedback.",
    outcome: "The platform reduced no-show rates by 25% and improved patient satisfaction scores to 4.8/5. The streamlined booking flow reduced appointment scheduling time from 15 minutes to under 2 minutes. The platform now serves over 100,000 patients monthly."
  },
  "ecommerce-redesign": {
    title: "E-commerce Redesign",
    tags: "Web · B2C · 2023",
    description: "Modernizing the shopping experience for a sustainable fashion brand.",
    overview: "A complete e-commerce redesign for a sustainable fashion brand looking to improve conversion rates and better communicate their environmental values throughout the shopping journey.",
    problem: "The brand struggled to convey their sustainability story while maintaining a seamless shopping experience. Cart abandonment rates were high at 78%, and users reported confusion about sizing and materials. The existing site did not differentiate the brand from fast-fashion competitors.",
    process: "I led the redesign starting with heuristic evaluation and conversion funnel analysis. User interviews revealed that sustainability information was important but needed to be integrated naturally into the shopping flow. We designed and tested multiple approaches to product detail pages, eventually landing on an approach that layers sustainability info without disrupting the purchase journey.",
    outcome: "Conversion rates improved by 35% and cart abandonment dropped to 62%. The average session duration increased by 45%, indicating users were more engaged with the content. The brand saw a 28% increase in returning customers within the first quarter."
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

      <article className="space-y-20">
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
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-muted-foreground/70">01</span>
            <h2 className="text-sm uppercase tracking-widest text-muted-foreground">Overview</h2>
          </div>
          <p className="text-lg md:text-xl text-foreground leading-relaxed max-w-3xl">
            {project.overview}
          </p>
        </section>

        {/* Problem */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-muted-foreground/70">02</span>
            <h2 className="text-sm uppercase tracking-widest text-muted-foreground">Problem</h2>
          </div>
          <p className="text-lg text-foreground/90 leading-relaxed max-w-3xl">
            {project.problem}
          </p>
          <div className="aspect-[16/9] bg-card rounded-lg overflow-hidden mt-8">
            <div className="w-full h-full bg-muted flex items-center justify-center">
              <span className="text-muted-foreground text-sm">Problem Visualization</span>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-muted-foreground/70">03</span>
            <h2 className="text-sm uppercase tracking-widest text-muted-foreground">Process</h2>
          </div>
          <p className="text-lg text-foreground/90 leading-relaxed max-w-3xl">
            {project.process}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
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
        </section>

        {/* Outcome */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-muted-foreground/70">04</span>
            <h2 className="text-sm uppercase tracking-widest text-muted-foreground">Outcome</h2>
          </div>
          <p className="text-lg text-foreground/90 leading-relaxed max-w-3xl">
            {project.outcome}
          </p>
          <div className="aspect-video bg-card rounded-lg overflow-hidden mt-8">
            <div className="w-full h-full bg-muted flex items-center justify-center">
              <span className="text-muted-foreground">Final Design</span>
            </div>
          </div>
        </section>

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
