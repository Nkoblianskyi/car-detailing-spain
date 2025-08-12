import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { SurveySection } from "@/components/survey-section"
import { CarCareSection } from "@/components/car-care-section"
import { TipsSection } from "@/components/tips-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Navigation />
      <main>
        <HeroSection />
        <ServicesSection />
        <SurveySection />
        <CarCareSection />
        <TipsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
