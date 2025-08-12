import { Star, Quote } from "lucide-react"
import { testimonials } from "@/lib/mock-data"

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Quote className="w-6 h-6 text-amber-400" />
            <span className="text-amber-400 font-medium uppercase tracking-wider text-sm">Testimonials</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-zinc-100 mb-6">
            What Our Clients
            <span className="block gradient-text">Say</span>
          </h2>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied customers have to say about our premium detailing
            services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="glass-effect rounded-lg p-8 hover:bg-zinc-800/50 transition-colors duration-300"
            >
              <div className="space-y-6">
                {/* Stars */}
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-zinc-300 text-lg leading-relaxed italic">"{testimonial.text}"</blockquote>

                {/* Author Info */}
                <div className="border-t border-zinc-700 pt-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-semibold text-zinc-100">{testimonial.name}</div>
                      <div className="text-zinc-400 text-sm">{testimonial.location}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-amber-400 text-sm font-medium">Service:</div>
                      <div className="text-zinc-300 text-sm">{testimonial.service}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="space-y-2">
              <div className="text-3xl font-bold gradient-text">500+</div>
              <div className="text-zinc-400">Happy Customers</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold gradient-text">5.0</div>
              <div className="text-zinc-400">Average Rating</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold gradient-text">3+</div>
              <div className="text-zinc-400">Years Experience</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold gradient-text">100%</div>
              <div className="text-zinc-400">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
