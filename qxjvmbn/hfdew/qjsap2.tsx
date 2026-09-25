import { ArrowRight, CheckCircle2, ExternalLink, Play, ServerCog } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { workflowStages, type WorkflowStage } from '../xgewyguffwhc/qwepjl'

const references = [
  ['SAP Learning', 'Discovering SAP S/4HANA Sales', 'https://learning.sap.com/learning-journeys/discovering-sap-s-4hana-sales'],
  ['Academic Paper', 'What is ERP? Klaus, Rosemann & Gable', 'https://doi.org/10.1023/A:1026543906354'],
  ['Academic Research', 'Putting the Enterprise into the Enterprise System — Davenport', 'https://hbr.org/1998/07/putting-the-enterprise-into-the-enterprise-system'],
  ['Academic Research', 'The Enterprise Systems Experience — Markus & Tanis', 'https://doi.org/10.1007/978-1-4615-4589-3_5'],
  ['SAP Help', 'Official SAP Help Portal', 'https://help.sap.com/'],
] as const

type Order = { customer: string; material: string; quantity: string; plant: string }

export function ERPWorkflowDetailed() {
  const [selectedStage, setSelectedStage] = useState<WorkflowStage>(workflowStages[1])
  const [order, setOrder] = useState<Order>({ customer: 'Demo customer', material: 'Finished product A', quantity: '10', plant: 'Main distribution plant' })
  const [processedOrder, setProcessedOrder] = useState<Order | null>(null)

  const processOrder = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setProcessedOrder({ ...order })
  }

  const outputs = processedOrder ? [
    ['Sales Order', `SO-${processedOrder.quantity}-001`, 'Commercial request recorded'],
    ['Availability Check', 'ATP-CHECK-001', `Requested quantity checked for ${processedOrder.plant}`],
    ['Delivery', 'DEL-001', 'Fulfillment document prepared'],
    ['Goods Issue', 'GI-001', 'Inventory movement simulated'],
    ['Billing', 'BILL-001', 'Invoice document simulated'],
    ['Accounting', 'FI-001', 'Receivable entry simulated'],
    ['Payment', 'PAY-001', 'Clearing step represented'],
  ] : []

  return <div className="space-y-8">
    <div className="rounded-[1.8rem] border border-amber-200/30 bg-amber-300/5 p-5 text-sm leading-6 text-amber-50"><strong>Theoretical / Portfolio Implementation.</strong> This is a browser-only simulation. It does not connect to SAP, create real documents, change inventory, charge money, or solve a live production incident.</div>

    <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
      <form onSubmit={processOrder} className="rounded-[1.8rem] border border-white/10 bg-white/3 p-6"><div className="flex items-center gap-3"><Play className="h-5 w-5 text-emerald-200" /><h2 className="text-xl font-medium text-white">Run a demo transaction</h2></div><p className="mt-2 text-sm leading-6 text-slate-300">Enter fictional values and process a simplified Order-to-Cash flow.</p>{[['customer', 'Customer'], ['material', 'Material / Service'], ['quantity', 'Quantity'], ['plant', 'Plant / Fulfillment location']].map(([field, label]) => <label key={field} className="mt-4 block text-xs uppercase tracking-[0.16em] text-slate-500">{label}<input required value={order[field as keyof Order]} onChange={(event) => setOrder({ ...order, [field]: event.target.value })} type={field === 'quantity' ? 'number' : 'text'} min={field === 'quantity' ? '1' : undefined} className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/80 px-3 py-2.5 text-sm normal-case tracking-normal text-white outline-none focus:border-sky-300/60" /></label>)}<button type="submit" className="mt-5 inline-flex items-center gap-2 rounded-full border border-emerald-300/40 bg-emerald-400/10 px-4 py-2.5 text-sm text-emerald-100 transition hover:bg-emerald-400/20">Process order <ArrowRight className="h-4 w-4" /></button></form>

      <div className="rounded-[1.8rem] border border-white/10 bg-white/3 p-6"><div className="flex items-center gap-3"><ServerCog className="h-5 w-5 text-sky-200" /><h2 className="text-xl font-medium text-white">Interactive process map</h2></div><div className="mt-6 flex flex-wrap items-center gap-2">{workflowStages.map((stage, index) => <span key={stage.name} className="flex items-center gap-2"><button type="button" onClick={() => setSelectedStage(stage)} className={['rounded-full border px-3 py-2 text-sm transition', selectedStage.name === stage.name ? 'border-sky-300/60 bg-sky-400/10 text-white' : 'border-white/10 bg-slate-950/50 text-slate-300 hover:border-white/20'].join(' ')}>{stage.name}</button>{index < workflowStages.length - 1 && <ArrowRight className="h-4 w-4 text-slate-600" />}</span>)}</div><div className="mt-6 border-t border-white/10 pt-5"><p className="text-xs uppercase tracking-[0.16em] text-slate-500">Selected stage</p><h3 className="mt-2 text-2xl font-medium text-white">{selectedStage.name}</h3><p className="mt-2 text-sm leading-6 text-slate-300">{selectedStage.purpose}</p><div className="mt-4 grid gap-4 sm:grid-cols-2">{[['Input', selectedStage.input], ['Output', selectedStage.output], ['Responsible function', selectedStage.responsible], ['System / data', selectedStage.systemData], ['Next step', selectedStage.next]].map(([label, value]) => <div key={label}><p className="text-xs uppercase tracking-[0.14em] text-slate-500">{label}</p><p className="mt-1 text-sm text-slate-200">{value}</p></div>)}</div></div></div>
    </div>

    {processedOrder && <div className="rounded-[1.8rem] border border-emerald-300/20 bg-emerald-400/5 p-6"><div className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-emerald-200" /><h2 className="text-xl font-medium text-white">Simulation outputs</h2></div><p className="mt-2 text-sm leading-6 text-slate-300">Demo order for {processedOrder.quantity} × {processedOrder.material}, customer {processedOrder.customer}, at {processedOrder.plant}. These are fictional document references generated in the browser.</p><div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{outputs.map(([stage, documentId, result]) => <div key={stage} className="rounded-xl border border-white/10 bg-slate-950/50 p-4"><p className="text-xs uppercase tracking-[0.14em] text-slate-500">{stage}</p><p className="mt-2 font-mono text-sm text-emerald-100">{documentId}</p><p className="mt-2 text-xs leading-5 text-slate-400">{result}</p></div>)}</div></div>}

    <div className="rounded-[1.8rem] border border-white/10 bg-white/3 p-6"><h2 className="text-xl font-medium text-white">Reference enterprise architecture</h2><p className="mt-2 max-w-3xl text-sm leading-6 text-slate-300">A conceptual architecture based on public ERP research: transactional process, shared master data, integration boundaries, reporting, and financial reconciliation.</p><div className="mt-6 grid gap-3 text-center text-sm text-slate-200 sm:grid-cols-5"><div className="rounded-xl border border-white/10 bg-slate-950/60 p-4 sm:col-span-5">Customer / Sales Channel</div><div className="rounded-xl border border-sky-300/30 bg-sky-400/10 p-4 sm:col-span-5">ERP / SAP Core<br /><span className="text-xs text-slate-300">Sales · Inventory · Billing · Finance</span></div><div className="rounded-xl border border-white/10 bg-slate-950/60 p-4">Warehouse</div><div className="rounded-xl border border-white/10 bg-slate-950/60 p-4">Finance</div><div className="rounded-xl border border-white/10 bg-slate-950/60 p-4">Reporting</div><div className="rounded-xl border border-white/10 bg-slate-950/60 p-4">Integration / APIs</div><div className="rounded-xl border border-emerald-300/30 bg-emerald-400/10 p-4 sm:col-span-5">Payment / Reconciliation</div></div></div>

    <div className="grid gap-6 lg:grid-cols-2"><div className="rounded-[1.8rem] border border-white/10 bg-white/3 p-6"><h2 className="text-xl font-medium text-white">Problems addressed by the research</h2><p className="mt-3 text-xs leading-5 text-slate-500">These are design problems the research helps clarify. They are not claims of fixing a live organization.</p><div className="mt-5 space-y-4">{[['Disconnected process handoffs', 'The workflow makes ownership and the next document explicit at each stage.'], ['Unclear data ownership', 'The architecture separates transactional ERP data, reporting, warehouse, finance, and integration responsibilities.'], ['Weak transaction traceability', 'The simulation shows document outputs from order through payment and reconciliation.'], ['Billing and payment reconciliation gaps', 'The final stages connect billing, accounting, payment, and clearing as linked process steps.']].map(([problem, response]) => <div key={problem}><h3 className="text-sm font-medium text-white">{problem}</h3><p className="mt-1 text-sm leading-6 text-slate-300">{response}</p></div>)}</div></div><div className="rounded-[1.8rem] border border-white/10 bg-white/3 p-6"><h2 className="text-xl font-medium text-white">Research method & references</h2><p className="mt-3 text-sm leading-6 text-slate-300">Research captured on September 2026. Sources were reviewed for process terminology, ERP boundaries, lifecycle thinking, and architecture framing. The summaries below are original notes, not copied text.</p><div className="mt-5 space-y-3">{references.map(([type, title, href]) => <a key={href} href={href} target="_blank" rel="noreferrer" className="flex items-start justify-between gap-4 rounded-xl border border-white/10 p-3 text-sm text-slate-300 transition hover:border-white/20 hover:text-white"><span><span className="block text-[10px] uppercase tracking-[0.16em] text-slate-500">{type}</span><span className="mt-1 block font-medium">{title}</span></span><ExternalLink className="mt-1 h-4 w-4 shrink-0" /></a>)}</div></div></div>
  </div>
}
