'use client'

import {
  heroDefault,
  heroError,
} from '@/lib/mock/hero-section-with-scroll-to-menu-button'
import styles from './HeroSection.module.css'

export default function HeroSection() {
  const { copy } = heroDefault

  return (
    <section
      aria-label="Hero"
      className="min-h-[100svh] bg-bg flex flex-col items-center justify-center px-6"
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

      {/* CTA Button — real anchor so it works without JS */}
      <a
        href={`#${copy.menuAnchorId}`}
        className={`inline-flex items-center gap-3 mt-12 px-[34px] py-4 bg-primary text-surface font-sans font-semibold text-label rounded-full shadow-btn tracking-[0.02em] leading-[1.6] transition-all duration-fast hover:bg-primary-hover hover:shadow-btn-hover hover:-translate-y-0.5 ${styles.fadeUp} ${styles.focusRing}`}
        style={{ animationDelay: '0.36s' }}
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

      {/* Error fallback — rendered server-side if needed */}
      {false && (
        <p className="text-text-muted font-sans text-base">
          {heroError.message}
        </p>
      )}
    </section>
  )
}
