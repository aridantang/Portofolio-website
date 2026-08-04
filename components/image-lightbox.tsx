"use client"
import React from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

export function ImageLightbox({
  images,
  initialIndex = 0,
  onClose
}: {
  images: string[],
  initialIndex?: number,
  onClose: () => void
}) {
  const [current, setCurrent] = React.useState(initialIndex)

  const prev = () => setCurrent((i) => (i === 0 ? images.length - 1 : i - 1))
  const next = () => setCurrent((i) => (i === images.length - 1 ? 0 : i + 1))

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev()
      if (e.key === "ArrowRight") next()
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  React.useEffect(() => {
    let scrollTimeout: NodeJS.Timeout
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()
      clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(() => {
        if (e.deltaY > 0) {
          next()
        } else {
          prev()
        }
      }, 100)
    }
    window.addEventListener("wheel", handleWheel, { passive: false })
    return () => window.removeEventListener("wheel", handleWheel)
  }, [current])

  return (
    <div className="fixed inset-0 z-50 bg-background/98 backdrop-blur-md flex items-center justify-center p-4" onClick={onClose}>
      {/* Close button */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation()
          onClose()
        }}
        className="absolute top-6 right-6 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-muted transition-colors z-30"
      >
        <X className="w-5 h-5 text-foreground" />
      </button>

      {/* Left click area */}
      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation()
            prev()
          }}
          className="absolute left-0 top-0 bottom-0 w-1/6 flex items-center justify-center hover:bg-white/5 transition-colors z-20"
        >
          <div className="w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors">
            <ChevronLeft className="w-6 h-6 text-foreground" />
          </div>
        </button>
      )}

      {/* Image container */}
      <div className="relative flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
        <img
          src={images[current]}
          alt={`Image ${current + 1}`}
          className="max-w-[90vw] max-h-[90vh] object-contain"
        />
      </div>

      {/* Right click area */}
      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation()
            next()
          }}
          className="absolute right-0 top-0 bottom-0 w-1/6 flex items-center justify-center hover:bg-white/5 transition-colors z-20"
        >
          <div className="w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors">
            <ChevronRight className="w-6 h-6 text-foreground" />
          </div>
        </button>
      )}

      {/* Dots */}
      {images.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${i === current
                ? "bg-foreground w-6"
                : "bg-foreground/40 hover:bg-foreground/60"
                }`}
            />
          ))}
        </div>
      )}

      {/* Counter */}
      <div className="absolute top-6 left-6 text-sm text-foreground/60 bg-background/50 backdrop-blur-sm px-3 py-1.5 rounded-full">
        {current + 1} / {images.length}
      </div>
    </div>
  )
}