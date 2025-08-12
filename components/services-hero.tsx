import { Sparkles } from "lucide-react"

export function ServicesHero() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-b from-zinc-950 to-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Sparkles className="w-6 h-6 text-amber-400" />
            <span className="text-amber-400 font-medium uppercase tracking-wider text-sm">Our Services</span>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-zinc-100 mb-6 leading-tight">
            Premium Car Care
            <span className="block gradient-text">Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            From advanced ceramic coatings to complete interior restoration, we offer comprehensive detailing services
            that protect your investment and exceed your expectations. Each service is performed by certified
            technicians using premium products and proven techniques.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">6</div>
              <div className="text-zinc-400">Premium Services</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">500+</div>
              <div className="text-zinc-400">Satisfied Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">5★</div>
              <div className="text-zinc-400">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
