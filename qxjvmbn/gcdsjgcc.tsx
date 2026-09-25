import { About } from './hfdew/kfjxwe'
import { Contact } from './hfdew/rtyuio'
import { Domains } from './hfdew/plmnbv'
import { Education } from './hfdew/xjskqwe'
import { Experience } from './hfdew/qjvbnm'
import { Footer } from './hfdew/zqplmk'
import { Hero } from './hfdew/mnbvczx'
import { Labs } from './hfdew/asdkqwe'
import { Navbar } from './hfdew/vbxplm'
import { Projects } from './hfdew/jdhfksq'
import { ProjectDetail } from './hfdew/qwepjl'
import { Skills } from './hfdew/qwejksd'
import { useEffect, useState } from 'react'
import { useScrollProgress } from './jdhfks/qpxlwe'

function readProjectSlug() {
  const hash = window.location.hash
  return hash.startsWith('#project=') ? hash.slice('#project='.length) : null
}

function App() {
  const progress = useScrollProgress()
  const [projectSlug, setProjectSlug] = useState<string | null>(readProjectSlug)

  useEffect(() => {
    const handleHashChange = () => setProjectSlug(readProjectSlug())
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

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
            const top = projectsSection.getBoundingClientRect().top + window.scrollY - 96
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
    <div className="min-h-screen bg-[#090b10] text-slate-100">
      <div className="pointer-events-none fixed inset-x-0 top-0 z-40 h-1 bg-transparent">
        <div className="h-full bg-gradient-to-r from-sky-300 via-emerald-200 to-violet-300 transition-[width] duration-150" style={{ width: `${progress * 100}%` }} />
      </div>

      <div className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(141,158,194,0.14),transparent_30%),radial-gradient(circle_at_bottom_left,_rgba(52,211,153,0.08),transparent_25%)]" />
        <div className="absolute inset-0 -z-10 bg-grid bg-[length:40px_40px] opacity-40" />

        <Navbar />
        {projectSlug ? (
          <ProjectDetail slug={projectSlug} />
        ) : (
          <main>
            <Hero />
            <About />
            <Skills />
            <Domains />
            <Projects onOpenProject={openProject} />
            <Labs />
            <Experience />
            <Education />
            <Contact />
          </main>
        )}
        <Footer />
      </div>
    </div>
  )
}

export default App
