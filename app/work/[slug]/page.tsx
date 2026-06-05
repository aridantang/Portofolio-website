"use client"
import React, { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react"
import { client } from "@/sanity/lib/client"
import imageUrlBuilder from "@sanity/image-url"
import { ImageLightbox } from "@/components/image-lightbox"

const builder = imageUrlBuilder(client)
function urlFor(source: any) {
  return builder.image(source)
}

export default function CaseStudyPage({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [carouselIndex, setCarouselIndex] = useState(0)
  const [project, setProject] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const { slug } = await params
        const data = await client.fetch(
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
        setProject(data)
      } catch (error) {
        console.error("Error fetching project:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchProject()
  }, [params])

  if (loading) {
    return (
      <main className="max-w-5xl mx-auto px-6 md:px-8 py-24">
        <p className="text-muted-foreground">Loading...</p>
      </main>
    )
  }

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
    .map((img: any) => urlFor(img).width(1366).height(768).url())

  const prev = () => setCarouselIndex((i) => (i === 0 ? carouselImages.length - 1 : i - 1))
  const next = () => setCarouselIndex((i) => (i === carouselImages.length - 1 ? 0 : i + 1))

  return (
    <>
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
              {project.workDescription || project.description}
            </p>
          </header>

          {carouselImages.length > 0 && (
            <div className="relative group">
              <button
                onClick={() => setLightboxOpen(true)}
                className="w-full aspect-video bg-card rounded-lg overflow-hidden hover:opacity-80 transition-opacity cursor-pointer"
              >
                <img
                  src={carouselImages[carouselIndex]}
                  alt="Process image"
                  className="w-full h-full object-cover"
                />
              </button>
              
              {/* Navigation Arrows */}
              {carouselImages.length > 1 && (
                <>
                  <button
                    onClick={prev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background"
                  >
                    <ChevronLeft className="w-5 h-5 text-foreground" />
                  </button>
                  <button
                    onClick={next}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background"
                  >
                    <ChevronRight className="w-5 h-5 text-foreground" />
                  </button>
                </>
              )}

              {/* Dots */}
              {carouselImages.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {carouselImages.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCarouselIndex(i)}
                      className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                        i === carouselIndex
                          ? "bg-foreground w-4"
                          : "bg-foreground/40 hover:bg-foreground/60"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          )}

          {project.overview && (
            <section className="space-y-6">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest text-muted-foreground/70">01</span>
                <h2 className="text-sm uppercase tracking-widest text-muted-foreground">Overview</h2>
              </div>
              <p className="text-lg text-foreground/90 leading-relaxed max-w-3xl">
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

      {lightboxOpen && (
        <ImageLightbox
          images={carouselImages}
          initialIndex={carouselIndex}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  )
}