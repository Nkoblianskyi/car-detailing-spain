"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Cookie, Settings, X } from "lucide-react"

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState({
    essential: true, // Always true, cannot be disabled
    performance: false,
    functionality: false,
    marketing: false,
  })

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem("cookie-consent")
    if (!cookieConsent) {
      setShowBanner(true)
    }
  }, [])

  const acceptAll = () => {
    const allAccepted = {
      essential: true,
      performance: true,
      functionality: true,
      marketing: true,
    }
    setPreferences(allAccepted)
    localStorage.setItem("cookie-consent", JSON.stringify(allAccepted))
    setShowBanner(false)
    setShowSettings(false)
  }

  const acceptSelected = () => {
    localStorage.setItem("cookie-consent", JSON.stringify(preferences))
    setShowBanner(false)
    setShowSettings(false)
  }

  const rejectAll = () => {
    const essentialOnly = {
      essential: true,
      performance: false,
      functionality: false,
      marketing: false,
    }
    setPreferences(essentialOnly)
    localStorage.setItem("cookie-consent", JSON.stringify(essentialOnly))
    setShowBanner(false)
    setShowSettings(false)
  }

  const handlePreferenceChange = (type: keyof typeof preferences) => {
    if (type === "essential") return // Essential cookies cannot be disabled
    setPreferences((prev) => ({
      ...prev,
      [type]: !prev[type],
    }))
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <Card className="glass-effect border-zinc-700 max-w-4xl mx-auto">
        <CardContent className="p-6">
          {!showSettings ? (
            // Main banner
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
              <div className="flex items-start space-x-3 flex-1">
                <Cookie className="w-6 h-6 text-amber-400 mt-1 flex-shrink-0" />
                <div className="space-y-2">
                  <h3 className="font-semibold text-zinc-100">We use cookies</h3>
                  <p className="text-zinc-300 text-sm leading-relaxed">
                    We use cookies to enhance your browsing experience, serve personalized content, and analyze our
                    traffic. By clicking "Accept All", you consent to our use of cookies. You can manage your
                    preferences or learn more in our{" "}
                    <Link href="/cookies" className="text-amber-400 hover:text-amber-300 underline">
                      Cookie Policy
                    </Link>
                    .
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowSettings(true)}
                  className="border-zinc-600 text-zinc-300 hover:bg-zinc-800 bg-transparent"
                >
                  <Settings className="w-4 h-4 mr-2" />
                  Customize
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={rejectAll}
                  className="border-zinc-600 text-zinc-300 hover:bg-zinc-800 bg-transparent"
                >
                  Reject All
                </Button>
                <Button size="sm" onClick={acceptAll} className="bg-amber-500 hover:bg-amber-600 text-zinc-900">
                  Accept All
                </Button>
              </div>
            </div>
          ) : (
            // Settings panel
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-zinc-100">Cookie Preferences</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowSettings(false)}
                  className="text-zinc-400 hover:text-zinc-100"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-zinc-800/50 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium text-zinc-100">Essential Cookies</h4>
                    <p className="text-zinc-400 text-sm">
                      Required for the website to function properly. Cannot be disabled.
                    </p>
                  </div>
                  <div className="ml-4">
                    <div className="w-12 h-6 bg-amber-500 rounded-full flex items-center justify-end px-1">
                      <div className="w-4 h-4 bg-white rounded-full" />
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-zinc-800/30 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium text-zinc-100">Performance Cookies</h4>
                    <p className="text-zinc-400 text-sm">Help us understand how visitors interact with our website.</p>
                  </div>
                  <div className="ml-4">
                    <button
                      onClick={() => handlePreferenceChange("performance")}
                      className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${
                        preferences.performance ? "bg-amber-500 justify-end" : "bg-zinc-600 justify-start"
                      }`}
                    >
                      <div className="w-4 h-4 bg-white rounded-full" />
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-zinc-800/30 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium text-zinc-100">Functionality Cookies</h4>
                    <p className="text-zinc-400 text-sm">Remember your preferences and provide enhanced features.</p>
                  </div>
                  <div className="ml-4">
                    <button
                      onClick={() => handlePreferenceChange("functionality")}
                      className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${
                        preferences.functionality ? "bg-amber-500 justify-end" : "bg-zinc-600 justify-start"
                      }`}
                    >
                      <div className="w-4 h-4 bg-white rounded-full" />
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-zinc-800/30 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium text-zinc-100">Marketing Cookies</h4>
                    <p className="text-zinc-400 text-sm">
                      Used to deliver relevant advertisements and measure their effectiveness.
                    </p>
                  </div>
                  <div className="ml-4">
                    <button
                      onClick={() => handlePreferenceChange("marketing")}
                      className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${
                        preferences.marketing ? "bg-amber-500 justify-end" : "bg-zinc-600 justify-start"
                      }`}
                    >
                      <div className="w-4 h-4 bg-white rounded-full" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  variant="outline"
                  onClick={rejectAll}
                  className="flex-1 border-zinc-600 text-zinc-300 hover:bg-zinc-800 bg-transparent"
                >
                  Reject All
                </Button>
                <Button onClick={acceptSelected} className="flex-1 bg-amber-500 hover:bg-amber-600 text-zinc-900">
                  Save Preferences
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
