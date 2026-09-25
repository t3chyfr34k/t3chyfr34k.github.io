import { ArrowRight, CheckCircle2, ExternalLink, Play, ServerCog } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { workflowStages, type WorkflowStage } from '../xgewyguffwhc/qwepjl'

const researchLinks = [
  {
    type: 'SAP Learning',
    title: 'Discovering SAP S/4HANA Sales',
    summary: 'Public SAP learning material covering sales processes and the connected Order-to-Cash flow.',
    href: 'https://learning.sap.com/learning-journeys/discovering-sap-s-4hana-sales',
  },
  {
    type: 'Academic Paper',
    title: 'What is ERP?',
    summary: 'Klaus, Rosemann, and Gable discuss the scope and defining characteristics of enterprise resource planning systems.',
    href: 'https://doi.org/10.1023/A:1026543906354',
  },
  {
    type: 'Academic Research',
    title: 'Putting the Enterprise into the Enterprise System',
    summary: 'Davenport examines how enterprise systems connect organizational processes, data, and operating models.',
    href: 'https://hbr.org/1998/07/putting-the-enterprise-into-the-enterprise-system',
  },
  {
    type: 'Academic Research',
    title: 'The Enterprise Systems Experience',
    summary: 'Markus and Tanis provide a lifecycle perspective for understanding enterprise-system adoption and value.',
    href: 'https://doi.org/10.1007/978-1-4615-4589-3_5',
  },
  {
    type: 'SAP Help',
    title: 'SAP Help Portal',
    summary: 'Official SAP product and process documentation for validating terminology and system context.',
    href: 'https://help.sap.com/',
  },
]

type OrderForm = {
  customer: string
  material: string
  quantity: string
  plant: string
}

