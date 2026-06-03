import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { client } from "@/sanity/lib/client"
import imageUrlBuilder from "@sanity/image-url"
import { ImageCarousel } from "@/components/image-carousel"

const builder = imageUrlBuilder(client)
function urlFor(source: any) {
  return builder.image(source)
}

async function getCaseStudy(id: string) {
  return await client.fetch(`*[_type == "caseStudy" && _id == $id][0] {
    _id,
    title,
    tags,
    description,
    thumbnail,
    processImages,
    overview,
    problem,
    outcome,
    year
  }`, { id }, { next: { revalidate: 0 } })
}

export default async function CaseStudyPage({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = await getCaseStudy(slug)

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

  const allImages = [
    project.thumbnail ? urlFor(project.thumbnail).width(1200).url() : null,
    ...(project.processImages?.map((img: any) => urlFor(img).width(1200).url()) ?? [])
  ].filter(Boolean) as string[]

  return (
    <main className="max-w-5xl mx-auto px-6 md:px-8 py-24">
      <Link
        href="/work"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-16 group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        Back to work
      </Link>

      <article className="space-y-20">
        <header className="space-y-4">
          <p className="text-sm text-muted-foreground">
            {project.tags?.join(" · ")} {project.year && `· ${project.year}`}
          </p>
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-foreground text-balance">
            {project.title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            {project.description}
          </p>
        </header>

        {allImages.length > 0 && (
          <ImageCarousel images={allImages} />
        )}

        {project.overview && (
          <section className="space-y-6">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-muted-foreground/70">01</span>
              <h2 className="text-sm uppercase tracking-widest text-muted-foreground">Overview</h2>
            </div>
            <p className="text-lg md:text-xl text-foreground leading-relaxed max-w-3xl">
              {project.overview}
            </p>
          </section>
        )}

        {project.problem && (
          <section className="space-y-6">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-muted-foreground/70">02</span>
              <h2 className="text-sm uppercase tracking-widest text-muted-foreground">Problem</h2>
            </div>
            <p className="text-lg text-foreground/90 leading-relaxed max-w-3xl">
              {project.problem}
            </p>
          </section>
        )}

        {project.outcome && (
          <section className="space-y-6">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-muted-foreground/70">03</span>
              <h2 className="text-sm uppercase tracking-widest text-muted-foreground">Outcome</h2>
            </div>
            <p className="text-lg text-foreground/90 leading-relaxed max-w-3xl">
              {project.outcome}
            </p>
          </section>
        )}

        <div className="pt-8 border-t border-border">
          <Link
            href="/work"
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