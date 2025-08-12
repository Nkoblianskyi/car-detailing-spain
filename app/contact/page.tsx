import { Suspense } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactHero } from "@/components/contact-hero"
import { ContactForm } from "@/components/contact-form"
import { ContactInfo } from "@/components/contact-info"

function ContactFormFallback() {
  return (
    <div className="glass-effect border-zinc-700 rounded-lg p-6">
      <div className="animate-pulse">
        <div className="h-8 bg-zinc-700 rounded mb-4"></div>
        <div className="space-y-4">
          <div className="h-4 bg-zinc-700 rounded w-3/4"></div>
          <div className="h-4 bg-zinc-700 rounded w-1/2"></div>
          <div className="h-32 bg-zinc-700 rounded"></div>
        </div>
      </div>
    </div>
  )
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Navigation />
      <main>
        <ContactHero />
        <section className="py-20 bg-zinc-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <Suspense fallback={<ContactFormFallback />}>
                <ContactForm />
              </Suspense>
              <ContactInfo />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
