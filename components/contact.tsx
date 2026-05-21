import { ArrowUpRight } from "lucide-react"

const links = [
  {
    label: "Email",
    href: "mailto:hello@alexchen.design",
    external: false
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/alexchen",
    external: true
  },
  {
    label: "Dribbble",
    href: "https://dribbble.com/alexchen",
    external: true
  },
  {
    label: "read.cv",
    href: "https://read.cv/alexchen",
    external: true
  }
]

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-12">
        <span className="text-accent">/</span> Contact
      </h2>
      <div className="space-y-8">
        <p className="text-lg md:text-xl text-foreground max-w-xl">
          {"Open to new opportunities and collaborations. Let's connect."}
        </p>
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="group inline-flex items-center gap-1 text-foreground hover:text-accent transition-colors duration-200"
            >
              <span className="text-base underline underline-offset-4">
                {link.label}
              </span>
              {link.external && (
                <ArrowUpRight className="w-4 h-4 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
