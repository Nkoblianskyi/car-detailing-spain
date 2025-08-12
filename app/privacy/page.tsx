import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { LegalPageHeader } from "@/components/legal-page-header"
import { Card, CardContent } from "@/components/ui/card"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Navigation />
      <main>
        <LegalPageHeader
          title="Privacy Policy"
          description="How we collect, use, and protect your personal information"
          lastUpdated="2025"
        />
        <section className="py-20 bg-zinc-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="glass-effect border-zinc-700">
              <CardContent className="p-8 lg:p-12">
                <div className="prose prose-invert max-w-none">
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-2xl font-semibold text-zinc-100 mb-4">1. Information We Collect</h2>
                      <div className="space-y-4 text-zinc-300">
                        <p>
                          At Elite Auto Detailing Spain, we collect information you provide directly to us, such as when
                          you create an account, book a service, contact us, or subscribe to our newsletter.
                        </p>
                        <h3 className="text-lg font-medium text-zinc-200 mt-6 mb-3">Personal Information</h3>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                          <li>Name and contact information (email, phone number, address)</li>
                          <li>Vehicle information (make, model, year, color)</li>
                          <li>Service preferences and booking history</li>
                          <li>Payment information (processed securely through third-party providers)</li>
                          <li>Communication preferences</li>
                        </ul>
                        <h3 className="text-lg font-medium text-zinc-200 mt-6 mb-3">
                          Automatically Collected Information
                        </h3>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                          <li>IP address and device information</li>
                          <li>Browser type and version</li>
                          <li>Pages visited and time spent on our website</li>
                          <li>Referring website information</li>
                          <li>Location data (with your consent)</li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-2xl font-semibold text-zinc-100 mb-4">2. How We Use Your Information</h2>
                      <div className="space-y-4 text-zinc-300">
                        <p>We use the information we collect to:</p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                          <li>Provide, maintain, and improve our detailing services</li>
                          <li>Process bookings and manage appointments</li>
                          <li>Send service confirmations, reminders, and updates</li>
                          <li>Respond to your comments, questions, and customer service requests</li>
                          <li>Send marketing communications (with your consent)</li>
                          <li>Analyze usage patterns to improve our website and services</li>
                          <li>Comply with legal obligations and protect our rights</li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-2xl font-semibold text-zinc-100 mb-4">3. Information Sharing</h2>
                      <div className="space-y-4 text-zinc-300">
                        <p>
                          We do not sell, trade, or otherwise transfer your personal information to third parties
                          without your consent, except as described in this policy:
                        </p>
                        <h3 className="text-lg font-medium text-zinc-200 mt-6 mb-3">Service Providers</h3>
                        <p>
                          We may share your information with trusted third-party service providers who assist us in
                          operating our website, conducting our business, or servicing you, including:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                          <li>Payment processors</li>
                          <li>Email service providers</li>
                          <li>Website hosting and analytics services</li>
                          <li>Customer support platforms</li>
                        </ul>
                        <h3 className="text-lg font-medium text-zinc-200 mt-6 mb-3">Legal Requirements</h3>
                        <p>
                          We may disclose your information when required by law or to protect our rights, property, or
                          safety, or that of our users or others.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-2xl font-semibold text-zinc-100 mb-4">4. Data Security</h2>
                      <div className="space-y-4 text-zinc-300">
                        <p>
                          We implement appropriate technical and organizational security measures to protect your
                          personal information against unauthorized access, alteration, disclosure, or destruction.
                          These measures include:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                          <li>SSL encryption for data transmission</li>
                          <li>Secure servers and databases</li>
                          <li>Regular security audits and updates</li>
                          <li>Limited access to personal information on a need-to-know basis</li>
                          <li>Employee training on data protection</li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-2xl font-semibold text-zinc-100 mb-4">5. Your Rights</h2>
                      <div className="space-y-4 text-zinc-300">
                        <p>Under applicable data protection laws, you have the following rights:</p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                          <li>
                            <strong>Access:</strong> Request a copy of the personal information we hold about you
                          </li>
                          <li>
                            <strong>Rectification:</strong> Request correction of inaccurate or incomplete information
                          </li>
                          <li>
                            <strong>Erasure:</strong> Request deletion of your personal information
                          </li>
                          <li>
                            <strong>Portability:</strong> Request transfer of your data to another service provider
                          </li>
                          <li>
                            <strong>Objection:</strong> Object to processing of your personal information
                          </li>
                          <li>
                            <strong>Restriction:</strong> Request restriction of processing in certain circumstances
                          </li>
                        </ul>
                        <p className="mt-4">
                          To exercise these rights, please contact us at{" "}
                          <span className="text-amber-400">privacy@eliteautodetailing.es</span>
                        </p>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-2xl font-semibold text-zinc-100 mb-4">6. Cookies and Tracking</h2>
                      <div className="space-y-4 text-zinc-300">
                        <p>
                          We use cookies and similar tracking technologies to enhance your experience on our website.
                          For detailed information about our use of cookies, please see our{" "}
                          <a href="/cookies" className="text-amber-400 hover:text-amber-300 underline">
                            Cookie Policy
                          </a>
                          .
                        </p>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-2xl font-semibold text-zinc-100 mb-4">7. Data Retention</h2>
                      <div className="space-y-4 text-zinc-300">
                        <p>
                          We retain your personal information for as long as necessary to fulfill the purposes outlined
                          in this policy, unless a longer retention period is required or permitted by law. Factors we
                          consider when determining retention periods include:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                          <li>The nature and sensitivity of the information</li>
                          <li>Legal and regulatory requirements</li>
                          <li>The purposes for which we collected the information</li>
                          <li>Whether we can achieve those purposes through other means</li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-2xl font-semibold text-zinc-100 mb-4">8. International Transfers</h2>
                      <div className="space-y-4 text-zinc-300">
                        <p>
                          Your information may be transferred to and processed in countries other than Spain. We ensure
                          that such transfers are made in accordance with applicable data protection laws and that
                          appropriate safeguards are in place to protect your information.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-2xl font-semibold text-zinc-100 mb-4">9. Changes to This Policy</h2>
                      <div className="space-y-4 text-zinc-300">
                        <p>
                          We may update this Privacy Policy from time to time. We will notify you of any material
                          changes by posting the new policy on this page and updating the "Last Updated" date. We
                          encourage you to review this policy periodically.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-2xl font-semibold text-zinc-100 mb-4">10. Contact Us</h2>
                      <div className="space-y-4 text-zinc-300">
                        <p>
                          If you have any questions about this Privacy Policy or our data practices, please contact us:
                        </p>
                        <div className="bg-zinc-800/50 rounded-lg p-4 mt-4">
                          <p>
                            <strong>Elite Auto Detailing Spain</strong>
                          </p>
                          <p>Calle de Alcalá 123, 28009 Madrid, Spain</p>
                          <p>Email: privacy@eliteautodetailing.com</p>
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
