import { skillGroups } from '../xgewyguffwhc/plkjs'

export function Skills() {
  return (
    <section id="skills" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-slate-400">
          <span className="inline-block h-px w-10 bg-slate-500" />
          02 — Capabilities
        </div>

        <div className="mb-8 max-w-2xl">
          <h2 className="text-3xl font-medium tracking-[-0.04em] text-white sm:text-4xl">
            Practical capability across security operations, IT support, data analysis, and enterprise systems.
          </h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {skillGroups.map((group) => (
            <article key={group.title} className="rounded-[1.8rem] border border-white/10 bg-white/3 p-6 backdrop-blur-xl">
              <div className="mb-5 flex items-center justify-between gap-4">
                <h3 className="text-xl font-medium text-white">{group.title}</h3>
                <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-slate-300">
                  Domain
                </span>
              </div>

              <p className="mb-5 text-sm leading-6 text-slate-300">{group.description}</p>

              <div className="flex flex-wrap gap-2.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-slate-900/60 px-3 py-2 text-xs text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
