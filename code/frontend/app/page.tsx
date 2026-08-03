import HeroSection from '@/components/HeroSection'

export default function Home() {
  return (
    <main>
      <HeroSection />
      {/* Menu section — plan item 2 — anchor target for hero button */}
      <section id="menu" aria-label="Menu" className="min-h-screen bg-bg" />
    </main>
  )
}
