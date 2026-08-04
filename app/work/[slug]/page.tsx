import Link from "next/link"
import { client } from "@/sanity/lib/client"
import imageUrlBuilder from "@sanity/image-url"
import { CaseStudyPageClient } from "@/components/case-study-page-client"

const builder = imageUrlBuilder(client)
function urlFor(source: any) {
  return builder.image(source)
}

async function getProject(slug: string) {
  return await client.fetch(
    `*[_type == "caseStudy" && _id == $id][0] {
      _id,
      title,
      tags,
      description,
      workDescription,
      thumbnail,
      processImages,
      overview,
      problem,
      outcome,
      year
    }`,
    { id: slug },
    { next: { revalidate: 0 } }
  )
}

export default async function CaseStudyPage({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = await getProject(slug)

  if (!project) {
    return (
      <main className="max-w-5xl mx-auto px-6 md:px-8 py-24">
        <p className="text-muted-foreground">Project not found</p>
        <Link href="/work" className="text-foreground underline underline-offset-4 mt-4 inline-block">
          Back to work
        </Link>
      </main>
    )
  }

  const carouselImages = (project.processImages || [])
    .filter((img: any) => img && img._type === "image")
    .slice(0, 5)
    .map((img: any) => urlFor(img).url())

  return <CaseStudyPageClient project={project} carouselImages={carouselImages} />
}