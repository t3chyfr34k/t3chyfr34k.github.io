import { portfolioProjects } from '../xgewyguffwhc/qwepjl'

type ProjectsProps = { onOpenProject: (slug: string) => void }

export function Projects({ onOpenProject }: ProjectsProps) {
  const lead = portfolioProjects[0]
  const stories = portfolioProjects.slice(1)
  return <section id="projects" className="paper-section paper-projects">
    <div className="paper-section-head"><p className="paper-kicker">03 · PROJECTS &amp; REPORTS</p><h2>Work in progress, made tangible.</h2><p className="paper-section-deck">Four focused explorations in data, support and enterprise systems.</p></div>
    <article className="paper-project-lead">
      <button className="paper-project-image" type="button" onClick={() => onOpenProject(lead.slug)} aria-label={`Read ${lead.title}`}><img src="/minisql/usage-demo.gif" alt="SQL Mini application demonstration" /></button>
      <div><p className="paper-kicker">{lead.category} · FEATURED PROJECT</p><h3><button type="button" onClick={() => onOpenProject(lead.slug)}>{lead.title}</button></h3><p className="paper-summary">{lead.description}</p><p className="paper-byline">{lead.status}</p><button className="paper-read-link" type="button" onClick={() => onOpenProject(lead.slug)}>Read project <span aria-hidden="true">↗</span></button></div>
    </article>
    <div className="paper-project-grid">{stories.map((project) => <article key={project.slug}><p className="paper-kicker">{project.category} · PROJECT NOTE</p><h3><button type="button" onClick={() => onOpenProject(project.slug)}>{project.title}</button></h3><p>{project.description}</p><p className="paper-byline">{project.status}</p><button className="paper-read-link" type="button" onClick={() => onOpenProject(project.slug)}>Read project <span aria-hidden="true">↗</span></button></article>)}</div>
  </section>
}
