import { Award } from "lucide-react"

export function AboutHero() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-b from-zinc-950 to-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in-up">
            <div className="flex items-center space-x-2 mb-6">
              <Award className="w-6 h-6 text-amber-400" />
              <span className="text-amber-400 font-medium uppercase tracking-wider text-sm">About Us</span>
            </div>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-zinc-100 mb-6 leading-tight">
              Crafting Excellence in
              <span className="block gradient-text">Automotive Care</span>
            </h1>
            <p className="text-xl text-zinc-300 mb-8 leading-relaxed">
              Elite Auto Detailing Spain represents the pinnacle of automotive care in the Iberian Peninsula. Founded on
              principles of excellence, innovation, and unwavering commitment to customer satisfaction, we transform
              vehicles into works of art.
            </p>
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">3+</div>
                <div className="text-zinc-400 text-sm">Years Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">500+</div>
                <div className="text-zinc-400 text-sm">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">100%</div>
                <div className="text-zinc-400 text-sm">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="/0c219e73cd70633720af15f441718af9.jpg"
              alt="Elite Auto Detailing Workshop"
              className="w-full h-96 lg:h-[500px] object-cover rounded-lg shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/50 to-transparent rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  )
}
