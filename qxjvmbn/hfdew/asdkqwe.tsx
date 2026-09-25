const labs = [
  {
    title: 'SOC Lab',
    description: 'Placeholder for log review, investigation flow, and alert triage exercises.',
  },
  {
    title: 'Network Troubleshooting Lab',
    description: 'Placeholder for connectivity, DNS, DHCP, and issue-isolation scenarios.',
  },
  {
    title: 'Windows Administration Lab',
    description: 'Placeholder for system configuration, account operations, and support workflows.',
  },
  {
    title: 'Data Analytics Lab',
    description: 'Placeholder for SQL, data cleaning, dashboard building, and analytical storytelling.',
  },
  {
    title: 'SAP Learning Lab',
    description: 'Placeholder for ERP process mapping and enterprise workflow understanding.',
  },
]

export function Labs() {
  return (
    <section id="labs" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-slate-400">
          <span className="inline-block h-px w-10 bg-slate-500" />
          05 — Labs
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {labs.map((lab) => (
            <article key={lab.title} className="rounded-[1.6rem] border border-white/10 bg-white/3 p-5 backdrop-blur-xl">
              <div className="mb-4 h-2 w-12 rounded-full bg-gradient-to-r from-sky-300 via-emerald-200 to-slate-500" />
              <h3 className="mb-3 text-lg font-medium text-white">{lab.title}</h3>
              <p className="text-sm leading-6 text-slate-300">{lab.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
