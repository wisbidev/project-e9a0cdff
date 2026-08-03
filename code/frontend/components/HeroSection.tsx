'use client'

import { useState, useEffect } from 'react'
import {
  heroDefault,
  heroLoading,
  heroError,
  type HeroData,
} from '@/lib/mock/hero-section-with-scroll-to-menu-button'
import styles from './HeroSection.module.css'

type HeroState = 'default' | 'loading' | 'error'

/**
 * Fetches hero data from the mock module.
 * Replace body with a real fetch call to wire the real API.
 */
async function fetchHeroData(): Promise<HeroData> {
  // Real API call would go here:
  // const res = await fetch('/api/hero')
  // if (!res.ok) throw new Error('Failed')
  // return res.json()
  return new Promise((resolve) => setTimeout(() => resolve(heroDefault), 800))
}

export default function HeroSection() {
  const [state, setState] = useState<HeroState>('loading')
  const [data, setData] = useState<HeroData | null>(null)

  useEffect(() => {
    fetchHeroData()
      .then((d) => {
        setData(d)
        setState('default')
      })
      .catch(() => {
        setState('error')
      })
  }, [])

  if (state === 'loading') {
    return (
      <section
        aria-label="Hero"
        className="min-h-[100svh] bg-bg flex items-center justify-center px-6"
      >
        <div className="flex flex-col items-center gap-8 animate-pulse">
          {/* Cup skeleton */}
          <div className="bg-border rounded-full w-[108px] h-[108px]" />
          {/* Headline skeleton */}
          <div className="bg-border rounded h-16 w-64" />
          {/* Subtitle skeleton */}
          <div className="bg-border rounded h-6 w-48" />
          {/* Button skeleton */}
          <div className="bg-border rounded-full h-[58px] w-44" />
        </div>
      </section>
    )
  }

  if (state === 'error') {
    return (
      <section
        aria-label="Hero"
        className="min-h-[100svh] bg-bg flex items-center justify-center px-6"
      >
        <p className="text-text-muted font-sans text-base">
          {heroError.message}
        </p>
      </section>
    )
  }

  const { copy } = data as HeroData

  return (
    <section
      aria-label="Hero"
      className={`min-h-[100svh] bg-bg flex flex-col items-center justify-center px-6 ${styles.hero}`}
    >
      {/* Coffee cup illustration — decorative, aria-hidden */}
      <div
        aria-hidden="true"
        className={`mb-10 md:mb-10 ${styles.fadeUp} ${styles.steamContainer}`}
        style={{ animationDelay: '0s' }}
      >
        <svg
          width="108"
          height="108"
          viewBox="0 0 108 108"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Steam strokes */}
          <path
            className={styles.steam}
            style={{ animationDelay: '0s' }}
            d="M40 24 Q44 16 40 8"
            stroke="#D97706"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
          <path
            className={styles.steam}
            style={{ animationDelay: '0.55s' }}
            d="M54 22 Q58 14 54 6"
            stroke="#D97706"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
          <path
            className={styles.steam}
            style={{ animationDelay: '1.1s' }}
            d="M68 24 Q72 16 68 8"
            stroke="#D97706"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
          {/* Cup body */}
          <path
            d="M28 38 L30 88 C30 92 34 96 38 96 L70 96 C74 96 78 92 78 88 L80 38 Z"
            fill="#FFFDF7"
            stroke="#2F2116"
            strokeWidth="3"
          />
          {/* Coffee surface */}
          <ellipse cx="54" cy="40" rx="26" ry="6" fill="#D97706" />
          {/* Handle */}
          <path
            d="M78 50 Q94 50 94 64 Q94 78 78 78"
            stroke="#2F2116"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
          {/* Saucer */}
          <ellipse
            cx="54"
            cy="96"
            rx="32"
            ry="6"
            fill="#FFFDF7"
            stroke="#2F2116"
            strokeWidth="3"
          />
        </svg>
      </div>

      {/* Headline */}
      <h1
        className={`text-center font-serif font-bold text-display text-text tracking-[-0.02em] leading-[1.05] ${styles.fadeUp}`}
        style={{ animationDelay: '0.12s' }}
      >
        {copy.headline}
      </h1>

      {/* Subtitle */}
      <p
        className={`mt-5 text-center font-sans font-normal text-lead text-text-muted italic leading-[1.6] ${styles.fadeUp}`}
        style={{ animationDelay: '0.24s' }}
      >
        {copy.subtitle}
      </p>

      {/* CTA Button */}
      <a
        href={`#${copy.menuAnchorId}`}
        className={`inline-flex items-center gap-3 mt-12 px-[34px] py-4 bg-primary text-surface font-sans font-semibold text-label rounded-full shadow-btn tracking-[0.02em] leading-[1.6] transition-all duration-fast hover:bg-primary-hover hover:shadow-btn-hover hover:-translate-y-0.5 focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline focus-visible:outline-primary focus-visible:rounded-[6px] ${styles.fadeUp}`}
        style={{ animationDelay: '0.36s' }}
        aria-label={copy.buttonLabel}
      >
        {copy.buttonLabel}
        {/* Down chevron — decorative, aria-hidden */}
        <svg
          aria-hidden="true"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.chevron}
        >
          <path
            d="M5 7.5L10 12.5L15 7.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </section>
  )
}
