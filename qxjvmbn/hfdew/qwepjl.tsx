import { ArrowLeft, ArrowRight, ExternalLink, Search, ShieldCheck } from 'lucide-react'
import { useMemo, useState } from 'react'
import { operationsRows, portfolioProjects, troubleshootingArticles, workflowStages, type PortfolioProject, type TroubleshootingArticle, type WorkflowStage } from '../xgewyguffwhc/qwepjl'
import { findProjectBySlug, searchTroubleshootingArticles } from '../xgewyguffwhc/portfolioUtils.mjs'
import { OperationsDashboard } from './qjdata'
import { ERPWorkflowDetailed } from './qjsap2'
import { ProjectEvidence } from './qjevidence'

type ProjectDetailProps = {
  slug: string
}

const researchDate = 'September 2026'

function Header({ project }: { project: PortfolioProject }) {
  return (
    <div className="mb-10">
      <button
        type="button"
        onClick={() => {
          window.history.pushState({}, '', `${window.location.pathname}#projects`)
          window.dispatchEvent(new HashChangeEvent('hashchange'))
        }}
        className="inline-flex items-center gap-2 text-sm text-slate-300 transition hover:text-white"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to {project.category}
      </button>
      <div className="mt-6 text-xs uppercase tracking-[0.24em] text-slate-500">OpsLab / {project.category} / {project.title}</div>
      <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-400/10 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-emerald-100">
        <ShieldCheck className="h-3.5 w-3.5" />
        Demo / Portfolio Project
      </div>
      <h1 className="mt-5 max-w-4xl text-4xl font-medium tracking-[-0.05em] text-white sm:text-6xl">{project.title}</h1>
      <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300">{project.description}</p>
    </div>
  )
}

