import { skillGroups } from '../xgewyguffwhc/plkjs'

export function Skills() {
  return <section id="skills" className="paper-section">
    <div className="paper-section-head"><h2>Technical focus</h2><p className="paper-section-deck">A developing toolkit across databases, cloud and server administration.</p></div>
    <div className="paper-skill-grid">{skillGroups.map((group, index) => <article key={group.title} className={[index === 0 ? 'paper-skill-feature' : '', group.title === 'Web / APIs / Productivity' ? 'paper-skill-web' : ''].filter(Boolean).join(' ')}><p className="paper-kicker">{index === 0 ? 'DATABASES' : index === 1 ? 'CLOUD & SERVER SYSTEMS' : 'RELATED SKILLS'}</p><h3>{group.title}</h3><p>{group.description}</p><p className="paper-skill-items">{group.items.join(' · ')}</p></article>)}</div>
  </section>
}
