const pillars = [
  ['Database administration', 'Developing SQL and relational database knowledge, including SAP HANA.'],
  ['Cloud platforms', 'Building practical familiarity with AWS services and cloud operations.'],
  ['Server administration', 'Learning Linux, SUSE Linux and Windows administration, including IIS and RDP.'],
  ['Infrastructure', 'Studying the networking and security fundamentals that support reliable systems.'],
]

export function About() {
  return <section id="about" className="paper-section paper-about">
    <div className="paper-section-head"><p className="paper-kicker">01 · THE PROFILE</p><h2>Learning the systems behind the service.</h2></div>
    <div className="paper-about-intro"><p className="paper-dropcap">My current direction brings together data, infrastructure and the day-to-day work of keeping systems available. I’m building that foundation through study and practical projects, with an emphasis on careful troubleshooting and clear documentation.</p></div>
    <div className="paper-columns">{pillars.map(([title, description]) => <article key={title}><p className="paper-kicker">FIELD NOTES</p><h3>{title}</h3><p>{description}</p></article>)}</div>
  </section>
}
