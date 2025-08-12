import { notFound } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { TipDetail } from "@/components/tip-detail"
import { tips } from "@/lib/mock-data"

interface TipPageProps {
  params: {
    id: string
  }
}

export default function TipPage({ params }: TipPageProps) {
  const tip = tips.find((t) => t.id.toString() === params.id)

  if (!tip) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-zinc-950">
      <Navigation />
      <main>
        <TipDetail tip={tip} />
      </main>
      <Footer />
    </div>
  )
}

export function generateStaticParams() {
  return tips.map((tip) => ({
    id: tip.id.toString(),
  }))
}
