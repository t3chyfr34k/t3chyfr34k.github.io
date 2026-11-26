import { About } from './hfdew/kfjxwe'
import { Contact } from './hfdew/rtyuio'
import { Footer } from './hfdew/zqplmk'
import { Hero } from './hfdew/mnbvczx'
import { Labs } from './hfdew/asdkqwe'
import { Navbar } from './hfdew/vbxplm'
import { Projects } from './hfdew/jdhfksq'
import { ProjectDetail } from './hfdew/qwepjl'
import { Skills } from './hfdew/qwejksd'
import { useEffect, useState } from 'react'
import { Store } from './hfdew/store'
import { LoadingScreen } from './hfdew/t3loader'

function readProjectSlug() {
  const hash = window.location.hash
  return hash.startsWith('#project=') ? hash.slice('#project='.length) : null
}

function App() {
  const isStorePage = window.location.pathname.replace(/\/$/, '') === '/store'
  const [projectSlug, setProjectSlug] = useState<string | null>(readProjectSlug)

  useEffect(() => {
    const handleHashChange = () => setProjectSlug(readProjectSlug())
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  useEffect(() => {
    const page = document.querySelector('.newspaper')
    if (!page) return

    const targets = '.paper-header, main > .paper-section, main > .mx-auto.max-w-6xl, .paper-footer, .paper-store-header, .paper-store-feature, .paper-store-footer, main > .space-y-8, main > .space-y-12, .paper-lead-copy, .paper-portrait, .paper-section-head, .paper-store-copy, .paper-book-figure, .paper-project-lead > div, .paper-project-image, .paper-columns article, .paper-skill-grid article, .paper-project-grid article, .paper-lab-grid article'
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let observer: IntersectionObserver | undefined
    let parallaxFrame = 0

    const reveal = (scope: ParentNode) => {
      scope.querySelectorAll<HTMLElement>(targets).forEach((element, index) => {
        if (element.classList.contains('is-visible')) return
        element.classList.add('scroll-reveal')
        if (element.matches('.paper-columns article, .paper-skill-grid article, .paper-project-grid article, .paper-lab-grid article')) {
          element.style.setProperty('--reveal-delay', `${(index % 4) * 65}ms`)
        }
        const direction = element.matches('.paper-lead-copy, .paper-section-head, .paper-store-copy, .paper-project-lead > div')
          ? 'reveal-from-left'
          : element.matches('.paper-portrait, .paper-book-figure, .paper-project-image')
            ? 'reveal-from-right'
            : element.matches('.paper-columns article, .paper-skill-grid article, .paper-project-grid article, .paper-lab-grid article')
              ? index % 2 === 0 ? 'reveal-from-left' : 'reveal-from-right'
              : 'reveal-from-bottom'
        element.classList.add(direction)
        if (reduceMotion || !observer) {
          element.classList.add('is-visible')
        } else {
          observer?.observe(element)
        }
      })
    }

    if (!reduceMotion && 'IntersectionObserver' in window) {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-visible')
          observer?.unobserve(entry.target)
        })
      }, { threshold: 0.12, rootMargin: '0px 0px -48px 0px' })
    }

    reveal(page)
    const updateParallax = () => {
      if (reduceMotion || parallaxFrame) return
      parallaxFrame = window.requestAnimationFrame(() => {
        parallaxFrame = 0
        page.querySelectorAll<HTMLElement>('.paper-portrait img, .paper-project-image img, .paper-book-figure').forEach((element) => {
          const bounds = element.getBoundingClientRect()
          const offset = Math.max(-9, Math.min(9, (window.innerHeight / 2 - (bounds.top + bounds.height / 2)) * 0.018))
          element.style.setProperty('--scroll-shift', `${offset.toFixed(1)}px`)
        })
      })
    }
    const mutations = new MutationObserver(() => {
      reveal(page)
      updateParallax()
    })
    mutations.observe(page, { childList: true, subtree: true })
    window.addEventListener('scroll', updateParallax, { passive: true })
    window.addEventListener('resize', updateParallax)
    updateParallax()

    return () => {
      mutations.disconnect()
      observer?.disconnect()
      window.removeEventListener('scroll', updateParallax)
      window.removeEventListener('resize', updateParallax)
      if (parallaxFrame) window.cancelAnimationFrame(parallaxFrame)
    }
  }, [projectSlug, isStorePage])

  useEffect(() => {
    requestAnimationFrame(() => {
      if (projectSlug) {
        window.scrollTo(0, 0)
        return
      }

      if (window.location.hash === '#projects') {
        requestAnimationFrame(() => {
          const projectsSection = document.getElementById('projects')
          if (!projectsSection) return

          const scrollToProjects = () => {
            const top = projectsSection.getBoundingClientRect().top + window.scrollY - 24
            window.scrollTo(0, Math.max(0, top))
          }

          scrollToProjects()
          window.setTimeout(scrollToProjects, 120)
        })
      }
    })
  }, [projectSlug])

  const openProject = (slug: string) => {
    window.location.hash = `project=${slug}`
  }

  return (
    <div className="newspaper min-h-screen">
      <LoadingScreen />
      <div className="portfolio-content relative isolate overflow-hidden">
        {!isStorePage && <Navbar />}
        {isStorePage ? (
          <Store />
        ) : projectSlug ? (
          <ProjectDetail slug={projectSlug} />
        ) : (
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects onOpenProject={openProject} />
            <Labs />
            <Contact />
          </main>
        )}
        <Footer />
      </div>
    </div>
  )
}

export default App
