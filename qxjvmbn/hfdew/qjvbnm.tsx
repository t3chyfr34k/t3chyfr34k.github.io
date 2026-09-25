export function Experience() {
  return (
    <section id="experience" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-slate-400">
          <span className="inline-block h-px w-10 bg-slate-500" />
          08 — Experience
        </div>

        <div className="rounded-[1.8rem] border border-white/10 bg-white/3 p-6 backdrop-blur-xl sm:p-8">
          <p className="text-[10px] uppercase tracking-[0.25em] text-slate-400">Current stage</p>
          <h3 className="mt-3 text-2xl font-medium text-white">Building experience through study, certifications, and practical projects.</h3>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">
            I do not have formal professional experience yet. I am currently developing my skills through my B.Tech in Information Technology, cybersecurity and DevOps certifications, hands-on labs, and focused projects aligned with SOC Analyst, Data Analyst, IT Support, and ERP roles.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {['Information Technology', 'Cybersecurity learning', 'DevOps learning', 'Hands-on labs', 'Projects in progress'].map((item) => (
              <span key={item} className="rounded-full border border-white/10 bg-slate-900/70 px-2.5 py-1 text-[11px] text-slate-200">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
