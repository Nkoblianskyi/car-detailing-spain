import { Scale } from "lucide-react"

interface LegalPageHeaderProps {
  title: string
  description: string
  lastUpdated: string
}

export function LegalPageHeader({ title, description, lastUpdated }: LegalPageHeaderProps) {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-b from-zinc-950 to-zinc-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Scale className="w-6 h-6 text-amber-400" />
            <span className="text-amber-400 font-medium uppercase tracking-wider text-sm">Legal</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-zinc-100 mb-6 leading-tight">{title}</h1>
          <p className="text-xl text-zinc-300 mb-8 max-w-3xl mx-auto leading-relaxed">{description}</p>
          <div className="inline-flex items-center space-x-2 bg-zinc-800/50 rounded-lg px-4 py-2">
            <span className="text-zinc-400 text-sm">Last updated:</span>
            <span className="text-zinc-300 text-sm font-medium">{lastUpdated}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
