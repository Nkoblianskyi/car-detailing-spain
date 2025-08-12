import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about-hero"
import { AboutStory } from "@/components/about-story"
import { AboutValues } from "@/components/about-values"
import { AboutTeam } from "@/components/about-team"
import { AboutProcess } from "@/components/about-process"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Navigation />
      <main>
        <AboutHero />
        <AboutStory />
        <AboutValues />
        <AboutTeam />
        <AboutProcess />
      </main>
      <Footer />
    </div>
  )
}
