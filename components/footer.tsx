export function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Suryananda Aridantang
        </p>
        <p className="text-sm text-muted-foreground">
          Built with <span className="text-accent">care</span>
        </p>
      </div>
    </footer>
  )
}
