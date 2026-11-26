import { ArrowUpRight } from 'lucide-react'
import { useEffect, useState } from 'react'

const amazonUrl = 'https://www.amazon.in/Other-Side-Everything-Ungalul-Oruvan-ebook/dp/B0GZG4G6Y5'

export function Store() {
  const [coverAvailable, setCoverAvailable] = useState(true)

  useEffect(() => {
    document.title = 'T3chyFr34k Store'
    return () => { document.title = 'T3chyFr34k — Shyam Daniel | Lethargic Labs' }
  }, [])

  return <main className="paper-store">
    <header className="paper-store-header">
      <div className="paper-edition"><span>BOOKS &amp; WRITING</span><span>AN AUTHOR’S EDITION</span></div>
      <a className="paper-masthead" href="/store/">T3chyFr34k Store</a>
      <p className="paper-deck">Selected work by Shyam D</p>
      <div className="paper-store-nav">THE BOOKSHOP <span>·</span> A FEATURED TITLE</div>
    </header>
    <section aria-labelledby="store-title" className="paper-store-feature">
      <div className="paper-store-copy">
        <p className="paper-kicker">FEATURED BOOK · FICTION</p>
        <h1 id="store-title">The Other Side of Everything</h1>
        <p className="paper-store-subtitle">A story by <strong className="paper-signature">Shyam D</strong></p>
        <div className="paper-store-rule" />
        <p className="paper-store-description">Discover <em>The Other Side of Everything</em> and view the full book details on Amazon India.</p>
        <a className="paper-store-buy" href={amazonUrl} target="_blank" rel="noopener noreferrer">Find it on Amazon.in <ArrowUpRight aria-hidden="true" /></a>
        <p className="paper-store-caption">Opens the book listing in a new tab.</p>
      </div>
      <figure className="paper-book-figure">
        <div className="paper-book-stage">
          <div className="paper-book">
            {coverAvailable && <img src="https://images-na.ssl-images-amazon.com/images/P/B0GZG4G6Y5.01._SCLZZZZZZZ_.jpg" alt="Cover of The Other Side of Everything by Shyam D" onError={() => setCoverAvailable(false)} />}
            {!coverAvailable && <div className="paper-cover-fallback"><span>THE OTHER SIDE</span><span>of Everything</span><small>SHYAM D</small></div>}
          </div>
          <div className="paper-book-shadow" aria-hidden="true" />
        </div>
        <figcaption>The Other Side of Everything · Shyam D</figcaption>
      </figure>
    </section>
    <footer className="paper-store-footer"><span>WORDS BY SHYAM D</span><span>T3CHYFR34K · LETHARGIC LABS</span></footer>
  </main>
}
