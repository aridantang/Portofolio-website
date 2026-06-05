"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import imageUrlBuilder from "@sanity/image-url"
import { ImageLightbox } from "./image-lightbox"
import { client } from "@/sanity/lib/client"

const builder = imageUrlBuilder(client)
function urlFor(source: any) {
  return builder.image(source)
}

export function Hero() {
  const [images, setImages] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)

  useEffect(() => {
    const fetchHeroImages = async () => {
      try {
        const settings = await client.fetch(`*[_type == "siteSettings"][0] {
          heroImages
        }`, {}, { next: { revalidate: 0 } })
        
        const heroImages = (settings?.heroImages || []).map((img: any) => ({
          thumbnail: urlFor(img).width(600).height(400).url(),
          hd: urlFor(img).width(2000).height(1333).url(),
        }))
        setImages(heroImages)
      } catch (error) {
        console.error("Error fetching hero images:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchHeroImages()
  }, [])

  const handleImageClick = (index: number) => {
    setSelectedIndex(index % images.length)
    setLightboxOpen(true)
  }

  return (
    <>
      <section className="min-h-[90vh] flex flex-col justify-center py-24 md:py-32 overflow-hidden">
        {/* Badge */}
        <div className="flex items-center gap-2 mb-10">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs uppercase tracking-widest text-muted-foreground">Open for projects</span>
        </div>

        {/* Headline */}
        <div className="space-y-4 mb-10">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-medium tracking-tight text-foreground text-balance leading-none">
            Suryananda Aridantang <br />
            <span className="text-muted-foreground">Product Designer</span>
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-lg leading-relaxed">
            Designing the tools that run businesses.
          </p>
          <p className="text-base md:text-lg text-muted-foreground max-w-lg leading-relaxed">
            7+ years making SaaS platforms, dashboards, and data-heavy products feel effortless.
          </p>
        </div>

        {/* Auto-scrolling image strip */}
        {!loading && images.length > 0 && (
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
          images={images.map(img => img.hd)}
          initialIndex={selectedIndex}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  )
}