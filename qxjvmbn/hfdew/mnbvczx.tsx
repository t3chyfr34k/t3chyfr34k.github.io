import profileImage from '/xjdhqwe.png'

export function Hero() {
  return (
    <section id="home" className="paper-lead paper-section">
      <div className="paper-lead-copy">
        <p className="paper-kicker">FOCUS · DATABASES, CLOUD &amp; SERVERS</p>
        <h1>Building a foundation in the systems that keep work moving.</h1>
        <p className="paper-summary">I’m Shyam Daniel, developing practical skills in database administration, cloud platforms and server operations—with a current focus on SQL, AWS and Linux, including SUSE Linux.</p>
        <p className="paper-byline"><span className="paper-signature">Shyam Daniel</span><span>·</span> Technology &amp; operations</p>
        <div className="paper-actions"><a href="#projects">Read the projects <span aria-hidden="true">↘</span></a><a href="#contact">Get in touch <span aria-hidden="true">↗</span></a></div>
      </div>
      <figure className="paper-portrait">
        <img src={profileImage} alt="Portrait of Shyam Daniel" />
        <figcaption>Shyam Daniel · Database, cloud and server administration</figcaption>
      </figure>
    </section>
  )
}
