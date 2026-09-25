import { ArrowUpRight, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'

const hasResume = false

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Labs', href: '#labs' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 18)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div
        className={[
          'mx-auto flex max-w-6xl items-center justify-between rounded-full border px-4 py-3 transition-all duration-300 sm:px-5',
          isScrolled
            ? 'border-white/10 bg-slate-950/80 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl'
            : 'border-white/10 bg-white/3 backdrop-blur-xl',
        ].join(' ')}
      >
        <a href="#home" className="flex items-center gap-3 text-sm font-medium tracking-[0.24em] text-slate-100 uppercase">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[10px] text-emerald-200">
            IT
          </span>
          <span className="hidden sm:inline">T3chyFr34k</span>
        </a>

        <nav className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>

        {hasResume && (
          <div className="hidden items-center gap-3 md:flex">
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-emerald-300/60 hover:bg-white/8"
            >
              Resume
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        )}

        <button
          type="button"
          aria-label="Toggle menu"
          className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 text-slate-100 md:hidden"
          onClick={() => setIsMobileMenuOpen((open) => !open)}
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="mx-auto mt-3 max-w-6xl rounded-2xl border border-white/10 bg-slate-950/85 p-3 shadow-2xl backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-2 text-sm text-slate-200">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-xl px-3 py-2 transition hover:bg-white/5"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            {hasResume && (
              <a
                href="/resume.pdf"
                className="mt-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Resume
              </a>
            )}
          </nav>
        </div>
      )}
    </header>
  )
}
