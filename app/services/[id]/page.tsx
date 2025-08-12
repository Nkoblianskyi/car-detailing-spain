import { notFound } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ServiceDetail } from "@/components/service-detail"
import { services } from "@/lib/mock-data"

interface ServicePageProps {
  params: {
    id: string
  }
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = services.find((s) => s.id === params.id)

  if (!service) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-zinc-950">
      <Navigation />
      <main>
        <ServiceDetail service={service} />
      </main>
      <Footer />
    </div>
  )
}

export function generateStaticParams() {
  return services.map((service) => ({
    id: service.id,
  }))
}
