import { ArrowUpRight } from "lucide-react"

const links = [
  {
    label: "Email",
    href: "mailto:aridantang@gmail.com",
    external: false
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/aridantang",
    external: true
  },
  {
    label: "Dribbble",
    href: "https://dribbble.com/aridantang",
    external: true
  },
  {
    label: "Resume",
    href: "https://drive.google.com/file/d/1MHQrBnMneU2d8j0rACndgNSoQIKdo8XV/view?usp=sharing",
    external: true
  }
]

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-16">
        <span className="text-accent">//</span> Contact
      </h2>

      <div className="grid md:grid-cols-2 gap-16 md:gap-24">
        {/* Left column - CTA */}
        <div className="space-y-8">
          <h3 className="text-3xl md:text-4xl font-medium text-foreground leading-tight text-balance">
            {"Let's build something together."}
          </h3>
          <p className="text-base text-muted-foreground leading-relaxed max-w-md">
            Currently open to full-time roles, contract work, and interesting collaborations. Based in San Francisco, working globally.
          </p>
          <a
            href="mailto:aridantang@gmail.com"
            className="group inline-flex items-center gap-3 text-foreground hover:text-accent transition-colors duration-200"
          >
            <span className="text-lg font-medium underline underline-offset-4 decoration-muted-foreground/50 group-hover:decoration-accent">
              aridantang@gmail.com
            </span>
            <ArrowUpRight className="w-5 h-5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
          </a>
        </div>

        {/* Right column - Links */}
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-widest text-muted-foreground">
            Elsewhere <span className="text-accent">*</span>
          </p>
          <div className="flex flex-col gap-4">
            {links.filter(link => link.external).map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-3 border-b border-border hover:border-accent/50 transition-colors duration-200"
              >
                <span className="text-base text-foreground group-hover:text-accent transition-colors duration-200">
                  {link.label}
                </span>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
