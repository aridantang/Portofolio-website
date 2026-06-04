import Link from "next/link"
import { client } from "@/sanity/lib/client"
import imageUrlBuilder from "@sanity/image-url"

const builder = imageUrlBuilder(client)
function urlFor(source: any) {
  return builder.image(source)
}

async function getHeroImages() {
  return await client.fetch(`*[_type == "caseStudy" && defined(thumbnail)] | order(order asc) {
    _id,
    title,
    thumbnail
  }`, {}, { next: { revalidate: 0 } })
}

export async function Hero() {
  const projects = await getHeroImages()
  const images = projects.map((p: any) => ({
    src: urlFor(p.thumbnail).width(600).height(400).url(),
    title: p.title,
  }))

  return (
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
              <div
                key={i}
                className="w-48 h-32 md:w-56 md:h-40 rounded-lg overflow-hidden bg-card shrink-0 grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}