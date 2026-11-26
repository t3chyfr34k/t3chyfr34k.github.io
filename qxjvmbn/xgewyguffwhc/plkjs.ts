export type SkillGroup = {
  title: string
  description: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Database Administration (DBA)',
    description: 'Database technologies and SQL foundations supporting reliable data systems.',
    items: ['SQL', 'PostgreSQL', 'MySQL', 'MongoDB', 'Firebase', 'SAP HANA'],
  },
  {
    title: 'Cloud & Server Administration',
    description: 'Cloud services, Linux systems, server access, and core network services.',
    items: ['AWS', 'AWS EC2', 'AWS S3', 'AWS IAM', 'AWS CloudWatch', 'Linux', 'SUSE Linux', 'Windows', 'IIS', 'RDP', 'DNS', 'DHCP', 'TCP/IP', 'VPN', 'Firewalls'],
  },
  {
    title: 'SOC / Cybersecurity',
    description: 'Investigation, evidence review, and response workflows.',
    items: [
      'Wazuh SIEM',
      'Microsoft Defender for Endpoint',
      'Linux Security',
      'Vulnerability Assessment',
      'Ethical Hacking',
      'Security Monitoring',
      'Log Analysis',
      'Alert Triage',
      'Incident Investigation',
      'Nmap',
      'Wireshark',
      'Windows Event Logs',
    ],
  },
  {
    title: 'IT Support / Infrastructure',
    description: 'Support, diagnosis, and operational reliability across systems.',
    items: ['HTTP/HTTPS', 'IP Addressing', 'Routing', 'Switching', 'NAT', 'Troubleshooting'],
  },
  {
    title: 'Data Analytics',
    description: 'Turning raw information into readable, useful business insight.',
    items: ['Excel', 'Power BI', 'Python', 'Data Cleaning', 'Dashboards', 'REST APIs', 'Postman'],
  },
  {
    title: 'Automation & Tooling',
    description: 'Development, automation, and delivery tools that support infrastructure work.',
    items: ['Docker', 'Git', 'GitHub', 'GitHub Actions', 'Jenkins', 'CI/CD', 'n8n', 'Selenium', 'Ollama', 'AI-assisted workflows', 'Python Automation'],
  },
  {
    title: 'Web / APIs / Productivity',
    description: 'Application and workflow support across frontend, API, and office tooling.',
    items: ['Figma', 'HTML', 'CSS', 'JavaScript', 'Web Applications', 'Browser Fundamentals', 'YouTube Data API', 'VS Code', 'Linux CLI', 'Google Workspace', 'Microsoft Word', 'Microsoft PowerPoint', 'MS Excel'],
  },
  {
    title: 'SAP / ERP',
    description: 'Understanding end-to-end business workflows and connected systems.',
    items: ['SAP Fundamentals', 'SAP HANA', 'ERP', 'Business Processes', 'Workflow Mapping', 'Enterprise Systems', 'Process Analysis'],
  },
]
