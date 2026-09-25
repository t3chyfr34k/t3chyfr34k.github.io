export type PortfolioProject = {
  slug: string
  title: string
  category: 'IT Support' | 'Data' | 'SAP'
  description: string
  status: string
}

export type ResearchSource = {
  type: 'Official Documentation' | 'Community Research' | 'Practical Notes'
  name: string
  url: string
}

export type TroubleshootingArticle = {
  title: string
  errorMessage: string
  category: string
  symptoms: string[]
  causes: string[]
  diagnosticFlow: string[]
  checks: string[]
  solutions: string[]
  verification: string
  escalation: string
  keywords: string[]
  sources: ResearchSource[]
}

export type OperationsRow = {
  date: string
  department: string
  category: string
  received: number
  resolved: number
  resolutionHours: number
  slaBreaches: number
  priority: 'Low' | 'Medium' | 'High'
}

export type WorkflowStage = {
  name: string
  purpose: string
  input: string
  output: string
  responsible: string
  systemData: string
  next: string
}

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: 'it-support',
    title: 'IT Troubleshooting Knowledge Base',
    category: 'IT Support',
    description: 'A searchable collection of practical troubleshooting flows for common network, operating system, application, and infrastructure problems.',
    status: 'Static documentation project',
  },
  {
    slug: 'data',
    title: 'Operations Data Dashboard',
    category: 'Data',
    description: 'A concise example of how cleaned operational data can become useful business insight.',
    status: 'Fictional demonstration data',
  },
  {
    slug: 'sap',
    title: 'ERP Workflow Map',
    category: 'SAP',
    description: 'A visual explanation of how a simple Order-to-Cash process moves across enterprise systems.',
    status: 'Theoretical portfolio implementation',
  },
]

