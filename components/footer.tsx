import Link from "next/link"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { companyInfo } from "@/lib/mock-data"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-zinc-900 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center">
                <Image src="/favicon.ico" alt="Logo" width={24} height={24} />
              </div>
              <span className="font-serif font-bold text-xl text-zinc-100">Elite Auto Detailing</span>
            </div>
            <p className="text-zinc-400 text-sm">
              Premium car detailing services in Spain. We bring your vehicle back to showroom condition with
              professional care and attention to detail.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-zinc-100">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/services" className="block text-zinc-400 hover:text-amber-400 transition-colors text-sm">
                Our Services
              </Link>
              <Link href="/about" className="block text-zinc-400 hover:text-amber-400 transition-colors text-sm">
                About Us
              </Link>
              <Link href="/tips" className="block text-zinc-400 hover:text-amber-400 transition-colors text-sm">
                Car Care Tips
              </Link>
              <Link href="/contact" className="block text-zinc-400 hover:text-amber-400 transition-colors text-sm">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-zinc-100">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                <span className="text-zinc-400 text-sm">{companyInfo.address}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span className="text-zinc-400 text-sm">{companyInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span className="text-zinc-400 text-sm">{companyInfo.email}</span>
              </div>
            </div>
          </div>

          {/* Hours & Social */}
          <div className="space-y-4">
            <h3 className="font-semibold text-zinc-100">Hours & Social</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Clock className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                <div className="text-zinc-400 text-sm">
                  <div>Mon-Fri: {companyInfo.hours.weekdays}</div>
                  <div>Sat: {companyInfo.hours.saturday}</div>
                  <div>Sun: {companyInfo.hours.sunday}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-zinc-400 text-sm">© 2025 Elite Auto Detailing Spain. All rights reserved.</p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-zinc-400 hover:text-amber-400 transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="/cookies" className="text-zinc-400 hover:text-amber-400 transition-colors text-sm">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
