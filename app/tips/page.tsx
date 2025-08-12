import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { TipsHero } from "@/components/tips-hero"
import { TipsGrid } from "@/components/tips-grid"

export default function TipsPage() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Navigation />
      <main>
        <TipsHero />
        <TipsGrid />
      </main>
      <Footer />
    </div>
  )
}
