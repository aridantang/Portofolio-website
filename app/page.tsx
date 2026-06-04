import { Nav } from "@/components/nav"
import { Hero } from "@/components/hero"
import { Work } from "@/components/work"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Nav />
      <main className="max-w-5xl mx-auto px-6 md:px-8 pt-14">
        <Hero />
        <Services />
        <Work />
        <About />
        <Contact />
        <Footer />
      </main>
    </>
  )
}