export function ERPWorkflowPage() {
  const [selectedStage, setSelectedStage] = useState<WorkflowStage>(workflowStages[1])
  const [order, setOrder] = useState<OrderForm>({ customer: 'Demo customer', material: 'Finished product A', quantity: '10', plant: 'Main distribution plant' })
  const [processedOrder, setProcessedOrder] = useState<OrderForm | null>(null)

  const processOrder = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setProcessedOrder(order)
  }

  return <div className="space-y-8">
    <div className="rounded-[1.8rem] border border-amber-200/30 bg-amber-300/5 p-5 text-sm leading-6 text-amber-50"><strong>Theoretical / Portfolio Implementation.</strong> This page demonstrates enterprise workflow and architecture concepts. It is not an actual SAP production deployment and does not connect to SAP.</div>

    <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      <form onSubmit={processOrder} className="rounded-[1.8rem] border border-white/10 bg-white/3 p-6 backdrop-blur-xl"><div className="flex items-center gap-3"><Play className="h-5 w-5 text-emerald-200" /><h2 className="text-xl font-medium text-white">Simulate an order</h2></div><p className="mt-2 text-sm leading-6 text-slate-300">Enter fictional values to trace a simplified Order-to-Cash process in this browser-only demonstration.</p>{[['customer', 'Customer'], ['material', 'Material / Service'], ['quantity', 'Quantity'], ['plant', 'Plant / Fulfillment location']].map(([field, label]) => <label key={field} className="mt-4 block text-xs uppercase tracking-[0.16em] text-slate-500">{label}<input value={order[field as keyof OrderForm]} onChange={(event) => setOrder({ ...order, [field]: event.target.value })} type={field === 'quantity' ? 'number' : 'text'} min={field === 'quantity' ? '1' : undefined} className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/80 px-3 py-2.5 text-sm normal-case tracking-normal text-white outline-none focus:border-sky-300/60" /></label>)}<button type="submit" className="mt-5 inline-flex items-center gap-2 rounded-full border border-emerald-300/40 bg-emerald-400/10 px-4 py-2.5 text-sm text-emerald-100 transition hover:bg-emerald-400/20">Process simulated order <ArrowRight className="h-4 w-4" /></button>{processedOrder && <div className="mt-5 rounded-xl border border-emerald-300/20 bg-emerald-400/5 p-4 text-sm text-emerald-100"><div className="flex items-center gap-2 font-medium"><CheckCircle2 className="h-4 w-4" /> Simulation complete</div><p className="mt-2 text-xs leading-5 text-emerald-100/80">Demo order for {processedOrder.quantity} × {processedOrder.material} at {processedOrder.plant}. No external system was changed.</p></div>}</form>

      <div className="rounded-[1.8rem] border border-white/10 bg-white/3 p-6 backdrop-blur-xl"><div className="flex items-center gap-3"><ServerCog className="h-5 w-5 text-sky-200" /><h2 className="text-xl font-medium text-white">Order-to-Cash workflow</h2></div><div className="mt-6 flex flex-wrap items-center gap-2">{workflowStages.map((stage, index) => <span key={stage.name} className="flex items-center gap-2"><button type="button" onClick={() => setSelectedStage(stage)} className={['rounded-full border px-3 py-2 text-sm transition', selectedStage.name === stage.name ? 'border-sky-300/60 bg-sky-400/10 text-white' : 'border-white/10 bg-slate-950/50 text-slate-300 hover:border-white/20'].join(' ')}>{stage.name}</button>{index < workflowStages.length - 1 && <ArrowRight className="h-4 w-4 text-slate-600" />}</span>)}</div><div className="mt-8 border-t border-white/10 pt-6"><p className="text-xs uppercase tracking-[0.16em] text-slate-500">Selected stage</p><h3 className="mt-2 text-2xl font-medium text-white">{selectedStage.name}</h3><p className="mt-2 text-sm leading-6 text-slate-300">{selectedStage.purpose}</p><div className="mt-5 grid gap-4 sm:grid-cols-2">{[['Input', selectedStage.input], ['Output', selectedStage.output], ['Responsible function', selectedStage.responsible], ['System / data', selectedStage.systemData], ['Next step', selectedStage.next]].map(([label, value]) => <div key={label}><p className="text-xs uppercase tracking-[0.14em] text-slate-500">{label}</p><p className="mt-1 text-sm text-slate-200">{value}</p></div>)}</div></div></div>
    </div>

    <div className="rounded-[1.8rem] border border-white/10 bg-white/3 p-6 backdrop-blur-xl"><h2 className="text-xl font-medium text-white">Reference enterprise architecture</h2><p className="mt-2 max-w-3xl text-sm leading-6 text-slate-300">A conceptual integration view showing where business functions and data responsibilities connect. It is an architecture reference, not a claim of deployed infrastructure.</p><div className="mt-6 grid gap-3 text-center text-sm text-slate-200 sm:grid-cols-5"><div className="rounded-xl border border-white/10 bg-slate-950/60 p-4 sm:col-span-5">Customer / Sales Channel</div><div className="rounded-xl border border-sky-300/30 bg-sky-400/10 p-4 sm:col-span-5">ERP / SAP Core<br /><span className="text-xs text-slate-300">Sales · Inventory · Billing · Finance integration</span></div><div className="rounded-xl border border-white/10 bg-slate-950/60 p-4">Warehouse</div><div className="rounded-xl border border-white/10 bg-slate-950/60 p-4">Finance</div><div className="rounded-xl border border-white/10 bg-slate-950/60 p-4">Reporting</div><div className="rounded-xl border border-white/10 bg-slate-950/60 p-4">Integration / APIs</div><div className="rounded-xl border border-emerald-300/30 bg-emerald-400/10 p-4 sm:col-span-5">Payment / Reconciliation</div></div><div className="mt-6 grid gap-4 sm:grid-cols-3"><div><p className="text-xs uppercase tracking-[0.14em] text-slate-500">System boundary</p><p className="mt-2 text-sm leading-6 text-slate-300">Transactional ERP data should be separated from reporting and external integration concerns.</p></div><div><p className="text-xs uppercase tracking-[0.14em] text-slate-500">Controls</p><p className="mt-2 text-sm leading-6 text-slate-300">Production designs require identity, authorization, audit trails, validation, and failure handling.</p></div><div><p className="text-xs uppercase tracking-[0.14em] text-slate-500">Integration</p><p className="mt-2 text-sm leading-6 text-slate-300">Interfaces should define ownership, contracts, retries, monitoring, and reconciliation.</p></div></div></div>

    <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]"><div className="rounded-[1.8rem] border border-white/10 bg-white/3 p-6"><h2 className="text-xl font-medium text-white">Research notes</h2><p className="mt-3 text-sm leading-6 text-slate-300">Research captured on September 2026. The page uses public sources to frame the workflow and architecture; it does not claim implementation experience.</p><ul className="mt-5 space-y-3 text-sm leading-6 text-slate-300"><li>• Order-to-Cash connects order handling, fulfillment, invoicing, accounting, and payment activities.</li><li>• ERP research emphasizes process integration, shared data, lifecycle governance, and organizational context.</li><li>• Architecture decisions should make system boundaries, ownership, controls, and integration contracts explicit.</li></ul></div><div className="rounded-[1.8rem] border border-white/10 bg-white/3 p-6"><h2 className="text-xl font-medium text-white">Research & real references</h2><div className="mt-4 space-y-3">{researchLinks.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="flex items-start justify-between gap-4 rounded-xl border border-white/10 p-3 text-sm text-slate-300 transition hover:border-white/20 hover:text-white"><span><span className="block text-[10px] uppercase tracking-[0.16em] text-slate-500">{link.type}</span><span className="mt-1 block font-medium">{link.title}</span><span className="mt-1 block text-xs leading-5 text-slate-400">{link.summary}</span></span><ExternalLink className="mt-1 h-4 w-4 shrink-0" /></a>)}</div></div></div>
  </div>
}
