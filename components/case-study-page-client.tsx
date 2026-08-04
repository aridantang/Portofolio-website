"use client"

import React, { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react"
import { ImageLightbox } from "@/components/image-lightbox"

type Project = {
  _id: string
  title: string
  tags?: string[]
  description?: string
  workDescription?: string
  thumbnail?: any
  processImages?: any[]
  overview?: string
  problem?: string
  outcome?: string
  year?: string
}

export function CaseStudyPageClient({ project, carouselImages }: { project: Project; carouselImages: string[] }) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [carouselIndex, setCarouselIndex] = useState(0)

  const prev = () => setCarouselIndex((i) => (i === 0 ? carouselImages.length - 1 : i - 1))
  const next = () => setCarouselIndex((i) => (i === carouselImages.length - 1 ? 0 : i + 1))

  const renderParagraphs = (text: string = "") => (
    text.split("\n\n").filter(Boolean).map((paragraph: string, i: number) => (
      <p key={i}>{paragraph}</p>
    ))
  )

  return (
    <>
      <main className="max-w-5xl mx-auto px-6 md:px-8 py-24">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-all duration-1000 ease-in-out mb-16 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-all duration-1000 ease-in-out" />
          Back to work
        </Link>

        <article className="space-y-24">
          <header className="space-y-6">
            <p className="text-sm text-muted-foreground">
              {project.tags?.join(" · ")} {project.year && `· ${project.year}`}
            </p>
            <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-foreground text-balance">
              {project.title}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              {project.workDescription || project.description}
            </p>
          </header>

          {carouselImages.length > 0 && (
            <div className="relative group w-full bg-card rounded-lg overflow-hidden aspect-video flex items-center justify-center">
              <button
                onClick={() => setLightboxOpen(true)}
                className="w-full h-full hover:opacity-80 transition-all duration-1000 ease-in-out cursor-pointer"
              >
                <img
                  src={carouselImages[carouselIndex]}
                  alt="Process image"
                  className="w-full h-full object-contain"
                />
              </button>

              {carouselImages.length > 1 && (
                <>
                  <button
                    onClick={prev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-lg bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-1000 ease-in-out hover:bg-background"
                  >
                    <ChevronLeft className="w-5 h-5 text-foreground" />
                  </button>
                  <button
                    onClick={next}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-lg bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-1000 ease-in-out hover:bg-background"
                  >
                    <ChevronRight className="w-5 h-5 text-foreground" />
                  </button>

                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {carouselImages.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCarouselIndex(i)}
                        className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === carouselIndex ? "bg-foreground w-4" : "bg-foreground/40 hover:bg-foreground/60"}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          )}

          {project.overview && (
            <section className="space-y-8">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest text-muted-foreground/70">01</span>
                <h2 className="text-sm uppercase tracking-widest text-muted-foreground">Overview</h2>
              </div>
              <div className="space-y-4 text-lg md:text-xl text-foreground leading-relaxed max-w-3xl">
                {renderParagraphs(project.overview)}
              </div>
            </section>
          )}

          {project.problem && (
            <section className="space-y-8">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest text-muted-foreground/70">02</span>
                <h2 className="text-sm uppercase tracking-widest text-muted-foreground">Problem</h2>
              </div>
              <div className="space-y-4 text-lg md:text-xl text-foreground leading-relaxed max-w-3xl">
                {renderParagraphs(project.problem)}
              </div>
            </section>
          )}

          {project.outcome && (
            <section className="space-y-8">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest text-muted-foreground/70">03</span>
                <h2 className="text-sm uppercase tracking-widest text-muted-foreground">Outcome</h2>
              </div>
              <div className="space-y-4 text-lg md:text-xl text-foreground leading-relaxed max-w-3xl">
                {renderParagraphs(project.outcome)}
              </div>
            </section>
          )}

          <div className="pt-12 border-t border-border">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-all duration-1000 ease-in-out group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-all duration-1000 ease-in-out" />
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
