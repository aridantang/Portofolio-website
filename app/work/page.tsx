import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { client } from "@/sanity/lib/client"
import imageUrlBuilder from "@sanity/image-url"

const builder = imageUrlBuilder(client)
function urlFor(source: any) {
  return builder.image(source)
}

async function getCaseStudies() {
  return await client.fetch(`*[_type == "caseStudy"] | order(_createdAt desc) {
    _id,
    title,
    tags,
    description,
    thumbnail,
    year
  }`)
}

export default async function AllWorkPage() {
  const projects = await getCaseStudies()

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
          {projects.map((project: any) => (
            <Link
              key={project._id}
              href={`/work/${project._id}`}
              className="group block"
            >
              <article className="space-y-4">
                <div className="aspect-[4/3] bg-card rounded-lg ov