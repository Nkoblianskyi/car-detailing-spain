import { Shield, Droplets, Sun, Wrench } from "lucide-react"

export function CarCareSection() {
  const careConcepts = [
    {
      icon: Shield,
      title: "Protection First",
      description:
        "Your vehicle faces constant threats from UV rays, road salt, bird droppings, and environmental contaminants. Our protective treatments create an invisible barrier that shields your paint and interior from damage.",
    },
    {
      icon: Droplets,
      title: "Proper Washing Technique",
      description:
        "The two-bucket method, quality microfiber towels, and pH-neutral soaps are essential. Never use household detergents or rough materials that can scratch your paint's delicate surface.",
    },
    {
      icon: Sun,
      title: "UV Protection",
      description:
        "Spain's intense sun can fade paint and crack interior surfaces. Regular waxing, ceramic coatings, and interior conditioning provide crucial UV protection to maintain your vehicle's value.",
    },
    {
      icon: Wrench,
      title: "Regular Maintenance",
      description:
        "Consistent care prevents small issues from becoming expensive problems. Regular detailing maintains your vehicle's appearance and helps identify potential issues early.",
    },
  ]

  return (
    <section className="py-20 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-zinc-100 mb-6">
            Understanding
            <span className="block gradient-text">Car Care</span>
          </h2>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed">
            Proper car care is more than just aesthetics. It's about protecting your investment and ensuring your
            vehicle maintains its value and performance over time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {careConcepts.map((concept, index) => (
            <div
              key={index}
              className="glass-effect rounded-lg p-8 hover:bg-zinc-800/50 transition-colors duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-amber-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <concept.icon className="w-6 h-6 text-amber-400" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-zinc-100">{concept.title}</h3>
                  <p className="text-zinc-300 leading-relaxed">{concept.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="glass-effect rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-zinc-100 mb-4">Why Professional Care Matters</h3>
            <p className="text-zinc-300 leading-relaxed mb-6">
              While regular washing is important, professional detailing goes far beyond surface cleaning. We use
              specialized tools, premium products, and proven techniques that aren't available to the average car owner.
              Our services not only make your vehicle look incredible but also provide long-term protection that saves
              money on repairs and maintains resale value.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">5+</div>
                <div className="text-zinc-400">Years Protection</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">30%</div>
                <div className="text-zinc-400">Value Retention</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">100%</div>
                <div className="text-zinc-400">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
