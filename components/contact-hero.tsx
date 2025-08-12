import { Phone, Mail, MapPin } from "lucide-react"

export function ContactHero() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-b from-zinc-950 to-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Phone className="w-6 h-6 text-amber-400" />
            <span className="text-amber-400 font-medium uppercase tracking-wider text-sm">Contact Us</span>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-zinc-100 mb-6 leading-tight">
            Book Your
            <span className="block gradient-text">Service Today</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Ready to transform your vehicle? Get in touch with our team to schedule your premium detailing service or
            ask any questions about our car care solutions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-12">
            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center">
                <Phone className="w-8 h-8 text-amber-400" />
              </div>
              <h3 className="font-semibold text-zinc-100">Call Us</h3>
              <p className="text-zinc-400 text-sm text-center">Speak directly with our experts</p>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center">
                <Mail className="w-8 h-8 text-amber-400" />
              </div>
              <h3 className="font-semibold text-zinc-100">Email Us</h3>
              <p className="text-zinc-400 text-sm text-center">Get detailed information and quotes</p>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center">
                <MapPin className="w-8 h-8 text-amber-400" />
              </div>
              <h3 className="font-semibold text-zinc-100">Visit Us</h3>
              <p className="text-zinc-400 text-sm text-center">Located in the heart of Madrid</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
