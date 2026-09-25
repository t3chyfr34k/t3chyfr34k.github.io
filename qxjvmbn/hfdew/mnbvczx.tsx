import { ArrowRight, ArrowUpRight, ShieldCheck, Database, Cpu, BriefcaseBusiness } from 'lucide-react'
import profileImage from '/xjdhqwe.png'

const hasResume = false

const summaryPills = [
  'IT • SECURITY • DATA • ERP',
  'Systems + Security + Insights',
]

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pb-16 pt-28 sm:pt-32 lg:pt-36">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(98,127,181,0.18),transparent_30%),radial-gradient(circle_at_70%_30%,rgba(125,211,252,0.13),transparent_32%)]" />

      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div className="relative z-10">
          <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.28em] text-slate-300">
            {summaryPills[0]}
          </div>

          <h1 className="max-w-xl text-4xl font-medium tracking-[-0.06em] text-white sm:text-5xl lg:text-7xl">
            Building resilient systems, securing digital environments, and turning data into action.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
            I bring together support, security, analytics, and enterprise thinking to solve practical technology problems:
            troubleshooting systems, investigating alerts, analyzing data, and understanding the business processes behind
            the tools people rely on every day.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-slate-950 transition hover:bg-slate-200"
            >
              Explore My Work
              <ArrowRight className="h-4 w-4" />
            </a>
            {hasResume && (
              <a
                href="/resume.pdf"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:border-white/20 hover:bg-white/8"
              >
                View Resume
                <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
          </div>

          <div className="mt-10 flex flex-wrap gap-3 text-xs uppercase tracking-[0.22em] text-slate-300">
            {[
              { icon: ShieldCheck, label: 'Security' },
              { icon: Database, label: 'Data' },
              { icon: Cpu, label: 'IT' },
              { icon: BriefcaseBusiness, label: 'ERP' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2">
                <Icon className="h-3.5 w-3.5 text-emerald-200" />
                {label}
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[560px]">
            <div className="absolute inset-x-6 bottom-4 top-8 rounded-[32%] bg-[radial-gradient(circle,rgba(142,197,255,0.35),rgba(142,197,255,0.08)_28%,transparent_62%)] blur-3xl" />
            <div className="absolute inset-x-10 bottom-[-18px] top-[60px] rounded-[50%] border border-white/10 bg-white/4 backdrop-blur-sm" />

            <div className="relative mx-auto w-full max-w-[440px] rounded-[2.2rem] border border-white/10 bg-white/5 p-3 shadow-[0_30px_120px_rgba(15,23,42,0.8)] backdrop-blur-md">
              <div className="overflow-hidden rounded-[1.9rem] border border-white/10 bg-slate-950/70">
                <img
                  src={profileImage}
                  alt="Professional portrait"
                  className="h-[620px] w-full object-cover object-center sm:h-[680px]"
                />
              </div>
            </div>

            <div className="absolute -left-3 top-14 rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-slate-200 shadow-glow backdrop-blur-xl">
              <div className="text-[10px] uppercase tracking-[0.22em] text-slate-400">Systems</div>
              <div className="mt-2 font-medium">Support & troubleshooting</div>
            </div>
            <div className="absolute -right-1 bottom-20 rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-slate-200 shadow-glow backdrop-blur-xl">
              <div className="text-[10px] uppercase tracking-[0.22em] text-slate-400">Insight</div>
              <div className="mt-2 font-medium">Data + security context</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
