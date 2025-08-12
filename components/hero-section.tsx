import Link from "next/link"
import { ArrowRight, Shield, Award, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/c8135b4f71f359f112677a53d9087926.jpg"
          alt="Professional car detailing"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/90 via-zinc-950/70 to-zinc-950/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-zinc-100 mb-6 leading-tight">
            Elite Auto
            <span className="block gradient-text">Detailing</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your vehicle with Spain's premier car detailing service. Professional ceramic coating, paint
            correction, and luxury care that exceeds expectations.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-zinc-900 text-lg px-8 py-4">
              <Link href="/contact" className="flex items-center space-x-2">
                <span>Book Your Service</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-zinc-600 text-zinc-100 hover:bg-zinc-800 text-lg px-8 py-4 bg-transparent"
            >
              <Link href="/services">View Services</Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8 text-amber-400" />
              </div>
              <h3 className="font-semibold text-zinc-100">Premium Protection</h3>
              <p className="text-zinc-400 text-sm text-center">
                Advanced ceramic coatings and paint protection that lasts for years
              </p>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center">
                <Award className="w-8 h-8 text-amber-400" />
              </div>
              <h3 className="font-semibold text-zinc-100">Expert Craftsmanship</h3>
              <p className="text-zinc-400 text-sm text-center">
                Trained professionals using industry-leading techniques and products
              </p>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center">
                <Clock className="w-8 h-8 text-amber-400" />
              </div>
              <h3 className="font-semibold text-zinc-100">Convenient Service</h3>
              <p className="text-zinc-400 text-sm text-center">
                Flexible scheduling and professional service at your location
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-zinc-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-zinc-400 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
