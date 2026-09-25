import { certifications } from '../xgewyguffwhc/hfqwe'

export function Education() {
  return (
    <section className="relative px-4 pb-24 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
        <article className="rounded-[1.8rem] border border-white/10 bg-white/3 p-6 backdrop-blur-xl">
          <div className="mb-5 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-slate-400">
            <span className="inline-block h-px w-10 bg-slate-500" />
            Education
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
              <p className="text-sm uppercase tracking-[0.22em] text-slate-400">Institution</p>
              <h3 className="mt-2 text-xl font-medium text-white">Christ the King Polytechnic College</h3>
              <p className="mt-3 text-sm text-slate-300">Stream: Information Technology</p>
              <p className="mt-1 text-sm text-slate-400">2020 — 2023</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
              <p className="text-sm uppercase tracking-[0.22em] text-slate-400">Institution</p>
              <h3 className="mt-2 text-xl font-medium text-white">CSI College of Engineering</h3>
              <p className="mt-3 text-sm text-slate-300">B.Tech in Information Technology</p>
              <p className="mt-1 text-sm text-slate-400">2023 — 2026</p>
            </div>
          </div>
        </article>

        <article className="rounded-[1.8rem] border border-white/10 bg-white/3 p-6 backdrop-blur-xl">
          <div className="mb-5 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-slate-400">
            <span className="inline-block h-px w-10 bg-slate-500" />
            Certifications
          </div>

          <div className="space-y-4">
            {certifications.map((cert) => (
              <div key={`${cert.name}-${cert.year}`} className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-base font-medium text-white">{cert.name}</h3>
                    <p className="mt-1 text-sm text-slate-300">{cert.issuer}</p>
                  </div>
                  <span className="shrink-0 whitespace-nowrap text-right text-xs uppercase tracking-[0.2em] text-slate-400">{cert.year}</span>
                </div>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  )
}
