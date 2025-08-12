"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, Send, ArrowRight } from "lucide-react"
import { companyInfo } from "@/lib/mock-data"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Redirect to full contact page for complete booking
    window.location.href = `/contact?service=${formData.service}&name=${formData.name}&email=${formData.email}&phone=${formData.phone}&message=${formData.message}`
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section className="py-20 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-zinc-100 mb-6">
            Get In
            <span className="block gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your vehicle? Contact us today to schedule your premium detailing service or ask any
            questions you might have.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Quick Contact Form */}
          <Card className="glass-effect border-zinc-700">
            <CardContent className="p-8">
              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-zinc-100 mb-2">Quick Contact</h3>
                <p className="text-zinc-400">
                  Get started with a quick message, or use our full booking form for detailed scheduling.
                </p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-zinc-300 mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-zinc-800 border-zinc-600 text-zinc-100"
                      placeholder="+34 XXX XXX XXX"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-zinc-300 mb-2">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-zinc-800 border border-zinc-600 text-zinc-100 rounded-md px-3 py-2"
                    >
                      <option value="">Select a service</option>
                      <option value="ceramic-coating">Ceramic Coating</option>
                      <option value="paint-correction">Paint Correction</option>
                      <option value="interior-detailing">Interior Detailing</option>
                      <option value="full-detail">Premium Full Detail</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="bg-zinc-800 border-zinc-600 text-zinc-100"
                    placeholder="Tell us about your vehicle and what you're looking for..."
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button type="submit" className="flex-1 bg-amber-500 hover:bg-amber-600 text-zinc-900">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="flex-1 border-zinc-600 text-zinc-300 hover:bg-zinc-800 bg-transparent"
                  >
                    <Link href="/contact" className="flex items-center justify-center space-x-2">
                      <span>Full Booking Form</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="glass-effect border-zinc-700">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-zinc-100 mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-amber-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-zinc-100 mb-1">Address</h4>
                      <p className="text-zinc-300">{companyInfo.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-amber-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-zinc-100 mb-1">Phone</h4>
                      <p className="text-zinc-300">{companyInfo.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-amber-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-zinc-100 mb-1">Email</h4>
                      <p className="text-zinc-300">{companyInfo.email}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-amber-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-zinc-100 mb-1">Hours</h4>
                      <div className="text-zinc-300 space-y-1">
                        <p>Mon-Fri: {companyInfo.hours.weekdays}</p>
                        <p>Saturday: {companyInfo.hours.saturday}</p>
                        <p>Sunday: {companyInfo.hours.sunday}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect border-zinc-700">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-zinc-100 mb-4">Why Choose Us?</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-amber-400 rounded-full" />
                    <span className="text-zinc-300">Premium products and equipment</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-amber-400 rounded-full" />
                    <span className="text-zinc-300">Experienced and certified technicians</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-amber-400 rounded-full" />
                    <span className="text-zinc-300">100% satisfaction guarantee</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-amber-400 rounded-full" />
                    <span className="text-zinc-300">Flexible scheduling options</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
