'use client'

import styles from './hero.module.css'
import Button from "@/components/Button"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

export default function Hero() {
  const pathname = usePathname()
  const [isHomePage, setIsHomePage] = useState(pathname === '/')

  useEffect(() => {
    setIsHomePage(pathname === '/')
  }, [pathname])

  useEffect(() => {
    const handleLoad = () => document.body.classList.add('loaded')
    if (document.readyState === 'complete') handleLoad()
    else {
      window.addEventListener('load', handleLoad)
      return () => window.removeEventListener('load', handleLoad)
    }
  }, [])

  return (
      <section
          className={`${styles.section} ${!isHomePage ? styles.hidden : ''}`}
          id="hero"
      >
        <div className={styles.offer}>
          <h1 className={`text-5xl font-semibold tracking-tight sm:text-7xl ${styles.title}`}>
            Your trusted partner <br />
            in creating what <br />
            comes next
          </h1>
          <p className={styles.description}>
            I collaborate with studios, publishers, and platforms <br />across the game space
          </p>
          <Button text="Send Offer" url="/#contact" />
        </div>

        <iframe
            src="/iframe-games/wheel/index.html"
            className={styles.iframe}
            id="wheel-iframe"
            loading="lazy"
        ></iframe>
      </section>
  )
}