function ITSupportPage() {
  const [query, setQuery] = useState('')
  const [selectedArticle, setSelectedArticle] = useState<TroubleshootingArticle>(troubleshootingArticles[0])
  const matches = useMemo(() => {
    const normalized = query.trim().toLowerCase()
    if (!normalized) return troubleshootingArticles
    return searchTroubleshootingArticles(troubleshootingArticles, normalized)
  }, [query])

  return (
    <div className="space-y-8">
      <div className="rounded-[1.8rem] border border-white/10 bg-white/3 p-6 backdrop-blur-xl">
        <div className="flex items-center gap-3 text-slate-100"><Search className="h-5 w-5 text-sky-200" /><h2 className="text-xl font-medium">Search the knowledge base</h2></div>
        <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Try DNS_PROBE_FINISHED_NXDOMAIN, 169.254.x.x, or connection refused" className="mt-5 w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-sky-300/60" />
        <div className="mt-5 flex flex-wrap gap-2">
          {['Network', 'Windows', 'Linux', 'DNS', 'DHCP', 'HTTP / HTTPS', 'TCP/IP', 'VPN', 'APIs', 'Databases', 'Cloud'].map((category) => <span key={category} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300">{category}</span>)}
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr]">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{matches.length} documented problems</p>
          {matches.map((article) => <button type="button" key={article.title} onClick={() => setSelectedArticle(article)} className={['w-full rounded-2xl border p-4 text-left transition', selectedArticle.title === article.title ? 'border-sky-300/60 bg-sky-400/10' : 'border-white/10 bg-white/3 hover:border-white/20'].join(' ')}><p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">{article.category}</p><h3 className="mt-2 font-medium text-white">{article.title}</h3><p className="mt-1 text-xs text-slate-400">{article.errorMessage}</p></button>)}
        </div>
        <TroubleshootingArticleView article={selectedArticle} />
      </div>
    </div>
  )
}

function TroubleshootingArticleView({ article }: { article: TroubleshootingArticle }) {
  return <article className="rounded-[1.8rem] border border-white/10 bg-white/3 p-6 backdrop-blur-xl sm:p-8"><p className="text-xs uppercase tracking-[0.2em] text-slate-500">{article.category}</p><h2 className="mt-3 text-2xl font-medium text-white">{article.errorMessage}</h2><p className="mt-2 text-sm text-slate-300">{article.title}</p><div className="mt-8 grid gap-6 sm:grid-cols-2">{[['Symptoms', article.symptoms], ['Likely Causes', article.causes], ['Commands / Checks', article.checks], ['Possible Solutions', article.solutions]].map(([heading, items]) => <div key={heading as string}><h3 className="text-sm font-medium text-white">{heading as string}</h3><ul className="mt-3 space-y-2 text-sm leading-6 text-slate-300">{(items as string[]).map((item) => <li key={item}>• {item}</li>)}</ul></div>)}</div><div className="mt-8 rounded-2xl border border-white/10 bg-slate-950/40 p-4"><h3 className="text-sm font-medium text-white">Diagnostic Flow</h3><div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-slate-300">{article.diagnosticFlow.map((step, index) => <span key={step} className="inline-flex items-center gap-2">{index > 0 && <ArrowRight className="h-3 w-3 text-sky-200" />}<span className="rounded-full border border-white/10 px-2.5 py-1">{step}</span></span>)}</div></div><div className="mt-6 grid gap-4 sm:grid-cols-2"><div><h3 className="text-sm font-medium text-white">Verification</h3><p className="mt-2 text-sm leading-6 text-slate-300">{article.verification}</p></div><div><h3 className="text-sm font-medium text-white">When to Escalate</h3><p className="mt-2 text-sm leading-6 text-slate-300">{article.escalation}</p></div></div><div className="mt-8 border-t border-white/10 pt-6"><h3 className="text-sm font-medium text-white">Research & References</h3><p className="mt-2 text-xs text-slate-400">Research captured on {researchDate}. Sources reviewed are summarized, not copied.</p><div className="mt-4 space-y-2">{article.sources.map((source) => <a key={source.url} href={source.url} target="_blank" rel="noreferrer" className="flex items-center justify-between rounded-xl border border-white/10 px-3 py-2 text-sm text-slate-300 hover:text-white"><span><span className="mr-2 text-[10px] uppercase tracking-[0.16em] text-slate-500">{source.type}</span>{source.name}</span><ExternalLink className="h-4 w-4" /></a>)}</div></div></article>
}

export function DataPageLegacy() {
  const total = operationsRows.reduce((sum, row) => sum + row.received, 0)
  const resolved = operationsRows.reduce((sum, row) => sum + row.resolved, 0)
  const breaches = operationsRows.reduce((sum, row) => sum + row.slaBreaches, 0)
  const averageHours = operationsRows.reduce((sum, row) => sum + row.resolutionHours, 0) / operationsRows.length
  const highPriority = operationsRows.filter((row) => row.priority === 'High').reduce((sum, row) => sum + row.received, 0)
  const departments = [...new Set(operationsRows.map((row) => row.department))]
  return <div className="space-y-8"><div className="rounded-[1.8rem] border border-amber-200/20 bg-amber-300/5 p-5 text-sm text-amber-50"><strong>Fictional Demonstration Data.</strong> This versioned, reproducible dataset is not real company data.</div><div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">{[['Total Tickets', total], ['Resolution Rate', `${Math.round((resolved / total) * 100)}%`], ['Avg Resolution', `${averageHours.toFixed(1)}h`], ['SLA Breaches', breaches], ['High Priority', highPriority]].map(([label, value]) => <div key={label as string} className="rounded-2xl border border-white/10 bg-white/3 p-5"><p className="text-xs uppercase tracking-[0.16em] text-slate-500">{label as string}</p><p className="mt-3 text-3xl font-medium text-white">{value}</p></div>)}</div><div className="grid gap-6 lg:grid-cols-2"><div className="rounded-[1.8rem] border border-white/10 bg-white/3 p-6"><h2 className="text-xl font-medium text-white">Tickets over time</h2><div className="mt-6 flex h-44 items-end gap-3">{operationsRows.map((row) => <div key={row.date} className="flex flex-1 flex-col items-center gap-2"><div className="w-full rounded-t-lg bg-sky-300/70" style={{ height: `${(row.received / 30) * 100}%` }} /><span className="text-[10px] text-slate-500">{row.date.slice(5)}</span></div>)}</div></div><div className="rounded-[1.8rem] border border-white/10 bg-white/3 p-6"><h2 className="text-xl font-medium text-white">Department distribution</h2><div className="mt-6 space-y-4">{departments.map((department) => { const value = operationsRows.filter((row) => row.department === department).reduce((sum, row) => sum + row.received, 0); return <div key={department}><div className="flex justify-between text-sm text-slate-300"><span>{department}</span><span>{value} tickets</span></div><div className="mt-2 h-2 rounded-full bg-white/10"><div className="h-2 rounded-full bg-emerald-200" style={{ width: `${(value / total) * 100}%` }} /></div></div> })}</div></div></div><div className="rounded-[1.8rem] border border-white/10 bg-white/3 p-6"><h2 className="text-xl font-medium text-white">Power BI Version</h2><p className="mt-2 text-sm leading-6 text-slate-300">Placeholder for a future Power BI screenshot. The web dashboard is not Power BI.</p><div className="mt-5 flex min-h-32 items-center justify-center rounded-2xl border border-dashed border-white/15 bg-slate-950/40 text-xs uppercase tracking-[0.2em] text-slate-500">Power BI Dashboard Preview</div><p className="mt-5 text-xs uppercase tracking-[0.18em] text-slate-500">Clean Dataset → Import → Data Model → Measures → Visualizations → Dashboard</p></div><div className="rounded-[1.8rem] border border-white/10 bg-white/3 p-6"><h2 className="text-xl font-medium text-white">Operational Insights</h2><ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300"><li>• {departments.sort((a, b) => operationsRows.filter((row) => row.department === b).reduce((sum, row) => sum + row.received, 0) - operationsRows.filter((row) => row.department === a).reduce((sum, row) => sum + row.received, 0))[0]} receives the most tickets in this sample.</li><li>• The sample contains {breaches} SLA breaches across {operationsRows.length} weekly records.</li><li>• Network and DNS rows have the highest resolution times in this fictional dataset.</li></ul></div></div>
}

export function SAPPageLegacy() {
  const [selectedStage, setSelectedStage] = useState<WorkflowStage>(workflowStages[1])
  return <div className="space-y-8"><div className="rounded-[1.8rem] border border-amber-200/30 bg-amber-300/5 p-5 text-sm leading-6 text-amber-50"><strong>Theoretical / Portfolio Implementation.</strong> This project demonstrates understanding of enterprise workflow, system integration, and infrastructure architecture. It is not an actual SAP production deployment.</div><div className="rounded-[1.8rem] border border-white/10 bg-white/3 p-6 backdrop-blur-xl"><h2 className="text-xl font-medium text-white">Order-to-Cash workflow</h2><div className="mt-6 flex flex-wrap items-center gap-2">{workflowStages.map((stage, index) => <span key={stage.name} className="flex items-center gap-2"><button type="button" onClick={() => setSelectedStage(stage)} className={['rounded-full border px-3 py-2 text-sm transition', selectedStage.name === stage.name ? 'border-sky-300/60 bg-sky-400/10 text-white' : 'border-white/10 bg-slate-950/50 text-slate-300 hover:border-white/20'].join(' ')}>{stage.name}</button>{index < workflowStages.length - 1 && <ArrowRight className="h-4 w-4 text-slate-600" />}</span>)}</div></div><div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]"><div className="rounded-[1.8rem] border border-white/10 bg-white/3 p-6"><p className="text-xs uppercase tracking-[0.2em] text-slate-500">Selected stage</p><h2 className="mt-3 text-2xl font-medium text-white">{selectedStage.name}</h2><p className="mt-4 text-sm leading-6 text-slate-300">{selectedStage.purpose}</p></div><div className="rounded-[1.8rem] border border-white/10 bg-white/3 p-6"><div className="grid gap-5 sm:grid-cols-2">{[['Purpose', selectedStage.purpose], ['Input', selectedStage.input], ['Output', selectedStage.output], ['Responsible Function', selectedStage.responsible], ['System / Data', selectedStage.systemData], ['Next Step', selectedStage.next]].map(([label, value]) => <div key={label as string}><p className="text-xs uppercase tracking-[0.16em] text-slate-500">{label as string}</p><p className="mt-2 text-sm leading-6 text-slate-200">{value as string}</p></div>)}</div></div></div><div className="rounded-[1.8rem] border border-white/10 bg-white/3 p-6"><h2 className="text-xl font-medium text-white">Reference Enterprise Architecture</h2><div className="mt-6 grid gap-3 text-center text-sm text-slate-200 sm:grid-cols-3"><div className="rounded-xl border border-white/10 bg-slate-950/50 p-4 sm:col-span-3">Customer → Sales Channel</div><div className="rounded-xl border border-sky-300/30 bg-sky-400/10 p-4 sm:col-span-3">ERP / SAP: Sales · Inventory · Billing</div><div className="rounded-xl border border-white/10 bg-slate-950/50 p-4">Warehouse</div><div className="rounded-xl border border-white/10 bg-slate-950/50 p-4">Finance</div><div className="rounded-xl border border-white/10 bg-slate-950/50 p-4">Reporting</div><div className="rounded-xl border border-emerald-300/30 bg-emerald-400/10 p-4 sm:col-span-3">Payment</div></div></div><p className="text-xs leading-5 text-slate-500">Workflow framing is based on public SAP order-to-cash learning material and is presented as a conceptual architecture, not an implementation claim.</p></div>
}

export function ProjectDetail({ slug }: ProjectDetailProps) {
  const project = findProjectBySlug(portfolioProjects, slug)
  if (!project) return <main className="min-h-[70vh] px-4 pb-24 pt-32 sm:px-6 lg:px-8"><div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-12"><p className="text-xs uppercase tracking-[0.24em] text-slate-400">404 · Project not found</p><h1 className="mt-4 text-3xl font-medium tracking-tight text-white sm:text-5xl">This project does not exist.</h1><p className="mt-4 max-w-xl text-sm leading-6 text-slate-300">The link may be outdated or the project may have moved.</p><a href="#projects" className="mt-7 inline-flex rounded-full bg-white px-5 py-3 text-sm font-medium text-slate-950 transition hover:bg-slate-200">Back to projects</a></div></main>
  return <main className="min-h-screen px-4 pb-24 pt-28 sm:px-6 lg:px-8"><div className="mx-auto max-w-6xl"><Header project={project} />{slug === 'it-support' && <ITSupportPage />}{slug === 'data' && <OperationsDashboard />}{slug === 'sap' && <ERPWorkflowDetailed />}<ProjectEvidence project={project.slug as 'it-support' | 'data' | 'sap'} /></div></main>
}
