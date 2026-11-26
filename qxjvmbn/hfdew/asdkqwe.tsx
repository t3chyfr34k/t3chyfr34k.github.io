const labs = [
  ['SOC Lab', 'Placeholder for log review, investigation flow, and alert triage exercises.'],
  ['Network Troubleshooting Lab', 'Placeholder for connectivity, DNS, DHCP, and issue-isolation scenarios.'],
  ['Windows Administration Lab', 'Placeholder for system configuration, account operations, and support workflows.'],
  ['Data Analytics Lab', 'Placeholder for SQL, data cleaning, dashboard building, and analytical storytelling.'],
  ['SAP Learning Lab', 'Placeholder for ERP process mapping and enterprise workflow understanding.'],
]

export function Labs() {
  return <section id="labs" className="paper-section">
    <div className="paper-section-head"><p className="paper-kicker">04 · LAB NOTES</p><h2>Studies on the desk</h2><p className="paper-section-deck">Planned and developing exercises, shown here with their current scope.</p></div>
    <div className="paper-lab-grid">{labs.map(([title, description], index) => <article key={title}><span className="paper-lab-number">0{index + 1}</span><div><h3>{title}</h3><p>{description}</p></div></article>)}</div>
  </section>
}
