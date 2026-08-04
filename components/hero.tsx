import imageUrlBuilder from "@sanity/image-url"
import { client } from "@/sanity/lib/client"
import { HeroClient } from "./hero-client"

const builder = imageUrlBuilder(client)
function urlFor(source: any) {
  return builder.image(source)
}

async function getHeroImages() {
  const settings = await client.fetch(`*[_type == "siteSettings"][0] {
    heroImages
  }`, {}, { next: { revalidate: 0 } })

  return (settings?.heroImages || []).map((img: any) => ({
    thumbnail: urlFor(img).width(600).height(400).url(),
    hd: urlFor(img).width(2000).height(1333).url(),
  }))
}

export async function Hero() {
  const images = await getHeroImages()

  return <HeroClient images={images} />
}