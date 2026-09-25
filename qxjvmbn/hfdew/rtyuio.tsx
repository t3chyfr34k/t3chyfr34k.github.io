import { ArrowRight, Github, Linkedin, Mail, MessageCircle } from 'lucide-react'

const contactLinks = [
  { label: 'Email', href: 'mailto:shhyamdanielm2004@gmail.com', icon: Mail, isPlaceholder: false },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/t3chyfr34k', icon: Linkedin, isPlaceholder: false },
  { label: 'GitHub', href: 'https://github.com/t3chyfr34k', icon: Github, isPlaceholder: false },
]

const whatsappLink = 'https://wa.me/917339132850?text=' + encodeURIComponent('Hello Shyam, I came across your portfolio and would like to connect with you.')

export function Contact() {
  return (
    <section id="contact" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl rounded-[2.2rem] border border-white/10 bg-white/4 p-8 text-center shadow-[0_30px_90px_rgba(10,18,30,0.5)] backdrop-blur-xl sm:p-12">
        <div className="mb-5 text-xs uppercase tracking-[0.3em] text-slate-400">09 — Contact</div>
        <h2 className="text-3xl font-medium tracking-[-0.04em] text-white sm:text-5xl">
          Let&apos;s build something useful.
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300">
          I&apos;m focused on practical technology work across support, security, analytics, and enterprise systems.
          If you&apos;re looking for someone who can connect technical detail with business outcomes, I&apos;d be glad to
          connect.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {contactLinks.map(({ label, href, icon: Icon, isPlaceholder }) => (
            <a
              key={label}
              href={isPlaceholder ? undefined : href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noreferrer' : undefined}
              aria-disabled={isPlaceholder}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/60 px-4 py-2.5 text-sm text-slate-100 transition hover:border-white/20 hover:bg-white/5"
              onClick={(event) => {
                if (isPlaceholder) {
                  event.preventDefault()
                }
              }}
            >
              <Icon className="h-4 w-4" />
              {label}
            </a>
          ))}
        </div>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="mt-10 inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-5 py-3 text-sm font-medium text-emerald-100 transition hover:border-emerald-300/60 hover:bg-emerald-500/15"
        >
          Start a conversation
          <MessageCircle className="h-4 w-4" />
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  )
}
