const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'DBA & Cloud', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Lab Notes', href: '#labs' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  return (
    <header className="paper-header">
      <div className="paper-edition"><span>PERSONAL PORTFOLIO</span><span>DATABASES · CLOUD · SYSTEMS</span><a href="/store">Visit the store ↗</a></div>
      <a className="paper-masthead" href="#home" aria-label="Shyam Daniel, home">Shyam Daniel</a>
      <p className="paper-deck">A personal journal of technology, operations and ongoing work</p>
      <nav className="paper-nav" aria-label="Main navigation">{navItems.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}</nav>
    </header>
  )
}
