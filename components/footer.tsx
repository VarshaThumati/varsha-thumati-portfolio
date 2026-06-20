export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-primary/20 bg-card/50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <p className="text-center text-sm text-foreground/60 md:text-left">
            © {currentYear} Lakshmi Varsha Thumati. All rights reserved.
          </p>
          <p className="text-center text-sm text-foreground/60">
            Designed and Developed by Lakshmi Varsha Thumati
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/varsha-thumati/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 transition-colors hover:text-primary"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/VarshaThumati"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 transition-colors hover:text-primary"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
