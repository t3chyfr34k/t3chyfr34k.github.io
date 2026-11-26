import { useEffect } from 'react'

/** Dismisses the loader painted by the entry HTML before React starts. */
export function LoadingScreen() {
  useEffect(() => {
    const loader = document.getElementById('initial-loader')
    if (!loader) return

    let disposed = false
    let minimumPassed = false
    let portraitReady = false
    let safetyTimer = 0
    let minimumTimer = 0
    let removeTimer = 0
    const portrait = document.querySelector<HTMLImageElement>('.paper-portrait img')
    portraitReady = !portrait || portrait.complete

    const finish = () => {
      if (disposed || !minimumPassed || !portraitReady) return
      loader.classList.add('is-leaving')
      removeTimer = window.setTimeout(() => loader.remove(), 450)
      window.clearTimeout(safetyTimer)
    }
    const markPortraitReady = () => {
      portraitReady = true
      finish()
    }

    if (portrait && !portrait.complete) {
      portrait.addEventListener('load', markPortraitReady, { once: true })
      portrait.addEventListener('error', markPortraitReady, { once: true })
    }
    minimumTimer = window.setTimeout(() => {
      minimumPassed = true
      finish()
    }, 1450)
    safetyTimer = window.setTimeout(() => {
      minimumPassed = true
      portraitReady = true
      finish()
    }, 2200)

    return () => {
      disposed = true
      window.clearTimeout(minimumTimer)
      window.clearTimeout(safetyTimer)
      window.clearTimeout(removeTimer)
      portrait?.removeEventListener('load', markPortraitReady)
      portrait?.removeEventListener('error', markPortraitReady)
    }
  }, [])

  return null
}
