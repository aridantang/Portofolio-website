"use client"

import { useEffect, useState } from "react"
import { ImageLightbox } from "./image-lightbox"

const words = ["complexity.", "ambiguity.", "fragility.", "obscurity."]

type HeroImage = {
  thumbnail: string
  hd: string
}

export function HeroClient({ images }: { images: HeroImage[] }) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[currentWordIndex]
    let timer: NodeJS.Timeout

    if (!isDeleting && displayedText !== currentWord) {
      timer = setTimeout(() => {
        setDisplayedText(currentWord.slice(0, displayedText.length + 1))
      }, 50)
    } else if (isDeleting && displayedText !== "") {
      timer = setTimeout(() => {
        setDisplayedText(displayedText.slice(0, -1))
      }, 30)
    } else if (displayedText === currentWord && !isDeleting) {
      timer = setTimeout(() => {
        setIsDeleting(true)
      }, 2000)
    } else if (displayedText === "" && isDeleting) {
      setIsDeleting(false)
      setCurrentWordIndex((prev) => (prev + 1) % words.length)
    }

    return () => clearTimeout(timer)
  }, [displayedText, isDeleting, currentWordIndex])

  const handleImageClick = (index: number) => {
    setSelectedIndex(index % images.length)
    setLightboxOpen(true)
  }

  return (
    <>
      <section className="min-h-[90vh] flex flex-col justify-center py-24 md:py-32 overflow-hidden">
        <div className="flex items-center gap-2 mb-10">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs uppercase tracking-widest text-muted-foreground">Open for projects</span>
        </div>

        <div className="space-y-4 mb-10">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-medium tracking-tight text-foreground text-balance leading-none">
            Designing interfaces that simplify{" "}
            <span className="text-accent inline-block min-w-[200px] md:min-w-[300px]">
              {displayedText}
              <span className="animate-pulse text-foreground" style={{ animationDuration: "0.5s" }}>
                |
              </span>
            </span>
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-lg leading-relaxed">
            Suryananda Aridantang - Product Designer
          </p>
          <p className="text-base md:text-lg text-muted-foreground max-w-lg leading-relaxed">
            7+ years making SaaS platforms, dashboards, and data-heavy products feel effortless.
          </p>
        </div>

        {images.length > 0 && (
          <div className="relative -mx-6 md:-mx-8 overflow-hidden">
            <style>{`
              @keyframes heroScroll {
                from { transform: translateX(0); }
                to { transform: translateX(-50%); }
              }
              .hero-scroll {
                animation: heroScroll 40s linear infinite;
              }
              .hero-scroll:hover {
                animation-play-state: paused;
              }
            `}</style>
            <div className="flex gap-3 hero-scroll w-max">
              {[...images, ...images].map((img, i) => (
                <button
                  key={i}
                  onClick={() => handleImageClick(i % images.length)}
                  className="w-48 h-32 md:w-56 md:h-40 rounded-lg overflow-hidden bg-card shrink-0 grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer hover:scale-105"
                >
                  <img
                    src={img.thumbnail}
                    alt="Hero carousel"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        )}
      </section>

      {lightboxOpen && (
        <ImageLightbox
          images={images.map((img) => img.hd)}
          initialIndex={selectedIndex}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  )
}
