import Link from "next/link"
import { ArrowRight, Clock, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { services } from "@/lib/mock-data"

export function ServicesGrid() {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "protection":
        return Shield
      case "exterior":
        return Clock
      case "interior":
        return Clock
      case "premium":
        return Shield
      default:
        return Clock
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "protection":
        return "text-green-400"
      case "exterior":
        return "text-blue-400"
      case "interior":
        return "text-purple-400"
      case "premium":
        return "text-amber-400"
      default:
        return "text-zinc-400"
    }
  }

  return (
    <section className="py-20 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {services.map((service, index) => {
            const IconComponent = getCategoryIcon(service.category)
            const categoryColor = getCategoryColor(service.category)

            return (
              <div
                key={service.id}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-12 lg:gap-16`}
              >
                {/* Image */}
                <div className="flex-1">
                  <div className="relative">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-96 object-cover rounded-lg shadow-2xl"
                    />
                    <div className="absolute top-4 left-4">
                      <div className="glass-effect rounded-lg px-3 py-2 flex items-center space-x-2">
                        <IconComponent className={`w-4 h-4 ${categoryColor}`} />
                        <span className={`text-sm font-medium capitalize ${categoryColor}`}>{service.category}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-zinc-400" />
                      <span className="text-zinc-400">{service.duration}</span>
                    </div>
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-zinc-100">{service.title}</h2>
                    <p className="text-zinc-300 text-lg leading-relaxed">{service.description}</p>
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    <h3 className="font-semibold text-zinc-100 text-lg">What's Included:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-zinc-400">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button asChild className="bg-amber-500 hover:bg-amber-600 text-zinc-900">
                      <Link href={`/services/${service.id}`} className="flex items-center space-x-2">
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="border-zinc-600 text-zinc-300 hover:bg-zinc-800 bg-transparent"
                    >
                      <Link href="/contact">Book This Service</Link>
                    </Button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="glass-effect rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-zinc-100 mb-4">Not Sure Which Service You Need?</h3>
            <p className="text-zinc-300 leading-relaxed mb-6">
              Our experts are here to help you choose the perfect service for your vehicle. Contact us for a free
              consultation and personalized recommendation based on your car's specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-amber-500 hover:bg-amber-600 text-zinc-900">
                <Link href="/contact">Get Free Consultation</Link>
              </Button>
              <Button asChild variant="outline" className="border-zinc-600 text-zinc-300 bg-transparent">
                <Link href="/">Take Our Survey</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
