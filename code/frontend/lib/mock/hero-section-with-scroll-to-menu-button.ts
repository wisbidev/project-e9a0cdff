/**
 * Mock data module — Hero section.
 * Shaped exactly as the backend API must return it.
 * Swap this file to wire the real API.
 */

export interface HeroCopy {
  headline: string
  subtitle: string
  buttonLabel: string
}

export interface HeroData {
  copy: HeroCopy
  menuAnchorId: string
}

/** Default state — fully populated static content */
export const heroDefault: HeroData = {
  copy: {
    headline: 'Coffee Lab',
    subtitle: 'Slow-roasted, small batch',
    buttonLabel: 'See the menu',
  },
  menuAnchorId: 'menu',
}

/** Loading state — data is absent; UI shows loading skeleton */
export const heroLoading: null = null

/** Error state — API returned an error shape */
export const heroError: { message: string } = {
  message: 'Unable to load hero content.',
}
