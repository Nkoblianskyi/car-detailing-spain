import { Card, CardContent } from "@/components/ui/card"

export function AboutStory() {
  return (
    <section className="py-20 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src="/3b176908d0d48357016eadbf456a111c.jpg"
              alt="Our founder at work"
              className="w-full h-96 lg:h-[450px] object-cover rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-amber-500/20 rounded-lg backdrop-blur-sm border border-amber-500/30 flex items-center justify-center">
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-400">2025</div>
                <div className="text-amber-400 text-sm">Founded</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-zinc-100 mb-6">
                Our
                <span className="block gradient-text">Story</span>
              </h2>
              <div className="space-y-6 text-zinc-300 leading-relaxed">
                <p>
                  Elite Auto Detailing Spain was born from a passion for automotive perfection and a vision to bring
                  world-class car care services to the Spanish market. Founded in 2021 by automotive enthusiast Carlos
                  Mendez, our company emerged from years of experience in luxury automotive care across Europe.
                </p>
                <p>
                  Carlos recognized a gap in the Spanish market for truly premium detailing services that combined
                  cutting-edge technology with artisanal craftsmanship. After training with master detailers in Germany
                  and the United Kingdom, he returned to Madrid with a mission: to establish Spain's premier automotive
                  care destination.
                </p>
                <p>
                  What started as a small operation in a modest workshop has grown into a recognized leader in the
                  industry. Our commitment to excellence, continuous learning, and investment in the latest technology
                  has earned us the trust of discerning vehicle owners throughout Spain.
                </p>
              </div>
            </div>

            <Card className="glass-effect border-zinc-700">
              <CardContent className="p-6">
                <blockquote className="text-zinc-300 italic text-lg leading-relaxed">
                  "Every vehicle that enters our workshop is treated as a masterpiece waiting to be revealed. We don't
                  just clean cars; we restore their soul and protect their future."
                </blockquote>
                <div className="mt-4 text-right">
                  <div className="text-amber-400 font-medium">Carlos Mendez</div>
                  <div className="text-zinc-400 text-sm">Founder & Master Detailer</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
