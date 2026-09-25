export type SkillGroup = {
  title: string
  description: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
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
    items: ['Windows', 'Linux', 'DNS', 'DHCP', 'HTTP/HTTPS', 'TCP/IP', 'IP Addressing', 'Routing', 'Switching', 'NAT', 'VPN', 'Firewalls', 'Troubleshooting'],
  },
  {
    title: 'Data Analytics',
    description: 'Turning raw information into readable, useful business insight.',
    items: ['SQL', 'MySQL', 'MongoDB', 'PostgreSQL', 'Firebase', 'Excel', 'Power BI', 'Python', 'Data Cleaning', 'Dashboards', 'REST APIs', 'Postman'],
  },
  {
    title: 'Cloud / DevOps / Automation',
    description: 'Practical automation, cloud workflows, and modern systems operations.',
    items: ['AWS', 'AWS EC2', 'AWS S3', 'AWS IAM', 'AWS CloudWatch', 'Docker', 'Git', 'GitHub', 'GitHub Actions', 'Jenkins', 'CI/CD', 'n8n', 'Selenium', 'Ollama', 'AI-assisted workflows', 'Python Automation'],
  },
  {
    title: 'Web / APIs / Productivity',
    description: 'Application and workflow support across frontend, API, and office tooling.',
    items: ['Figma', 'HTML', 'CSS', 'JavaScript', 'Web Applications', 'Browser Fundamentals', 'YouTube Data API', 'VS Code', 'Linux CLI', 'Google Workspace', 'Microsoft Word', 'Microsoft PowerPoint', 'MS Excel'],
  },
  {
    title: 'SAP / ERP',
    description: 'Understanding end-to-end business workflows and connected systems.',
    items: ['SAP Fundamentals', 'ERP', 'Business Processes', 'Workflow Mapping', 'Enterprise Systems', 'Process Analysis'],
  },
]
