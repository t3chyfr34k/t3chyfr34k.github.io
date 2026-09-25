import { Activity, Database, Shield, Workflow } from 'lucide-react'

const flows = [
  {
    label: 'Cybersecurity',
    icon: Shield,
    steps: ['Alert', 'Investigation', 'Evidence', 'Root cause', 'Response'],
    accent: 'from-sky-500/15 to-transparent',
  },
  {
    label: 'Data',
    icon: Database,
    steps: ['Data', 'Clean', 'Analyze', 'Visualize', 'Insight'],
    accent: 'from-emerald-400/15 to-transparent',
  },
  {
    label: 'IT Operations',
    icon: Activity,
    steps: ['Issue', 'Diagnose', 'Isolate', 'Resolve', 'Document'],
    accent: 'from-violet-400/15 to-transparent',
  },
  {
    label: 'SAP / ERP',
    icon: Workflow,
    steps: ['Process', 'Trace', 'Connect', 'Support', 'Optimize'],
    accent: 'from-amber-400/15 to-transparent',
  },
]

export function Domains() {
  return (
    <section className="relative px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-slate-400">
          <span className="inline-block h-px w-10 bg-slate-500" />
          Operational flow
        </div>

        <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
          {flows.map(({ label, icon: Icon, steps, accent }) => (
            <article
              key={label}
              className="relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-gradient-to-b from-white/4 to-white/2 p-5 backdrop-blur-xl"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${accent}`} />
              <div className="relative">
                <div className="mb-5 inline-flex rounded-xl border border-white/10 bg-slate-900/60 p-3">
                  <Icon className="h-5 w-5 text-sky-200" />
                </div>

                <h3 className="mb-4 text-xl font-medium text-white">{label}</h3>

                <div className="space-y-2">
                  {steps.map((step, index) => (
                    <div key={step} className="flex items-center gap-3 text-sm text-slate-300">
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/10 bg-slate-900/60 text-[10px] text-slate-200">
                        {index + 1}
                      </span>
                      {step}
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
