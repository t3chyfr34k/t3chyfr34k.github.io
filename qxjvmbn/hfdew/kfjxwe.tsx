import { Shield, Database, Cpu, BriefcaseBusiness } from 'lucide-react'

const pillars = [
  {
    title: 'Systems',
    description: 'I understand how technology is built, supported, and maintained in real-world environments.',
    icon: Cpu,
  },
  {
    title: 'Security',
    description: 'I investigate alerts, review evidence, and translate technical signals into clear action.',
    icon: Shield,
  },
  {
    title: 'Data',
    description: 'I translate operational noise into usable insight through cleanup, analysis, and reporting.',
    icon: Database,
  },
  {
    title: 'Enterprise',
    description: 'I connect technical systems with business processes, workflows, and operational context.',
    icon: BriefcaseBusiness,
  },
]

export function About() {
  return (
    <section id="about" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-slate-400">
          <span className="inline-block h-px w-10 bg-slate-500" />
          01 — Introduction
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/3 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.26)] backdrop-blur-xl sm:p-8">
            <p className="text-lg leading-8 text-slate-200">
              I understand technology from the layer where users experience it to the layer where systems, alerts, and
              processes connect behind the scenes. My work sits at the intersection of support, security, analytics, and
              enterprise operations—where reliability, visibility, and business context matter equally.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {pillars.map(({ title, description, icon: Icon }) => (
              <article key={title} className="rounded-[1.6rem] border border-white/10 bg-white/3 p-5 backdrop-blur-xl transition hover:border-white/15 hover:bg-white/5">
                <div className="mb-4 inline-flex rounded-xl border border-white/10 bg-white/5 p-2.5">
                  <Icon className="h-5 w-5 text-emerald-200" />
                </div>
                <h3 className="mb-2 text-xl font-medium text-white">{title}</h3>
                <p className="text-sm leading-6 text-slate-300">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
