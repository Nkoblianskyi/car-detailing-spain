import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { services } from "@/lib/mock-data"

export function ServicesSection() {
  const featuredServices = services.slice(0, 3)

  return (
    <section className="py-20 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Sparkles className="w-6 h-6 text-amber-400" />
            <span className="text-amber-400 font-medium uppercase tracking-wider text-sm">Our Services</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-zinc-100 mb-6">
            Premium Car Care
            <span className="block gradient-text">Solutions</span>
          </h2>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed">
            From ceramic coating to complete detailing, we offer comprehensive services to keep your vehicle in pristine
            condition.
          </p>
        </div>

        {/* Featured Services */}
        <div className="space-y-8 mb-12">
          {featuredServices.map((service, index) => (
            <div
              key={service.id}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-8 lg:gap-12`}
            >
              <div className="flex-1">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-80 object-cover rounded-lg shadow-2xl"
                />
              </div>
              <div className="flex-1 space-y-6">
                <div className="space-y-4">
                  <h3 className="font-serif text-3xl font-bold text-zinc-100">{service.title}</h3>
                  <p className="text-zinc-300 text-lg leading-relaxed">{service.description}</p>
                </div>
                <div className="space-y-3">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-amber-400 rounded-full" />
                      <span className="text-zinc-400">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button
                  asChild
                  variant="outline"
                  className="border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-zinc-900 bg-transparent"
                >
                  <Link href={`/services/${service.id}`} className="flex items-center space-x-2">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Services CTA */}
        <div className="text-center">
          <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-zinc-900">
            <Link href="/services" className="flex items-center space-x-2">
              <span>View All Services</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
