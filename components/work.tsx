import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { client } from "@/sanity/lib/client"
import imageUrlBuilder from "@sanity/image-url"

const builder = imageUrlBuilder(client)
function urlFor(source: any) {
  return builder.image(source)
}

async function getCaseStudies() {
  return await client.fetch(`*[_type == "caseStudy" && featured == true] | order(order asc) {
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
      <div className="flex items-baseline justify-between mb-4">
        <h2 className="text-sm uppercase tracking-widest text-muted-foreground">
          <span className="text-accent">//</span> Selected Work
        </h2>
        <Link
  href="/work"
  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border border-border rounded-md hover:border-accent hover:text-accent transition-colors"
>
  View all work
  <ArrowRight className="w-4 h-4" />
</Link>
      </div>

      <p className="text-2xl md:text-3xl font-medium text-foreground max-w-xl mb-16 leading-snug">
        Handcrafted with love and a dash of caffeine.
      </p>

      <div className="space-y-12 md:space-y-16">
        {projects.map((project: any) => (
          <Link
            key={project._id}
            href={`/work/${project._id}`}
            className="group block"
          >
            <article className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 items-start">
              {/* Image - 1/2 */}
              <div className="md:col-span-2 aspect-[16/9] bg-card rounded-lg overflow-hidden">
                {project.thumbnail ? (
                  <img
                    src={urlFor(project.thumbnail).width(1366).height(768).url()}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:opacity-80 transition-opacity duration-300"
                  />
                ) : (
                  <div className="w-full h-full bg-muted flex items-center justify-center">
                    <span className="text-muted-foreground text-sm">No image</span>
                  </div>
                )}
              </div>

              {/* Content - 1/2 */}
              <div className="md:col-span-3 space-y-4">
                <div>
                  <h3 className="text-2xl md:text-3xl font-medium text-foreground group-hover:text-accent transition-colors duration-200 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {project.tags?.join(" · ")} {project.year && `· ${project.year}`}
                  </p>
                </div>
                <p className="text-base text-muted-foreground leading-relaxed max-w-lg">
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