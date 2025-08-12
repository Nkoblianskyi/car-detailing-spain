"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Send, Calendar, Car } from "lucide-react"
import { services } from "@/lib/mock-data"
import { SuccessModal } from "@/components/success-modal"

export function ContactForm() {
  const searchParams = useSearchParams()
  const serviceParam = searchParams.get("service")

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: serviceParam || "",
    vehicleInfo: "",
    preferredDate: "",
    message: "",
  })

  const [showSuccess, setShowSuccess] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Update service if URL param changes
  useEffect(() => {
    if (serviceParam) {
      setFormData((prev) => ({ ...prev, service: serviceParam }))
    }
  }, [serviceParam])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    console.log("Booking submitted:", formData)
    setIsSubmitting(false)
    setShowSuccess(true)

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: serviceParam || "",
      vehicleInfo: "",
      preferredDate: "",
      message: "",
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const selectedService = services.find((s) => s.id === formData.service)

  return (
    <>
      <Card className="glass-effect border-zinc-700">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-2xl text-zinc-100">
            <Calendar className="w-6 h-6 text-amber-400" />
            <span>Book Your Service</span>
          </CardTitle>
          {selectedService && (
            <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4 mt-4">
              <div className="flex items-center space-x-2 mb-2">
                <Car className="w-5 h-5 text-amber-400" />
                <span className="text-amber-400 font-medium">Selected Service</span>
              </div>
              <h3 className="text-zinc-100 font-semibold">{selectedService.title}</h3>
              <p className="text-zinc-300 text-sm mt-1">{selectedService.description}</p>
            </div>
          )}
        </CardHeader>
        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-zinc-100">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-zinc-800 border-zinc-600 text-zinc-100"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-zinc-800 border-zinc-600 text-zinc-100"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-zinc-300 mb-2">
                  Phone Number *
                </label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="bg-zinc-800 border-zinc-600 text-zinc-100"
                  placeholder="+34 XXX XXX XXX"
                />
              </div>
            </div>

            {/* Service Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-zinc-100">Service Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-zinc-300 mb-2">
                    Service Required *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full bg-zinc-800 border border-zinc-600 text-zinc-100 rounded-md px-3 py-2"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service.id} value={service.id}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="preferredDate" className="block text-sm font-medium text-zinc-300 mb-2">
                    Preferred Date
                  </label>
                  <Input
                    id="preferredDate"
                    name="preferredDate"
                    type="date"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className="bg-zinc-800 border-zinc-600 text-zinc-100"
                    min={new Date().toISOString().split("T")[0]}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="vehicleInfo" className="block text-sm font-medium text-zinc-300 mb-2">
                  Vehicle Information
                </label>
                <Input
                  id="vehicleInfo"
                  name="vehicleInfo"
                  value={formData.vehicleInfo}
                  onChange={handleChange}
                  className="bg-zinc-800 border-zinc-600 text-zinc-100"
                  placeholder="e.g., 2020 BMW X5, Black"
                />
              </div>
            </div>

            {/* Additional Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-zinc-100">Additional Information</h3>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-2">
                  Special Requirements or Questions
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="bg-zinc-800 border-zinc-600 text-zinc-100"
                  placeholder="Tell us about any specific concerns, requirements, or questions you have..."
                />
              </div>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-amber-500 hover:bg-amber-600 text-zinc-900"
              size="lg"
            >
              {isSubmitting ? (
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 border-2 border-zinc-900 border-t-transparent rounded-full animate-spin" />
                  <span>Submitting...</span>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <Send className="w-5 h-5" />
                  <span>Book Service</span>
                </div>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>

      <SuccessModal
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
        serviceName={selectedService?.title || "your selected service"}
      />
    </>
  )
}
