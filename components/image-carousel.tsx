"use client"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function ImageCarousel({ images }: { images: string[] }) {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((i) => (i === 0 ? images.length - 1 : i - 1))
  const next = () => setCurrent((i) => (i === images.length - 1 ? 0 : i + 1))

  if (!images.length) return null

  return (
    <div className="relative aspect-video bg-card rounded-lg overflow-hidden group">
      <img
        src={images[current]}
        alt={`Image ${current + 1}`}
        className="w-full h-full object-cover transition-opacity duration-300"
      />

      {/* Arrows */}
      {images.length > 1 && (
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
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                i === current
                  ? "bg-foreground w-4"
                  : "bg-foreground/40 hover:bg-foreground/60"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}