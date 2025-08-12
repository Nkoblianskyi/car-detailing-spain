import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ServicesHero } from "@/components/services-hero"
import { ServicesGrid } from "@/components/services-grid"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Navigation />
      <main>
        <ServicesHero />
        <ServicesGrid />
      </main>
      <Footer />
    </div>
  )
}
