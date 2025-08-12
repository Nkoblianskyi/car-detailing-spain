import { CheckCircle, Clock, Shield, Award } from "lucide-react"

export function AboutProcess() {
  const steps = [
    {
      number: "01",
      title: "Initial Consultation",
      description:
        "We begin with a thorough consultation to understand your vehicle's needs, your expectations, and recommend the most suitable services.",
      duration: "15-30 minutes",
    },
    {
      number: "02",
      title: "Detailed Assessment",
      description:
        "Our experts conduct a comprehensive inspection of your vehicle, documenting its current condition and identifying areas that require special attention.",
      duration: "30-45 minutes",
    },
    {
      number: "03",
      title: "Service Planning",
      description:
        "Based on our assessment, we create a customized service plan tailored to your vehicle's specific needs and your preferences.",
      duration: "15 minutes",
    },
    {
      number: "04",
      title: "Professional Service",
      description:
        "Our certified technicians perform the selected services using premium products and proven techniques, ensuring exceptional results.",
      duration: "2-10 hours",
    },
    {
      number: "05",
      title: "Quality Inspection",
      description:
        "Every completed service undergoes rigorous quality inspection to ensure it meets our exacting standards before delivery.",
      duration: "30 minutes",
    },
    {
      number: "06",
      title: "Care Instructions",
      description:
        "We provide detailed care instructions and maintenance recommendations to help you preserve your vehicle's pristine condition.",
      duration: "15 minutes",
    },
  ]

  return (
    <section className="py-20 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-zinc-100 mb-6">
            Our Proven
            <span className="block gradient-text">Process</span>
          </h2>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed">
            Every vehicle receives the same meticulous attention through our systematic six-step process, ensuring
            consistent excellence and exceptional results every time.
          </p>
        </div>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-12`}
            >
              <div className="flex-1">
                <div className="glass-effect rounded-lg p-8 hover:bg-zinc-800/50 transition-colors duration-300">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-zinc-900 font-bold text-xl">{step.number}</span>
                    </div>
                    <div className="space-y-4 flex-1">
                      <div>
                        <h3 className="text-2xl font-semibold text-zinc-100 mb-2">{step.title}</h3>
                        <div className="flex items-center space-x-2 mb-4">
                          <Clock className="w-4 h-4 text-amber-400" />
                          <span className="text-amber-400 text-sm font-medium">{step.duration}</span>
                        </div>
                      </div>
                      <p className="text-zinc-300 leading-relaxed text-lg">{step.description}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex justify-center">
                <div className="w-64 h-64 bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-full flex items-center justify-center">
                  <div className="w-48 h-48 bg-zinc-800/50 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <div className="text-6xl font-bold gradient-text">{step.number}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <div className="glass-effect rounded-lg p-8 text-center">
            <h3 className="text-2xl font-semibold text-zinc-100 mb-6">Our Commitment to Excellence</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="flex flex-col items-center space-y-3">
                <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-amber-400" />
                </div>
                <h4 className="font-semibold text-zinc-100">Quality Guaranteed</h4>
                <p className="text-zinc-400 text-sm text-center">100% satisfaction guarantee on all our services</p>
              </div>
              <div className="flex flex-col items-center space-y-3">
                <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center">
                  <Shield className="w-8 h-8 text-amber-400" />
                </div>
                <h4 className="font-semibold text-zinc-100">Fully Insured</h4>
                <p className="text-zinc-400 text-sm text-center">
                  Comprehensive insurance coverage for your peace of mind
                </p>
              </div>
              <div className="flex flex-col items-center space-y-3">
                <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center">
                  <Award className="w-8 h-8 text-amber-400" />
                </div>
                <h4 className="font-semibold text-zinc-100">Certified Experts</h4>
                <p className="text-zinc-400 text-sm text-center">
                  Industry-certified professionals with proven expertise
                </p>
              </div>
              <div className="flex flex-col items-center space-y-3">
                <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center">
                  <Clock className="w-8 h-8 text-amber-400" />
                </div>
                <h4 className="font-semibold text-zinc-100">Flexible Scheduling</h4>
                <p className="text-zinc-400 text-sm text-center">
                  Convenient appointment times that work with your schedule
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
