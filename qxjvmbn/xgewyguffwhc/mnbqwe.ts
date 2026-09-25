export type ProjectCategory = 'Cybersecurity' | 'Data' | 'IT Support' | 'SAP'

export type PlannedProject = {
  title: string
  category: ProjectCategory
  description: string
  firstVersion: string
  liveUrl?: string
}

export const plannedProjects: PlannedProject[] = [
  {
    title: 'OpsLab — SOC alert investigation dashboard',
    category: 'Cybersecurity',
    description: 'A hosted interface for reviewing security alerts, evidence, severity, and response notes.',
    firstVersion: 'Live on Render with safe sample data',
    liveUrl: 'https://opslab-0kvf.onrender.com/',
  },
  {
    title: 'IT troubleshooting knowledge base',
    category: 'IT Support',
    description: 'A searchable collection of practical troubleshooting flows for common network and system issues.',
    firstVersion: 'Static documentation site with categories and search',
  },
  {
    title: 'Operations data dashboard',
    category: 'Data',
    description: 'A concise dashboard showing how cleaned operational data can become useful decisions.',
    firstVersion: 'Static dashboard using a versioned, non-sensitive dataset',
  },
  {
    title: 'ERP workflow map',
    category: 'SAP',
    description: 'A visual explanation of how a simple business process moves across enterprise systems.',
    firstVersion: 'Figma-designed flow with an accessible web presentation',
  },
]
