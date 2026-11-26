import { Github, Linkedin, Mail, MessageCircle } from 'lucide-react'

const whatsappLink = 'https://wa.me/917339132850?text=' + encodeURIComponent('Hello Shyam, I came across your portfolio and would like to connect with you.')
const links = [
  { label: 'Email', href: 'mailto:shhyamdanielm2004@gmail.com', icon: Mail },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/t3chyfr34k', icon: Linkedin },
  { label: 'GitHub', href: 'https://github.com/t3chyfr34k', icon: Github },
]

export function Contact() {
  return <section id="contact" className="paper-section paper-contact">
    <p className="paper-kicker">05 · CORRESPONDENCE</p><h2>Have a useful problem to solve?</h2><p>I’m glad to connect about database, cloud and server administration, or the projects documented here.</p>
    <div className="paper-contact-links">{links.map(({ label, href, icon: Icon }) => <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined}><Icon aria-hidden="true" />{label} ↗</a>)}<a href={whatsappLink} target="_blank" rel="noreferrer"><MessageCircle aria-hidden="true" />WhatsApp ↗</a></div>
  </section>
}
