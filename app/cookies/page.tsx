import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { LegalPageHeader } from "@/components/legal-page-header"
import { Card, CardContent } from "@/components/ui/card"

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Navigation />
      <main>
        <LegalPageHeader
          title="Cookie Policy"
          description="How we use cookies and similar technologies on our website"
          lastUpdated="2025"
        />
        <section className="py-20 bg-zinc-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="glass-effect border-zinc-700">
              <CardContent className="p-8 lg:p-12">
                <div className="prose prose-invert max-w-none">
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-2xl font-semibold text-zinc-100 mb-4">1. What Are Cookies?</h2>
                      <div className="space-y-4 text-zinc-300">
                        <p>
                          Cookies are small text files that are stored on your device when you visit our website. They
                          help us provide you with a better experience by remembering your preferences and understanding
                          how you use our site.
                        </p>
                        <p>
                          Similar technologies include web beacons, pixels, and local storage, which serve similar
                          purposes to cookies.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-2xl font-semibold text-zinc-100 mb-4">2. Types of Cookies We Use</h2>
                      <div className="space-y-6 text-zinc-300">
                        <div>
                          <h3 className="text-lg font-medium text-zinc-200 mb-3">Essential Cookies</h3>
                          <p>
                            These cookies are necessary for the website to function properly. They enable basic
                            functions like page navigation, access to secure areas, and form submissions. The website
                            cannot function properly without these cookies.
                          </p>
                          <div className="bg-zinc-800/50 rounded-lg p-4 mt-3">
                            <p className="text-sm">
                              <strong>Examples:</strong> Session management, security tokens, load balancing
                            </p>
                          </div>
                        </div>

                        <div>
                          <h3 className="text-lg font-medium text-zinc-200 mb-3">Performance Cookies</h3>
                          <p>
                            These cookies collect information about how visitors use our website, such as which pages
                            are visited most often and if users get error messages. This information helps us improve
                            how our website works.
                          </p>
                          <div className="bg-zinc-800/50 rounded-lg p-4 mt-3">
                            <p className="text-sm">
                              <strong>Examples:</strong> Google Analytics, page load times, error tracking
                            </p>
                          </div>
                        </div>

                        <div>
                          <h3 className="text-lg font-medium text-zinc-200 mb-3">Functionality Cookies</h3>
                          <p>
                            These cookies allow the website to remember choices you make and provide enhanced, more
                            personal features. They may be set by us or by third-party providers whose services we have
                            added to our pages.
                          </p>
                          <div className="bg-zinc-800/50 rounded-lg p-4 mt-3">
                            <p className="text-sm">
                              <strong>Examples:</strong> Language preferences, region selection, user interface
                              customization
                            </p>
                          </div>
                        </div>

                        <div>
                          <h3 className="text-lg font-medium text-zinc-200 mb-3">Marketing Cookies</h3>
                          <p>
                            These cookies are used to deliver advertisements more relevant to you and your interests.
                            They are also used to limit the number of times you see an advertisement and help measure
                            the effectiveness of advertising campaigns.
                          </p>
                          <div className="bg-zinc-800/50 rounded-lg p-4 mt-3">
                            <p className="text-sm">
                              <strong>Examples:</strong> Social media pixels, retargeting ads, conversion tracking
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-2xl font-semibold text-zinc-100 mb-4">3. Third-Party Cookies</h2>
                      <div className="space-y-4 text-zinc-300">
                        <p>
                          Some cookies on our website are set by third-party services. We use these services to enhance
                          your experience and provide additional functionality:
                        </p>
                        <div className="space-y-4">
                          <div className="bg-zinc-800/50 rounded-lg p-4">
                            <h4 className="font-medium text-zinc-200 mb-2">Google Analytics</h4>
                            <p className="text-sm">
                              We use Google Analytics to understand how visitors interact with our website. This helps
                              us improve our content and user experience.
                            </p>
                          </div>
                          <div className="bg-zinc-800/50 rounded-lg p-4">
                            <h4 className="font-medium text-zinc-200 mb-2">Social Media Platforms</h4>
                            <p className="text-sm">
                              Social media cookies enable you to share content and interact with social media features
                              on our website.
                            </p>
                          </div>
                          <div className="bg-zinc-800/50 rounded-lg p-4">
                            <h4 className="font-medium text-zinc-200 mb-2">Customer Support Tools</h4>
                            <p className="text-sm">
                              We use customer support platforms that may set cookies to provide you with better
                              assistance.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-2xl font-semibold text-zinc-100 mb-4">4. Managing Your Cookie Preferences</h2>
                      <div className="space-y-4 text-zinc-300">
                        <p>You have several options for managing cookies and your privacy preferences:</p>
                        <div className="space-y-4">
                          <div>
                            <h3 className="text-lg font-medium text-zinc-200 mb-3">Cookie Banner</h3>
                            <p>
                              When you first visit our website, you'll see a cookie banner that allows you to accept or
                              decline non-essential cookies. You can change your preferences at any time by clicking the
                              cookie settings link in our footer.
                            </p>
                          </div>
                          <div>
                            <h3 className="text-lg font-medium text-zinc-200 mb-3">Browser Settings</h3>
                            <p>
                              Most web browsers allow you to control cookies through their settings. You can usually
                              find these settings in the "Options" or "Preferences" menu of your browser.
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                              <li>Block all cookies</li>
                              <li>Block third-party cookies</li>
                              <li>Delete cookies when you close your browser</li>
                              <li>Get notified when cookies are set</li>
                            </ul>
                          </div>
                          <div>
                            <h3 className="text-lg font-medium text-zinc-200 mb-3">Third-Party Opt-Outs</h3>
                            <p>You can opt out of specific third-party services:</p>
                            <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                              <li>
                                Google Analytics:{" "}
                                <a
                                  href="https://tools.google.com/dlpage/gaoptout"
                                  className="text-amber-400 hover:text-amber-300 underline"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  Google Analytics Opt-out Browser Add-on
                                </a>
                              </li>
                              <li>
                                Advertising cookies:{" "}
                                <a
                                  href="http://www.youronlinechoices.eu/"
                                  className="text-amber-400 hover:text-amber-300 underline"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  Your Online Choices
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-2xl font-semibold text-zinc-100 mb-4">5. Impact of Disabling Cookies</h2>
                      <div className="space-y-4 text-zinc-300">
                        <p>
                          While you can disable cookies, please note that doing so may affect your experience on our
                          website:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                          <li>Some features may not work properly</li>
                          <li>You may need to re-enter information more frequently</li>
                          <li>Personalized content and recommendations may not be available</li>
                          <li>We may not be able to remember your preferences</li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-2xl font-semibold text-zinc-100 mb-4">6. Updates to This Policy</h2>
                      <div className="space-y-4 text-zinc-300">
                        <p>
                          We may update this Cookie Policy from time to time to reflect changes in our practices or for
                          other operational, legal, or regulatory reasons. We will notify you of any material changes by
                          posting the updated policy on our website.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-2xl font-semibold text-zinc-100 mb-4">7. Contact Us</h2>
                      <div className="space-y-4 text-zinc-300">
                        <p>
                          If you have any questions about our use of cookies or this Cookie Policy, please contact us:
                        </p>
                        <div className="bg-zinc-800/50 rounded-lg p-4 mt-4">
                          <p>
                            <strong>Elite Auto Detailing Spain</strong>
                          </p>
                          <p>Calle de Alcalá 123, 28009 Madrid, Spain</p>
                          <p>Email: privacy@eliteautodetailingspain.com</p>
                          <p>Phone: +34915486952</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
