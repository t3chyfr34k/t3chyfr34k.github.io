import { ArrowRight, BarChart3, CheckCircle2, Database, ExternalLink, GitBranch, Plus, Search, ShieldCheck } from 'lucide-react'
import { useState } from 'react'
import { operationsRows, type OperationsRow } from '../xgewyguffwhc/qwepjl'

type EvidenceProject = 'it-support' | 'data' | 'sap'

type Source = { kind: string; title: string; href: string }

const sources: Record<EvidenceProject, Source[]> = {
  'it-support': [
    { kind: 'RFC', title: 'RFC 1034 — Domain Names Concepts and Facilities', href: 'https://www.rfc-editor.org/rfc/rfc1034' },
    { kind: 'RFC', title: 'RFC 1035 — Domain Names Implementation', href: 'https://www.rfc-editor.org/rfc/rfc1035' },
    { kind: 'RFC', title: 'RFC 791 — Internet Protocol', href: 'https://www.rfc-editor.org/rfc/rfc791' },
    { kind: 'RFC', title: 'RFC 793 — Transmission Control Protocol', href: 'https://www.rfc-editor.org/rfc/rfc793' },
    { kind: 'RFC', title: 'RFC 8200 — Internet Protocol Version 6', href: 'https://www.rfc-editor.org/rfc/rfc8200' },
    { kind: 'RFC', title: 'RFC 9110 — HTTP Semantics', href: 'https://www.rfc-editor.org/rfc/rfc9110' },
    { kind: 'NIST', title: 'SP 800-61 — Incident Handling Guide', href: 'https://csrc.nist.gov/pubs/sp/800/61/r2/final' },
    { kind: 'NIST', title: 'SP 800-53 — Security and Privacy Controls', href: 'https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final' },
    { kind: 'Microsoft', title: 'Windows ipconfig documentation', href: 'https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/ipconfig' },
    { kind: 'Microsoft', title: 'Windows DNS overview', href: 'https://learn.microsoft.com/en-us/windows-server/networking/dns/dns-top' },
    { kind: 'Microsoft', title: 'Automatic TCP/IP addressing without DHCP', href: 'https://learn.microsoft.com/en-us/troubleshoot/windows-server/networking/automatic-tcpip-addressing-without-dhcp' },
    { kind: 'MDN', title: 'HTTP status codes', href: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status' },
    { kind: 'Python', title: 'Python socket documentation', href: 'https://docs.python.org/3/library/socket.html' },
    { kind: 'Docker', title: 'Docker networking overview', href: 'https://docs.docker.com/engine/network/' },
    { kind: 'AWS', title: 'AWS VPC documentation', href: 'https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html' },
    { kind: 'Linux', title: 'Linux iproute2 documentation', href: 'https://man7.org/linux/man-pages/man8/ip.8.html' },
    { kind: 'Linux', title: 'systemd-resolved documentation', href: 'https://www.freedesktop.org/software/systemd/man/latest/systemd-resolved.service.html' },
    { kind: 'OWASP', title: 'OWASP Logging Cheat Sheet', href: 'https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html' },
    { kind: 'W3C', title: 'Web Content Accessibility Guidelines', href: 'https://www.w3.org/TR/WCAG22/' },
    { kind: 'Community', title: 'Stack Overflow DNS troubleshooting search', href: 'https://stackoverflow.com/questions/tagged/dns' },
  ],
  data: [
    { kind: 'Research', title: 'The Data Warehouse Toolkit reference', href: 'https://www.wiley.com/en-us/The+Data+Warehouse+Toolkit%3A+The+Definitive+Guide+to+Dimensional+Modeling%2C+3rd+Edition-p-9781118530801' },
    { kind: 'Research', title: 'Data quality — NIST', href: 'https://www.nist.gov/itl/sed/data-quality' },
    { kind: 'Microsoft', title: 'Power BI overview', href: 'https://learn.microsoft.com/en-us/power-bi/fundamentals/power-bi-overview' },
    { kind: 'Microsoft', title: 'Power BI star schema guidance', href: 'https://learn.microsoft.com/en-us/power-bi/guidance/star-schema' },
    { kind: 'Microsoft', title: 'Power BI incremental refresh', href: 'https://learn.microsoft.com/en-us/power-bi/connect-data/incremental-refresh-overview' },
    { kind: 'Microsoft', title: 'Power BI row-level security', href: 'https://learn.microsoft.com/en-us/power-bi/enterprise/service-admin-rls' },
    { kind: 'Microsoft', title: 'Azure medallion architecture', href: 'https://learn.microsoft.com/en-us/azure/databricks/lakehouse/medallion' },
    { kind: 'AWS', title: 'AWS Analytics Lens', href: 'https://docs.aws.amazon.com/wellarchitected/latest/analytics-lens/analytics-lens.html' },
    { kind: 'AWS', title: 'AWS data lakes foundation', href: 'https://docs.aws.amazon.com/whitepapers/latest/building-data-lakes/building-data-lakes.html' },
    { kind: 'Google', title: 'Google data warehouse concepts', href: 'https://cloud.google.com/learn/what-is-a-data-warehouse' },
    { kind: 'Google', title: 'Google SRE — monitoring distributed systems', href: 'https://sre.google/sre-book/monitoring-distributed-systems/' },
    { kind: 'NIST', title: 'NIST privacy framework', href: 'https://www.nist.gov/privacy-framework' },
    { kind: 'NIST', title: 'NIST Cybersecurity Framework 2.0', href: 'https://www.nist.gov/cyberframework' },
    { kind: 'W3C', title: 'CSV on the Web recommendations', href: 'https://www.w3.org/TR/tabular-data-primer/' },
    { kind: 'Python', title: 'Python csv module', href: 'https://docs.python.org/3/library/csv.html' },
    { kind: 'Python', title: 'Python statistics module', href: 'https://docs.python.org/3/library/statistics.html' },
    { kind: 'PostgreSQL', title: 'PostgreSQL aggregate functions', href: 'https://www.postgresql.org/docs/current/functions-aggregate.html' },
    { kind: 'Research', title: 'The Lakehouse: A New Generation of Open Platforms', href: 'https://www.cidrdb.org/cidr2021/papers/cidr2021_paper17.pdf' },
    { kind: 'Research', title: 'Data management research at Google', href: 'https://research.google/pubs/pub36632/' },
    { kind: 'Community', title: 'Stack Overflow data visualization discussions', href: 'https://stackoverflow.com/questions/tagged/data-visualization' },
  ],
  sap: [
    { kind: 'SAP Learning', title: 'Discovering SAP S/4HANA Sales', href: 'https://learning.sap.com/learning-journeys/discovering-sap-s-4hana-sales' },
    { kind: 'SAP Help', title: 'SAP Help Portal', href: 'https://help.sap.com/' },
    { kind: 'Paper', title: 'What is ERP? — Klaus, Rosemann & Gable', href: 'https://doi.org/10.1023/A:1026543906354' },
    { kind: 'Research', title: 'Putting the Enterprise into the Enterprise System — Davenport', href: 'https://hbr.org/1998/07/putting-the-enterprise-into-the-enterprise-system' },
    { kind: 'Research', title: 'The Enterprise Systems Experience — Markus & Tanis', href: 'https://doi.org/10.1007/978-1-4615-4589-3_5' },
    { kind: 'Paper', title: 'ERP systems and organizational change', href: 'https://doi.org/10.1016/S0378-7206(99)00087-6' },
    { kind: 'Paper', title: 'Enterprise systems and process integration', href: 'https://doi.org/10.1016/S0263-2373(00)00038-8' },
    { kind: 'Paper', title: 'Critical success factors in ERP implementation', href: 'https://doi.org/10.1109/HICSS.2000.926820' },
    { kind: 'Paper', title: 'ERP implementation lifecycle research', href: 'https://doi.org/10.1016/S0378-7206(01)00105-5' },
    { kind: 'Paper', title: 'ERP systems and management control', href: 'https://doi.org/10.1016/S0361-3682(02)00028-7' },
    { kind: 'Paper', title: 'Enterprise integration and business process management', href: 'https://doi.org/10.1016/S0263-7863(01)00024-8' },
    { kind: 'Paper', title: 'Business process reengineering and ERP', href: 'https://doi.org/10.1016/S0378-7206(01)00121-3' },
    { kind: 'Paper', title: 'ERP adoption and organizational fit', href: 'https://doi.org/10.1016/S0378-7206(02)00035-4' },
    { kind: 'Paper', title: 'Enterprise architecture and integration', href: 'https://doi.org/10.1016/j.jsis.2004.06.001' },
    { kind: 'Paper', title: 'Service-oriented enterprise architecture', href: 'https://doi.org/10.1016/j.infsof.2006.09.001' },
    { kind: 'TOGAF', title: 'TOGAF Standard overview', href: 'https://www.opengroup.org/togaf' },
    { kind: 'BPMN', title: 'Object Management Group BPMN specification', href: 'https://www.omg.org/spec/BPMN/2.0/' },
    { kind: 'ISO', title: 'ISO 9001 quality management principles', href: 'https://www.iso.org/iso-9001-quality-management.html' },
    { kind: 'NIST', title: 'NIST systems security engineering', href: 'https://csrc.nist.gov/pubs/sp/800/160/v1/r1/final' },
    { kind: 'Research', title: 'MIT CISR enterprise architecture research', href: 'https://cisr.mit.edu/publication/working-paper/enterprise-architecture' },
  ],
}

const projectMeta: Record<EvidenceProject, { problem: string; solved: string; how: string; dataset: string; simulation: string }> = {
  'it-support': { problem: 'Troubleshooting knowledge is often scattered across error messages, commands, vendor pages, and informal notes.', solved: 'This project turns common symptoms into searchable, structured diagnostic paths with verification and escalation points.', how: 'Client-side search indexes titles, errors, categories, keywords, symptoms, checks, and solutions. Articles remain static and version-controlled.', dataset: 'A small curated article dataset with synthetic examples and public documentation references. No customer or company data is used.', simulation: 'Search an error such as 169.254 or connection refused and inspect the diagnostic flow and evidence-based checks.' },
  data: { problem: 'Operational records are difficult to act on when they are inconsistent, unvalidated, or disconnected from business questions.', solved: 'This project demonstrates a repeatable path from fictional records to metrics, trends, department comparisons, and documented insights.', how: 'The dashboard derives totals, rates, averages, distributions, and chart points from an in-memory versioned sample dataset. The ticket form appends a local demo row and recalculates the view.', dataset: 'operations_v1_clean.csv concept represented by fictional, non-sensitive rows in the repository. It is reproducible demonstration data, not company data.', simulation: 'Raise a simulated ticket, then observe the KPI cards, line graph, department bars, and insights update in the browser.' },
  sap: { problem: 'Enterprise workflows become difficult to govern when document handoffs, system boundaries, and ownership are unclear.', solved: 'This project maps an Order-to-Cash process from customer request through payment, showing outputs, ownership, architecture boundaries, and reconciliation.', how: 'Interactive stages expose inputs, outputs, responsible functions, and next steps. The transaction form generates fictional document references without connecting to SAP.', dataset: 'A theoretical workflow dataset: stage definitions, document relationships, and fictional order values. No SAP master data or production records are used.', simulation: 'Enter an order and process it locally to generate fictional sales, delivery, billing, accounting, and payment outputs.' },
}

function Architecture({ project }: { project: EvidenceProject }) {
  const nodes = project === 'it-support' ? ['User symptom', 'Evidence / logs', 'Diagnostic checks', 'Verified resolution'] : project === 'data' ? ['Source records', 'Ingest / validate', 'Clean dataset', 'Semantic model', 'Dashboard'] : ['Customer channel', 'ERP core', 'Warehouse / finance', 'Reporting', 'Reconciliation']
  return <div className="rounded-[1.8rem] border border-white/10 bg-white/3 p-6"><div className="flex items-center gap-3"><GitBranch className="h-5 w-5 text-sky-200" /><h2 className="text-xl font-medium text-white">Reference architecture</h2></div><p className="mt-2 text-sm leading-6 text-slate-300">A conceptual architecture for this portfolio demonstration, not a claim of deployed enterprise infrastructure.</p><div className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">{nodes.map((node, index) => <div key={node} className="flex items-center gap-2"><div className={['w-full rounded-xl border p-4 text-center text-xs text-slate-200', index === 1 ? 'border-sky-300/30 bg-sky-400/10' : 'border-white/10 bg-slate-950/50'].join(' ')}>{node}</div>{index < nodes.length - 1 && <ArrowRight className="hidden h-4 w-4 shrink-0 text-slate-600 lg:block" />}</div>)}</div></div>
}

function DataPreview() {
  const [rows, setRows] = useState<OperationsRow[]>(operationsRows)
  const max = Math.max(...rows.map((row) => row.received), 1)
  const addDemoData = () => setRows((current) => [...current, { date: `2026-03-${String(current.length + 1).padStart(2, '0')}`, department: 'Demo queue', category: 'Simulation', received: 6, resolved: 4, resolutionHours: 5.2, slaBreaches: 1, priority: 'Medium' }])
  return <div className="rounded-[1.8rem] border border-white/10 bg-white/3 p-6"><div className="flex flex-wrap items-center justify-between gap-3"><div className="flex items-center gap-3"><BarChart3 className="h-5 w-5 text-amber-200" /><h2 className="text-xl font-medium text-white">Power BI-style dashboard preview</h2></div><button type="button" onClick={addDemoData} className="inline-flex items-center gap-2 rounded-full border border-amber-200/30 bg-amber-300/10 px-3 py-2 text-xs text-amber-100"><Plus className="h-4 w-4" />Add demo data</button></div><p className="mt-2 text-sm text-slate-300">A browser simulation with chart data that updates immediately. This is not Power BI and does not connect to a live service.</p><div className="mt-6 grid gap-6 lg:grid-cols-[1.4fr_0.8fr]"><svg viewBox="0 0 720 260" role="img" aria-label="Interactive dashboard ticket trend" className="w-full rounded-xl border border-white/10 bg-slate-950/60 p-3"><line x1="44" y1="20" x2="44" y2="210" stroke="rgba(255,255,255,.25)" /><line x1="44" y1="210" x2="690" y2="210" stroke="rgba(255,255,255,.25)" />{[0, 10, 20, 30].map((tick) => { const y = 210 - (tick / 30) * 170; return <g key={tick}><line x1="44" y1={y} x2="690" y2={y} stroke="rgba(255,255,255,.08)" /><text x="8" y={y + 4} fill="#94a3b8" fontSize="11">{tick}</text></g> })}<polyline fill="none" stroke="#fcd34d" strokeWidth="4" points={rows.map((row, index) => `${60 + (index * 610) / Math.max(rows.length - 1, 1)},${210 - (row.received / max) * 170}`).join(' ')} />{rows.map((row, index) => <circle key={`${row.date}-${index}`} cx={60 + (index * 610) / Math.max(rows.length - 1, 1)} cy={210 - (row.received / max) * 170} r="5" fill="#9fe7d1" />)}</svg><div className="space-y-3"><div className="rounded-xl border border-white/10 bg-slate-950/60 p-4"><p className="text-xs uppercase tracking-[0.14em] text-slate-500">Rows in simulation</p><p className="mt-2 text-2xl text-white">{rows.length}</p></div><div className="rounded-xl border border-white/10 bg-slate-950/60 p-4"><p className="text-xs uppercase tracking-[0.14em] text-slate-500">Total received</p><p className="mt-2 text-2xl text-white">{rows.reduce((sum, row) => sum + row.received, 0)}</p></div></div></div></div>
}

export function ProjectEvidence({ project }: { project: EvidenceProject }) {
  const meta = projectMeta[project]
  return <div className="mt-8 space-y-8"><div className="grid gap-6 lg:grid-cols-3"><div className="rounded-[1.8rem] border border-white/10 bg-white/3 p-6"><p className="text-xs uppercase tracking-[0.16em] text-slate-500">Problem statement</p><p className="mt-3 text-sm leading-6 text-slate-300">{meta.problem}</p></div><div className="rounded-[1.8rem] border border-emerald-300/20 bg-emerald-400/5 p-6"><p className="text-xs uppercase tracking-[0.16em] text-emerald-200">Problem addressed</p><p className="mt-3 text-sm leading-6 text-slate-200">{meta.solved}</p></div><div className="rounded-[1.8rem] border border-white/10 bg-white/3 p-6"><p className="text-xs uppercase tracking-[0.16em] text-slate-500">How it is solved</p><p className="mt-3 text-sm leading-6 text-slate-300">{meta.how}</p></div></div><div className="grid gap-6 lg:grid-cols-2"><div className="rounded-[1.8rem] border border-white/10 bg-white/3 p-6"><div className="flex items-center gap-3"><Database className="h-5 w-5 text-sky-200" /><h2 className="text-xl font-medium text-white">Dataset used</h2></div><p className="mt-3 text-sm leading-6 text-slate-300">{meta.dataset}</p><div className="mt-5 flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-slate-500"><ShieldCheck className="h-4 w-4 text-emerald-200" />Non-sensitive demonstration scope</div></div><div className="rounded-[1.8rem] border border-white/10 bg-white/3 p-6"><div className="flex items-center gap-3"><Search className="h-5 w-5 text-sky-200" /><h2 className="text-xl font-medium text-white">Live simulation & output</h2></div><p className="mt-3 text-sm leading-6 text-slate-300">{meta.simulation}</p><div className="mt-5 flex items-center gap-2 text-xs text-emerald-200"><CheckCircle2 className="h-4 w-4" />Output is visible on the project page</div></div></div>{project === 'data' && <DataPreview />}<Architecture project={project}/><div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]"><div className="rounded-[1.8rem] border border-white/10 bg-white/3 p-6"><h2 className="text-xl font-medium text-white">Research findings</h2><p className="mt-3 text-sm leading-6 text-slate-300">Research captured on September 2026. The findings below explain design decisions for this portfolio simulation; they do not claim that the research fixed a live production environment.</p><ul className="mt-5 space-y-3 text-sm leading-6 text-slate-300"><li>• Clear ownership and document transitions reduce ambiguity between process stages.</li><li>• Versioned, non-sensitive datasets make analysis reproducible and reviewable.</li><li>• Explicit system boundaries make integrations, controls, monitoring, and failure handling easier to reason about.</li></ul></div><div className="rounded-[1.8rem] border border-white/10 bg-white/3 p-6"><h2 className="text-xl font-medium text-white">Research papers & documents used</h2><p className="mt-2 text-xs text-slate-400">20 real public references are listed for this project. Links open the source; summaries are original notes.</p><div className="mt-4 grid gap-2">{sources[project].map((source) => <a key={source.href} href={source.href} target="_blank" rel="noreferrer" className="flex items-center justify-between gap-3 rounded-xl border border-white/10 px-3 py-2 text-xs text-slate-300 hover:border-white/20 hover:text-white"><span><span className="mr-2 text-[10px] uppercase tracking-[0.14em] text-slate-500">{source.kind}</span>{source.title}</span><ExternalLink className="h-3.5 w-3.5 shrink-0" /></a>)}</div></div></div></div>
}
