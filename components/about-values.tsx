import { Shield, Heart, Zap, Award, Users, Leaf } from "lucide-react"

export function AboutValues() {
  const values = [
    {
      icon: Shield,
      title: "Uncompromising Quality",
      description:
        "We never cut corners or compromise on quality. Every service is performed to the highest standards using premium products and proven techniques.",
    },
    {
      icon: Heart,
      title: "Passion for Perfection",
      description:
        "Our team shares an unwavering passion for automotive excellence. This dedication drives us to continuously improve and exceed expectations.",
    },
    {
      icon: Zap,
      title: "Innovation & Technology",
      description:
        "We stay at the forefront of industry innovations, investing in the latest technology and techniques to deliver superior results.",
    },
    {
      icon: Award,
      title: "Professional Excellence",
      description:
        "Our certified technicians undergo continuous training to maintain the highest professional standards and deliver exceptional service.",
    },
    {
      icon: Users,
      title: "Customer-Centric Approach",
      description:
        "Every decision we make is guided by our commitment to customer satisfaction. Your vehicle's care is our highest priority.",
    },
    {
      icon: Leaf,
      title: "Environmental Responsibility",
      description:
        "We use eco-friendly products and sustainable practices wherever possible, protecting both your vehicle and our environment.",
    },
  ]

  return (
    <section className="py-20 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-zinc-100 mb-6">
            Our Core
            <span className="block gradient-text">Values</span>
          </h2>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed">
            These fundamental principles guide everything we do and define who we are as a company. They shape our
            culture, drive our decisions, and ensure we consistently deliver exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="glass-effect rounded-lg p-8 hover:bg-zinc-800/50 transition-colors duration-300 group"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-amber-500/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500/30 transition-colors">
                  <value.icon className="w-6 h-6 text-amber-400" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-zinc-100">{value.title}</h3>
                  <p className="text-zinc-300 leading-relaxed">{value.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