export const troubleshootingArticles: TroubleshootingArticle[] = [
  {
    title: 'DNS resolution failure',
    errorMessage: 'DNS_PROBE_FINISHED_NXDOMAIN',
    category: 'DNS',
    symptoms: ['Browser cannot resolve a domain.', 'Other sites may work while one hostname fails.'],
    causes: ['DNS resolution failure', 'Incorrect DNS configuration', 'Local DNS cache issue', 'Incorrect hosts configuration'],
    diagnosticFlow: ['Browser', 'nslookup', 'Connectivity check', 'DNS configuration', 'DNS cache', 'hosts file', 'External DNS test'],
    checks: ['nslookup example.com', 'ipconfig /all', 'ipconfig /flushdns', 'ping the configured DNS server'],
    solutions: ['Check the active adapter DNS settings.', 'Flush the local cache and retry.', 'Compare results with a trusted external DNS resolver.', 'Review the hosts file only when the environment requires it.'],
    verification: 'Retry DNS resolution and confirm the returned address matches the expected environment.',
    escalation: 'Escalate when multiple clients fail, internal DNS zones are affected, or the authoritative service is unavailable.',
    keywords: ['DNS_PROBE_FINISHED_NXDOMAIN', 'DNS cache', 'nslookup', 'hosts file', 'name resolution'],
    sources: [
      { type: 'Official Documentation', name: 'Microsoft ipconfig documentation', url: 'https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/ipconfig' },
      { type: 'Official Documentation', name: 'Microsoft DNS overview', url: 'https://learn.microsoft.com/en-us/windows-server/networking/dns/dns-top' },
      { type: 'Practical Notes', name: 'IETF DNS concepts', url: 'https://www.rfc-editor.org/rfc/rfc1034' },
    ],
  },
  {
    title: 'APIPA address on a network adapter',
    errorMessage: '169.254.x.x',
    category: 'DHCP',
    symptoms: ['The adapter has a 169.254.x.x address.', 'The device cannot reach normal network resources.'],
    causes: ['DHCP server unavailable', 'Physical or wireless connectivity issue', 'VLAN or scope mismatch', 'Adapter configuration problem'],
    diagnosticFlow: ['Check link', 'ipconfig /all', 'Renew lease', 'Test gateway', 'Check DHCP path', 'Review scope'],
    checks: ['ipconfig /all', 'ipconfig /release', 'ipconfig /renew', 'ping the default gateway'],
    solutions: ['Confirm the connection and switch or access-point path.', 'Renew the lease after connectivity is restored.', 'Check the DHCP scope and VLAN assignment with the network owner.'],
    verification: 'Confirm the adapter receives an expected address, gateway, DNS servers, and can reach a known internal endpoint.',
    escalation: 'Escalate when multiple devices are affected or the DHCP service, VLAN, or network equipment requires access.',
    keywords: ['169.254', 'APIPA', 'DHCP', 'ipconfig /renew', 'network connectivity'],
    sources: [
      { type: 'Official Documentation', name: 'Microsoft APIPA overview', url: 'https://learn.microsoft.com/en-us/troubleshoot/windows-server/networking/automatic-tcpip-addressing-without-dhcp' },
      { type: 'Official Documentation', name: 'Microsoft ipconfig documentation', url: 'https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/ipconfig' },
    ],
  },
  {
    title: 'Connection refused',
    errorMessage: 'connection refused',
    category: 'APIs',
    symptoms: ['A client reaches the host but the target connection is rejected.', 'A local API or database port does not accept connections.'],
    causes: ['Service is stopped', 'Incorrect port or bind address', 'Firewall rule', 'Application is listening on another interface'],
    diagnosticFlow: ['Confirm host', 'Confirm port', 'Check listener', 'Check service state', 'Review firewall', 'Retry'],
    checks: ['Test the expected host and port.', 'Review the application or service status.', 'Inspect the listening sockets on the host.'],
    solutions: ['Start the intended service only when authorized.', 'Correct the client endpoint or port.', 'Review firewall and bind configuration for the environment.'],
    verification: 'Repeat the connection test and confirm the application-level response, not just an open socket.',
    escalation: 'Escalate when the service is managed by another team or the issue involves production firewall policy.',
    keywords: ['connection refused', 'port', 'listener', 'API', 'firewall'],
    sources: [
      { type: 'Official Documentation', name: 'MDN HTTP status documentation', url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status' },
      { type: 'Official Documentation', name: 'Python socket documentation', url: 'https://docs.python.org/3/library/socket.html' },
    ],
  },
]

export const operationsRows: OperationsRow[] = [
  { date: '2026-01-05', department: 'IT Support', category: 'Access', received: 18, resolved: 16, resolutionHours: 4.2, slaBreaches: 1, priority: 'Medium' },
  { date: '2026-01-12', department: 'Network', category: 'Connectivity', received: 24, resolved: 21, resolutionHours: 6.1, slaBreaches: 2, priority: 'High' },
  { date: '2026-01-19', department: 'Applications', category: 'API', received: 15, resolved: 14, resolutionHours: 3.8, slaBreaches: 0, priority: 'Low' },
  { date: '2026-01-26', department: 'IT Support', category: 'Hardware', received: 21, resolved: 19, resolutionHours: 5.4, slaBreaches: 1, priority: 'Medium' },
  { date: '2026-02-02', department: 'Network', category: 'DNS', received: 27, resolved: 22, resolutionHours: 7.2, slaBreaches: 3, priority: 'High' },
  { date: '2026-02-09', department: 'Applications', category: 'Database', received: 17, resolved: 16, resolutionHours: 4.1, slaBreaches: 1, priority: 'Medium' },
]

export const workflowStages: WorkflowStage[] = [
  { name: 'Customer', purpose: 'Initiates a purchase request.', input: 'Product or service need', output: 'Purchase request', responsible: 'Customer / sales channel', systemData: 'Customer and request context', next: 'Sales Order' },
  { name: 'Sales Order', purpose: 'Creates and validates the commercial request.', input: 'Customer purchase request', output: 'Sales order document', responsible: 'Sales function', systemData: 'Customer, material, price, and requested date', next: 'Availability Check' },
  { name: 'Availability Check', purpose: 'Checks whether requested items can be fulfilled.', input: 'Sales order requirements', output: 'Confirmed or adjusted availability', responsible: 'Planning / inventory function', systemData: 'Stock, supply, and delivery data', next: 'Delivery' },
  { name: 'Delivery', purpose: 'Coordinates fulfillment and shipment preparation.', input: 'Confirmed demand', output: 'Outbound delivery document', responsible: 'Warehouse / logistics', systemData: 'Delivery, handling, and shipping data', next: 'Goods Issue' },
  { name: 'Goods Issue', purpose: 'Records that goods have left the supplying location.', input: 'Prepared outbound delivery', output: 'Goods movement record', responsible: 'Warehouse function', systemData: 'Inventory movement and posting data', next: 'Billing' },
  { name: 'Billing', purpose: 'Creates the customer invoice from the fulfilled process.', input: 'Delivery and pricing data', output: 'Billing document', responsible: 'Billing function', systemData: 'Invoice, tax, and customer data', next: 'Accounting' },
  { name: 'Accounting', purpose: 'Records the financial impact of the transaction.', input: 'Billing document', output: 'Financial accounting entry', responsible: 'Finance function', systemData: 'Receivables and ledger data', next: 'Payment' },
  { name: 'Payment', purpose: 'Closes the receivable when payment is received and matched.', input: 'Customer payment', output: 'Cleared receivable', responsible: 'Finance / collections', systemData: 'Bank, clearing, and receivables data', next: 'Complete' },
]
