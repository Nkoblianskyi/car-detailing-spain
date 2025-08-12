import Link from "next/link"
import { ArrowRight, Clock, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { tips } from "@/lib/mock-data"

export function TipsGrid() {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "maintenance":
        return "text-blue-400 bg-blue-400/20"
      case "protection":
        return "text-green-400 bg-green-400/20"
      case "restoration":
        return "text-purple-400 bg-purple-400/20"
      default:
        return "text-amber-400 bg-amber-400/20"
    }
  }

  return (
    <section className="py-20 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tips.map((tip) => (
            <Card
              key={tip.id}
              className="glass-effect border-zinc-700 overflow-hidden hover:bg-zinc-800/50 transition-colors duration-300 group"
            >
              <div className="relative">
                <img src={tip.image || "/placeholder.svg"} alt={tip.title} className="w-full h-48 object-cover" />
                <div className="absolute top-4 left-4">
                  <div className={`rounded-lg px-3 py-1 flex items-center space-x-2 ${getCategoryColor(tip.category)}`}>
                    <Tag className="w-3 h-3" />
                    <span className="text-xs font-medium capitalize">{tip.category}</span>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-zinc-900/80 backdrop-blur-sm rounded-lg px-2 py-1 flex items-center space-x-1">
                    <Clock className="w-3 h-3 text-zinc-400" />
                    <span className="text-zinc-300 text-xs">{tip.readTime}</span>
                  </div>
                </div>
              </div>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-zinc-100 leading-tight group-hover:text-amber-400 transition-colors">
                  {tip.title}
                </h3>
                <p className="text-zinc-300 leading-relaxed">{tip.excerpt}</p>
                <Button
                  asChild
                  variant="ghost"
                  className="text-amber-400 hover:text-amber-300 p-0 h-auto group-hover:translate-x-1 transition-transform"
                >
                  <Link href={`/tips/${tip.id}`} className="flex items-center space-x-2">
                    <span>Read Full Article</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="glass-effect border-zinc-700 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-zinc-100 mb-4">Need Professional Help?</h3>
              <p className="text-zinc-300 leading-relaxed mb-6">
                While these tips will help you maintain your vehicle, nothing replaces professional detailing services.
                Our experts can provide comprehensive care that goes beyond what's possible at home.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-amber-500 hover:bg-amber-600 text-zinc-900">
                  <Link href="/contact">Book Professional Service</Link>
                </Button>
                <Button asChild variant="outline" className="border-zinc-600 text-zinc-300 bg-transparent">
                  <Link href="/services">View Our Services</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
