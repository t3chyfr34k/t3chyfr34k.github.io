import { ArrowRight, Compass, ExternalLink, ShieldCheck } from 'lucide-react'
import { portfolioProjects } from '../xgewyguffwhc/qwepjl'

type ProjectsProps = {
  onOpenProject: (slug: string) => void
}

export function Projects({ onOpenProject }: ProjectsProps) {
  return (
    <section id="projects" className="relative scroll-mt-28 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-slate-400">
          <span className="inline-block h-px w-10 bg-slate-500" />
          07 — Projects
        </div>

        <div className="mb-8 max-w-2xl rounded-[1.8rem] border border-white/10 bg-white/3 p-6 backdrop-blur-xl">
          <div className="flex items-start gap-4">
            <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-sky-200">
              <Compass className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-2xl font-medium text-white">Three focused projects built around my target roles.</h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Each project is a focused portfolio implementation with clear boundaries, practical workflows, and honest scope.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {portfolioProjects.map((project) => (
            <article
              key={project.title}
              className="rounded-[1.8rem] border border-white/10 bg-white/3 p-5 backdrop-blur-xl"
            >
              <div className="mb-5 flex items-start gap-3">
                <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-emerald-200" />
                <div>
                  <p className="text-[10px] uppercase tracking-[0.28em] text-slate-400">{project.category}</p>
                  <h3 className="mt-3 text-xl font-medium text-white">{project.title}</h3>
                </div>
              </div>

              <p className="text-sm leading-6 text-slate-300">{project.description}</p>
              <div className="mt-5 flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-slate-400">
                <ArrowRight className="h-4 w-4 text-sky-200" />
                {project.status}
              </div>
              <button type="button" onClick={() => onOpenProject(project.slug)} className="mt-5 inline-flex items-center gap-2 text-sm text-sky-200 transition hover:text-white">
                Open project page
                <ExternalLink className="h-4 w-4" />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
