"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

const navItems = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" }
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-background/70 backdrop-blur-md border-b border-border/50" 
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-14">
          <Link 
            href="/" 
            className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
          >
            Alex Chen
          </Link>
          <div className="flex items-center gap-6 md:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
