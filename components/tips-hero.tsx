import { BookOpen, Lightbulb } from "lucide-react"

export function TipsHero() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-b from-zinc-950 to-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <BookOpen className="w-6 h-6 text-amber-400" />
            <span className="text-amber-400 font-medium uppercase tracking-wider text-sm">Expert Tips</span>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-zinc-100 mb-6 leading-tight">
            Car Care
            <span className="block gradient-text">Knowledge Hub</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Master the art of car care with expert insights, professional techniques, and insider knowledge from our
            certified detailing specialists. Learn how to maintain your vehicle's pristine condition between
            professional services.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-12">
            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center">
                <Lightbulb className="w-8 h-8 text-amber-400" />
              </div>
              <h3 className="font-semibold text-zinc-100">Expert Insights</h3>
              <p className="text-zinc-400 text-sm text-center">
                Professional tips from certified detailing specialists
              </p>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center">
                <BookOpen className="w-8 h-8 text-amber-400" />
              </div>
              <h3 className="font-semibold text-zinc-100">Practical Guides</h3>
              <p className="text-zinc-400 text-sm text-center">Step-by-step instructions for optimal car care</p>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center">
                  <span className="text-zinc-900 font-bold text-sm">+</span>
                </div>
              </div>
              <h3 className="font-semibold text-zinc-100">Regular Updates</h3>
              <p className="text-zinc-400 text-sm text-center">Fresh content and latest industry techniques</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
