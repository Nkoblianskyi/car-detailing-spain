import { Card, CardContent } from "@/components/ui/card"

export function AboutTeam() {
  const team = [
    {
      name: "Carlos Mendez",
      role: "Founder & Master Detailer",
      experience: "8+ years",
      specialization: "Ceramic Coatings & Paint Correction",
      description:
        "Carlos brings international expertise to Elite Auto Detailing, having trained with master craftsmen across Europe. His passion for automotive perfection and commitment to excellence drives our company's vision.",
    },
    {
      name: "Maria Rodriguez",
      role: "Senior Detailing Specialist",
      experience: "5+ years",
      specialization: "Interior Restoration & Leather Care",
      description:
        "Maria's meticulous attention to detail and expertise in interior care has made her an invaluable member of our team. She specializes in bringing even the most worn interiors back to showroom condition.",
    },
    {
      name: "Antonio Garcia",
      role: "Paint Correction Expert",
      experience: "6+ years",
      specialization: "Paint Correction & Polishing",
      description:
        "Antonio's artistic eye and technical precision make him our go-to expert for paint correction. His ability to restore damaged paint to perfection has earned him recognition throughout the industry.",
    },
  ]

  return (
    <section className="py-20 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-zinc-100 mb-6">
            Meet Our
            <span className="block gradient-text">Expert Team</span>
          </h2>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed">
            Our team of certified professionals brings decades of combined experience and unwavering dedication to
            automotive excellence. Each member is passionate about their craft and committed to delivering exceptional
            results.
          </p>
        </div>

        <div className="space-y-8">
          {team.map((member, index) => (
            <Card key={index} className="glass-effect border-zinc-700">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-center">
                  <div className="lg:col-span-1">
                    <div className="w-32 h-32 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mx-auto lg:mx-0">
                      <span className="text-zinc-900 font-bold text-2xl">
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                  </div>
                  <div className="lg:col-span-3 space-y-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-zinc-100">{member.name}</h3>
                      <p className="text-amber-400 font-medium">{member.role}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-zinc-400">Experience: </span>
                        <span className="text-zinc-300 font-medium">{member.experience}</span>
                      </div>
                      <div>
                        <span className="text-zinc-400">Specialization: </span>
                        <span className="text-zinc-300 font-medium">{member.specialization}</span>
                      </div>
                    </div>
                    <p className="text-zinc-300 leading-relaxed">{member.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="glass-effect border-zinc-700 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-zinc-100 mb-4">Continuous Excellence</h3>
              <p className="text-zinc-300 leading-relaxed mb-6">
                Our team regularly attends industry training sessions, workshops, and certification programs to stay
                current with the latest techniques and technologies. This commitment to continuous learning ensures we
                always deliver cutting-edge solutions and maintain our position as industry leaders.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text mb-2">50+</div>
                  <div className="text-zinc-400">Training Hours Annually</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text mb-2">15+</div>
                  <div className="text-zinc-400">Industry Certifications</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text mb-2">100%</div>
                  <div className="text-zinc-400">Customer Satisfaction</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
