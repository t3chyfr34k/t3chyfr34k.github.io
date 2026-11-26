import { ArrowUpRight, BookOpen, Feather } from 'lucide-react'
import { useEffect, useState } from 'react'

const amazonUrl = 'https://www.amazon.in/Other-Side-Everything-Ungalul-Oruvan-ebook/dp/B0GZG4G6Y5'

export function Store() {
  const [coverAvailable, setCoverAvailable] = useState(true)

  useEffect(() => {
    document.title = 'The Other Side of Everything — Shyam D'
    return () => {
      document.title = 'T3chyFr34k — Shyam Daniel | Lethargic Labs'
    }
  }, [])

  return (
    <main className="min-h-screen px-4 pb-20 pt-32 sm:px-6 sm:pt-36 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <section aria-labelledby="store-title" className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#11131a]/90 px-6 py-10 shadow-[0_30px_100px_rgba(0,0,0,0.28)] sm:px-10 sm:py-14 lg:px-16 lg:py-16">
          <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-28 h-96 w-96 rounded-full bg-amber-200/[0.07] blur-3xl" />
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_35%,rgba(214,171,106,0.08),transparent_45%)]" />

          <div className="relative grid items-center gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
            <div className="order-2 max-w-xl lg:order-1">
              <p className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.28em] text-amber-200/80">
                <BookOpen className="h-4 w-4" />
                The bookshop
              </p>
              <h1 id="store-title" className="mt-6 font-serif text-5xl leading-[1.03] tracking-[-0.04em] text-[#f5f0e7] sm:text-6xl lg:text-7xl">
                The Other Side <span className="text-amber-200">of Everything</span>
              </h1>
              <div className="mt-7 flex items-center gap-3 text-slate-300">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-amber-100/15 bg-amber-100/[0.06] text-amber-100">
                  <Feather className="h-4 w-4" />
                </span>
                <p className="text-sm">A book by <span className="font-medium text-white">Shyam D</span></p>
              </div>
              <p className="mt-8 max-w-md border-l border-amber-200/30 pl-4 text-sm leading-7 text-slate-400">
                Discover the book and its full details on Amazon India.
              </p>
              <a
                href={amazonUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-amber-100 px-6 py-3 text-sm font-semibold text-[#19150f] shadow-[0_8px_35px_rgba(215,174,110,0.16)] transition hover:-translate-y-0.5 hover:bg-amber-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-100"
              >
                Find it on Amazon.in
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <p className="mt-4 text-xs text-slate-500">Opens the book listing in a new tab.</p>
            </div>

            <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
              <div className="relative w-[min(68vw,19rem)] [perspective:1200px] sm:w-[21rem]">
                <div aria-hidden="true" className="absolute -inset-8 rounded-full bg-amber-200/[0.07] blur-3xl" />
                <div className="relative aspect-[0.69] overflow-hidden rounded-r-md border border-[#f5e8d1]/20 bg-[#24221f] shadow-[18px_24px_45px_rgba(0,0,0,0.5)] [transform:rotateY(-7deg)]">
                  {coverAvailable && (
                    <img
                      src="https://images-na.ssl-images-amazon.com/images/P/B0GZG4G6Y5.01._SCLZZZZZZZ_.jpg"
                      alt="Cover of The Other Side of Everything by Shyam D"
                      className="absolute inset-0 z-10 h-full w-full object-cover"
                      onError={() => setCoverAvailable(false)}
                    />
                  )}
                  <div aria-hidden="true" className="absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-black/55 via-white/10 to-transparent" />
                  <div aria-hidden="true" className="absolute inset-3 border border-amber-100/20" />
                  <div aria-hidden="true" className="absolute left-1/2 top-[22%] h-36 w-36 -translate-x-1/2 rounded-full border border-amber-100/20 sm:h-44 sm:w-44">
                    <div className="absolute inset-3 rounded-full border border-amber-100/15" />
                    <div className="absolute inset-8 rounded-full border border-amber-100/10" />
                    <div className="absolute left-1/2 top-1/2 h-px w-24 -translate-x-1/2 bg-amber-100/25" />
                  </div>
                  <div aria-hidden={coverAvailable} className={`absolute inset-x-8 top-[47%] text-center ${coverAvailable ? 'invisible' : ''}`}>
                    <p className="font-serif text-3xl leading-[1.05] tracking-[-0.03em] text-[#f4ead9] sm:text-4xl">The Other Side<br /><span className="italic text-amber-200">of Everything</span></p>
                    <span className="mx-auto mt-6 block h-px w-10 bg-amber-200/60" />
                    <p className="mt-5 text-[10px] uppercase tracking-[0.38em] text-[#d8c4a5]">Shyam D</p>
                  </div>
                  <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/35 to-transparent" />
                </div>
                <div aria-hidden="true" className="absolute -bottom-5 left-5 right-0 -z-10 h-8 rounded-full bg-black/60 blur-xl" />
                <p className="mt-6 text-center text-[10px] uppercase tracking-[0.24em] text-slate-500">The Other Side of Everything · Shyam D</p>
              </div>
            </div>
          </div>
        </section>

        <footer className="mt-8 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center">
          <span>Words by Shyam D</span>
          <a href="/" className="transition hover:text-slate-200">T3chyFr34k · Lethargic Labs</a>
        </footer>
      </div>
    </main>
  )
}
