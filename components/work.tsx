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
      <div className="mb-12">
  <div className="flex items-center gap-6 mb-6">
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-accent shrink-0">
      <path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762"/>
    </svg>
  </div>
  <div className="flex items-center justify-between gap-6">
    <p className="text-2xl md:text-3xl font-medium text-foreground max-w-xl leading-snug">
      Handcrafted with love and a dash of caffeine.
    </p>
  </div>
</div>

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
      <div className="pt-12 mt-4">
        <Link
          href="/work"
          className="w-full inline-flex items-center justify-center h-12 px-6 py-0 text-sm font-medium text-foreground no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-border border-solid rounded-lg cursor-pointer select-none hover:text-accent hover:border-accent focus:shadow-xs focus:no-underline"
        >
          Explore all projects
          <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </div>
    </section>
  )
}