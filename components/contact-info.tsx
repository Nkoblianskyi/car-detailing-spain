import { MapPin, Phone, Mail, Clock, Instagram, Facebook, MessageCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { companyInfo } from "@/lib/mock-data"

export function ContactInfo() {
  return (
    <div className="space-y-8">
      {/* Contact Information */}
      <Card className="glass-effect border-zinc-700">
        <CardHeader>
          <CardTitle className="text-2xl text-zinc-100">Contact Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
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
              <h4 className="font-medium text-zinc-100 mb-1">Business Hours</h4>
              <div className="text-zinc-300 space-y-1">
                <p>Mon-Fri: {companyInfo.hours.weekdays}</p>
                <p>Saturday: {companyInfo.hours.saturday}</p>
                <p>Sunday: {companyInfo.hours.sunday}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>


      {/* Why Choose Us */}
      <Card className="glass-effect border-zinc-700">
        <CardHeader>
          <CardTitle className="text-xl text-zinc-100">Why Choose Elite Auto Detailing?</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-zinc-100">Premium Products</h4>
                <p className="text-zinc-400 text-sm">We use only the highest quality products from trusted brands</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-zinc-100">Expert Technicians</h4>
                <p className="text-zinc-400 text-sm">Certified professionals with years of experience</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-zinc-100">Satisfaction Guarantee</h4>
                <p className="text-zinc-400 text-sm">100% satisfaction guaranteed or we'll make it right</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-zinc-100">Flexible Scheduling</h4>
                <p className="text-zinc-400 text-sm">We work around your schedule for maximum convenience</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
