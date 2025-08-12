import Link from "next/link"
import { ArrowRight, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { tips } from "@/lib/mock-data"

export function TipsSection() {
  const featuredTips = tips.slice(0, 3)

  return (
    <section className="py-20 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <BookOpen className="w-6 h-6 text-amber-400" />
            <span className="text-amber-400 font-medium uppercase tracking-wider text-sm">Expert Tips</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-zinc-100 mb-6">
            Car Care
            <span className="block gradient-text">Knowledge</span>
          </h2>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed">
            Learn from our experts with practical tips and insights to keep your vehicle in perfect condition between
            professional services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {featuredTips.map((tip) => (
            <div
              key={tip.id}
              className="glass-effect rounded-lg overflow-hidden hover:bg-zinc-800/50 transition-colors duration-300"
            >
              <img src={tip.image || "/placeholder.svg"} alt={tip.title} className="w-full h-48 object-cover" />
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-amber-400 text-sm font-medium uppercase tracking-wider">{tip.category}</span>
                  <span className="text-zinc-400 text-sm">{tip.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold text-zinc-100 leading-tight">{tip.title}</h3>
                <p className="text-zinc-300 leading-relaxed">{tip.excerpt}</p>
                <Button asChild variant="ghost" className="text-amber-400 hover:text-amber-300 p-0 h-auto">
                  <Link href={`/tips/${tip.id}`} className="flex items-center space-x-2">
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-zinc-900 bg-transparent"
          >
            <Link href="/tips" className="flex items-center space-x-2">
              <span>View All Tips</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
