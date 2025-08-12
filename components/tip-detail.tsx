import Link from "next/link"
import { ArrowLeft, Clock, Tag, Share2, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import type { tips } from "@/lib/mock-data"

type Tip = (typeof tips)[0]

interface TipDetailProps {
  tip: Tip
}

export function TipDetail({ tip }: TipDetailProps) {
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
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-zinc-950 to-zinc-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <div className="mb-8">
            <Button asChild variant="ghost" className="text-zinc-400 hover:text-zinc-100 p-0">
              <Link href="/tips" className="flex items-center space-x-2">
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Tips</span>
              </Link>
            </Button>
          </div>

          <div className="space-y-6">
            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-4">
              <div className={`rounded-lg px-3 py-1 flex items-center space-x-2 ${getCategoryColor(tip.category)}`}>
                <Tag className="w-4 h-4" />
                <span className="text-sm font-medium capitalize">{tip.category}</span>
              </div>
              <div className="flex items-center space-x-2 text-zinc-400">
                <Clock className="w-4 h-4" />
                <span className="text-sm">{tip.readTime}</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-zinc-100 leading-tight">{tip.title}</h1>

            {/* Excerpt */}
            <p className="text-xl text-zinc-300 leading-relaxed">{tip.excerpt}</p>

            {/* Share Button */}
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" className="border-zinc-600 text-zinc-300 bg-transparent">
                <Share2 className="w-4 h-4 mr-2" />
                Share Article
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <Card className="glass-effect border-zinc-700">
                <CardContent className="p-8 lg:p-12">
                  {/* Featured Image */}
                  <img
                    src={tip.image || "/placeholder.svg"}
                    alt={tip.title}
                    className="w-full h-64 md:h-80 object-cover rounded-lg mb-8"
                  />

                  {/* Article Content */}
                  <div className="prose prose-invert max-w-none">
                    <div className="text-zinc-300 leading-relaxed space-y-6">
                      {tip.content.split("\n\n").map((paragraph, index) => {
                        if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                          // Handle bold headings
                          return (
                            <h3 key={index} className="text-xl font-semibold text-zinc-100 mt-8 mb-4">
                              {paragraph.replace(/\*\*/g, "")}
                            </h3>
                          )
                        }
                        return (
                          <p key={index} className="text-lg leading-relaxed">
                            {paragraph}
                          </p>
                        )
                      })}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              {/* Related Tips */}
              <Card className="glass-effect border-zinc-700 sticky top-24">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-zinc-100 mb-4 flex items-center space-x-2">
                    <BookOpen className="w-5 h-5 text-amber-400" />
                    <span>More Tips</span>
                  </h3>
                  <div className="space-y-4">
                    <Link
                      href="/tips/1"
                      className="block p-3 bg-zinc-800/50 rounded-lg hover:bg-zinc-800 transition-colors"
                    >
                      <h4 className="font-medium text-zinc-100 text-sm mb-1">Ceramic Coating Maintenance</h4>
                      <p className="text-zinc-400 text-xs">5 min read</p>
                    </Link>
                    <Link
                      href="/tips/2"
                      className="block p-3 bg-zinc-800/50 rounded-lg hover:bg-zinc-800 transition-colors"
                    >
                      <h4 className="font-medium text-zinc-100 text-sm mb-1">Interior Sun Protection</h4>
                      <p className="text-zinc-400 text-xs">4 min read</p>
                    </Link>
                    <Link
                      href="/tips/3"
                      className="block p-3 bg-zinc-800/50 rounded-lg hover:bg-zinc-800 transition-colors"
                    >
                      <h4 className="font-medium text-zinc-100 text-sm mb-1">Paint Correction Timing</h4>
                      <p className="text-zinc-400 text-xs">6 min read</p>
                    </Link>
                  </div>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="w-full mt-4 border-zinc-600 text-zinc-300 bg-transparent"
                  >
                    <Link href="/tips">View All Tips</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Professional Service CTA */}
              <Card className="glass-effect border-zinc-700 border-amber-500/20 bg-amber-500/5">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-amber-400 mb-3">Need Professional Help?</h3>
                  <p className="text-zinc-300 text-sm mb-4">
                    While these tips are helpful, professional detailing ensures optimal results and long-term
                    protection.
                  </p>
                  <Button asChild className="w-full bg-amber-500 hover:bg-amber-600 text-zinc-900">
                    <Link href="/contact">Book Service</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
