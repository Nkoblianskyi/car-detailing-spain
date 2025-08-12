"use client"

import { CheckCircle, X, Calendar, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface SuccessModalProps {
  isOpen: boolean
  onClose: () => void
  serviceName: string
}

export function SuccessModal({ isOpen, onClose, serviceName }: SuccessModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <Card className="relative glass-effect border-zinc-700 max-w-md w-full animate-fade-in-up">
        <CardContent className="p-8">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Success Content */}
          <div className="text-center space-y-6">
            {/* Success Icon */}
            <div className="flex justify-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-green-400" />
              </div>
            </div>

            {/* Success Message */}
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold text-zinc-100">Booking Successful!</h2>
              <p className="text-zinc-300">
                Thank you for choosing Elite Auto Detailing. Your booking request for{" "}
                <span className="text-amber-400 font-medium">{serviceName}</span> has been received.
              </p>
            </div>

            {/* Next Steps */}
            <div className="bg-zinc-800/50 rounded-lg p-4 space-y-3">
              <h3 className="font-semibold text-zinc-100 text-sm uppercase tracking-wider">What happens next?</h3>
              <div className="space-y-2 text-sm text-zinc-300">
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-2 flex-shrink-0" />
                  <span>We'll review your request within 2 hours</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-2 flex-shrink-0" />
                  <span>Our team will contact you to confirm details</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-2 flex-shrink-0" />
                  <span>We'll schedule your service at your convenience</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button onClick={onClose} className="flex-1 bg-amber-500 hover:bg-amber-600 text-zinc-900">
                <Calendar className="w-4 h-4 mr-2" />
                Continue Browsing
              </Button>
            </div>

            {/* Contact Info */}
            <div className="text-center text-sm text-zinc-400">
              Questions? Call us at <span className="text-amber-400 font-medium">+34915486952</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
