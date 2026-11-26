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
