import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { client } from "@/sanity/lib/client"
import imageUrlBuilder from "@sanity/image-url"

const builder = imageUrlBuilder(client)
function urlFor(source: any) {
  return builder.image(source)
}

async function getCaseStudies() {
  return await client.fetch(`*[_type == "caseStudy"] | order(orderRank asc)[0..3] {
    _id,
    title,
    tags,
    description,
    thumbnail,
    year
  }`, {}, { next: { revalidate: 0 } })
}

export async function Work() {
  const projects = await getCaseStudies()
  return (
    <section id="work" className="py-24 md:py-32">
      <div className="flex items-baseline justify-between mb-12">
        <h2 className="text-sm uppercase tracking-widest text-muted-foreground">
          <span className="text-accent">//</span> Selected Work
        </h2>
        <Link
          href="/work"
          className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-accent transition-colors"
        >
          View all
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {projects.map((project: any) => (
          <Link
            key={project._id}
            href={`/work/${project._id}`}
            className="group block"
          >
            <article className="space-y-4">
              <div className="aspect-[4/3] bg-card rounded-lg overflow-hidden relative">
                {project.thumbnail ? (
                  <img
                    src={urlFor(project.thumbnail).width(800).url()}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 bg-muted flex items-center justify-center">
                    <span className="text-muted-foreground text-sm">No image</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-300" />
              </div>
              <div className="space-y-3">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-lg font-medium text-foreground group-hover:text-accent transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground shrink-0">
                    {project.tags?.join(" · ")} {project.year && `· ${project.year}`}
                  </p>
                </div>
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