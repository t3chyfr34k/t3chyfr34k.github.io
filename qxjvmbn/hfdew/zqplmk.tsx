export function Footer() {
  const isStorePage = window.location.pathname.replace(/\/$/, '') === '/store'
  if (isStorePage) return null
  return <footer className="paper-footer">
    <div className="paper-footer-columns"><div><p className="paper-kicker">THE JOURNAL</p><a href="#home">Shyam Daniel</a><p>Database · Cloud · Server administration</p></div><div><p className="paper-kicker">SECTIONS</p><a href="#about">Profile</a><a href="#skills">Technical focus</a><a href="#projects">Projects</a><a href="#labs">Lab notes</a></div><div><p className="paper-kicker">ELSEWHERE</p><a href="/store">Store</a><a href="https://github.com/t3chyfr34k" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://linkedin.com/in/t3chyfr34k" target="_blank" rel="noreferrer">LinkedIn ↗</a></div><div><p className="paper-kicker">CORRESPONDENCE</p><a href="mailto:shhyamdanielm2004@gmail.com">Email Shyam ↗</a></div></div>
    <div className="paper-footer-rule"><span>© 2026 T3chyFr34k · Lethargic Labs</span><a href="#home">Back to top ↑</a></div>
  </footer>
}
