import Link from "next/link"
import { ArrowLeft, Clock, Shield, CheckCircle, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import type { Service } from "@/lib/mock-data"

interface ServiceDetailProps {
  service: Service
}

export function ServiceDetail({ service }: ServiceDetailProps) {
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

  const IconComponent = getCategoryIcon(service.category)
  const categoryColor = getCategoryColor(service.category)

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-zinc-950 to-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <div className="mb-8">
            <Button asChild variant="ghost" className="text-zinc-400 hover:text-zinc-100 p-0">
              <Link href="/services" className="flex items-center space-x-2">
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Services</span>
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <IconComponent className={`w-6 h-6 ${categoryColor}`} />
                <span className={`font-medium capitalize ${categoryColor}`}>{service.category}</span>
              </div>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-zinc-100 leading-tight">{service.title}</h1>
              <p className="text-xl text-zinc-300 leading-relaxed">{service.description}</p>
              <div className="flex items-center space-x-4 text-zinc-400">
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5" />
                  <span>{service.duration}</span>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <img
                src={service.image || "/placeholder.svg"}
                alt={service.title}
                className="w-full h-96 object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Content */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <Card className="glass-effect border-zinc-700">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-semibold text-zinc-100 mb-4">Service Overview</h2>
                  <p className="text-zinc-300 leading-relaxed text-lg">{service.longDescription}</p>
                </CardContent>
              </Card>

              {/* Features */}
              <Card className="glass-effect border-zinc-700">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-semibold text-zinc-100 mb-6">What's Included</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-zinc-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Process */}
              <Card className="glass-effect border-zinc-700">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-semibold text-zinc-100 mb-6">Our Process</h2>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-zinc-900 font-bold text-sm flex-shrink-0">
                        1
                      </div>
                      <div>
                        <h3 className="font-semibold text-zinc-100 mb-2">Initial Assessment</h3>
                        <p className="text-zinc-300">
                          We thoroughly inspect your vehicle to assess its current condition and determine the best
                          approach for optimal results.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-zinc-900 font-bold text-sm flex-shrink-0">
                        2
                      </div>
                      <div>
                        <h3 className="font-semibold text-zinc-100 mb-2">Preparation & Cleaning</h3>
                        <p className="text-zinc-300">
                          Your vehicle is carefully prepared and cleaned using professional-grade products and
                          techniques to ensure the best foundation for our work.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-zinc-900 font-bold text-sm flex-shrink-0">
                        3
                      </div>
                      <div>
                        <h3 className="font-semibold text-zinc-100 mb-2">Service Application</h3>
                        <p className="text-zinc-300">
                          Our certified technicians perform the selected service using premium products and proven
                          techniques for exceptional results.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-zinc-900 font-bold text-sm flex-shrink-0">
                        4
                      </div>
                      <div>
                        <h3 className="font-semibold text-zinc-100 mb-2">Quality Check & Delivery</h3>
                        <p className="text-zinc-300">
                          We conduct a thorough quality inspection and provide you with care instructions to maintain
                          your vehicle's pristine condition.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Booking Card */}
              <Card className="glass-effect border-zinc-700 sticky top-24">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-zinc-100 mb-4">Book This Service</h3>
                  <p className="text-zinc-300 mb-6">
                    Ready to transform your vehicle? Contact us to schedule your {service.title} service.
                  </p>
                  <div className="space-y-4">
                    <Button asChild className="w-full bg-amber-500 hover:bg-amber-600 text-zinc-900" size="lg">
                      <Link href="/contact" className="flex items-center justify-center space-x-2">
                        <Phone className="w-5 h-5" />
                        <span>Book Now</span>
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-zinc-600 text-zinc-300 hover:bg-zinc-800 bg-transparent"
                    >
                      <Link href="/contact">Get Quote</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Service Details */}
              <Card className="glass-effect border-zinc-700">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-zinc-100 mb-4">Service Details</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-zinc-400">Duration:</span>
                      <span className="text-zinc-100 font-medium">{service.duration}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-zinc-400">Category:</span>
                      <span className={`font-medium capitalize ${categoryColor}`}>{service.category}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-zinc-400">Warranty:</span>
                      <span className="text-zinc-100 font-medium">Satisfaction Guaranteed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Why Choose Us */}
              <Card className="glass-effect border-zinc-700">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-zinc-100 mb-4">Why Choose Us</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-amber-400 rounded-full" />
                      <span className="text-zinc-300">Certified professionals</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-amber-400 rounded-full" />
                      <span className="text-zinc-300">Premium products only</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-amber-400 rounded-full" />
                      <span className="text-zinc-300">100% satisfaction guarantee</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-amber-400 rounded-full" />
                      <span className="text-zinc-300">Flexible scheduling</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
