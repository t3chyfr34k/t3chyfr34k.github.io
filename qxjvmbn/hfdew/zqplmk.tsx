import { Github, Linkedin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-slate-400 sm:flex-row">
        <div>
          <span className="font-medium text-slate-200">© 2026 T3chyFr34k · Lethargic Labs</span>
        </div>

        <div className="flex items-center gap-5">
          <a href="https://github.com/t3chyfr34k" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-white">
            <Github className="h-4 w-4" />
            GitHub
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-white">
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
