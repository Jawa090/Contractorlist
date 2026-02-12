import { Link } from "react-router-dom";
import { ArrowLeft, Shield, Eye, Lock, Database, Users, Globe } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Navigation */}
        <Link
          to="/signup"
          className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Signup
        </Link>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-green-100 rounded-full">
              <Shield className="h-8 w-8 text-green-600" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
          <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="h-5 w-5 text-green-600" />
              Your Privacy Matters
            </CardTitle>
            <CardDescription>
              This Privacy Policy describes how ContractorList collects, uses, and protects your personal information when you use our service.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* Section 1 */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Information We Collect</h2>
              <div className="space-y-4">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-blue-900">Personal Information</h4>
                      <p className="text-sm text-blue-700 mt-1">
                        Name, email address, phone number, company information, and profile details you provide when creating an account.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <Database className="h-5 w-5 text-purple-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-purple-900">Usage Information</h4>
                      <p className="text-sm text-purple-700 mt-1">
                        Information about how you use our service, including pages visited, features used, and interaction patterns.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <Globe className="h-5 w-5 text-orange-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-orange-900">Technical Information</h4>
                      <p className="text-sm text-orange-700 mt-1">
                        IP address, browser type, device information, and cookies to improve your experience and security.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <Separator />

            {/* Section 2 */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">2. How We Use Your Information</h2>
              <div className="space-y-3">
                <p className="text-gray-700 leading-relaxed">We use the information we collect to:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send you technical notices, updates, security alerts, and support messages</li>
                  <li>Respond to your comments, questions, and customer service requests</li>
                  <li>Communicate with you about products, services, offers, and events</li>
                  <li>Monitor and analyze trends, usage, and activities in connection with our services</li>
                  <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
                </ul>
              </div>
            </section>

            <Separator />

            {/* Section 3 */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Information Sharing and Disclosure</h2>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy:
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">With Other Users</h4>
                  <p className="text-gray-700 text-sm">
                    When you create a profile, certain information may be visible to other users to facilitate connections between clients and contractors.
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Service Providers</h4>
                  <p className="text-gray-700 text-sm">
                    We may share information with third-party service providers who perform services on our behalf, such as payment processing and data analysis.
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Legal Requirements</h4>
                  <p className="text-gray-700 text-sm">
                    We may disclose information if required by law or in response to valid requests by public authorities.
                  </p>
                </div>
              </div>
            </section>

            <Separator />

            {/* Section 4 */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Data Security</h2>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <Lock className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-green-900">Security Measures</h4>
                    <p className="text-sm text-green-700 mt-1">
                      We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <p className="text-gray-700 text-sm">Our security measures include:</p>
                <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 ml-4">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security assessments and updates</li>
                  <li>Access controls and authentication requirements</li>
                  <li>Employee training on data protection practices</li>
                </ul>
              </div>
            </section>

            <Separator />

            {/* Section 5 */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Your Rights and Choices</h2>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">You have the following rights regarding your personal information:</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Access & Update</h4>
                    <p className="text-gray-700 text-sm">
                      You can access and update your account information at any time through your profile settings.
                    </p>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Data Portability</h4>
                    <p className="text-gray-700 text-sm">
                      You can request a copy of your personal data in a structured, machine-readable format.
                    </p>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Deletion</h4>
                    <p className="text-gray-700 text-sm">
                      You can request deletion of your account and personal information, subject to legal requirements.
                    </p>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Communication Preferences</h4>
                    <p className="text-gray-700 text-sm">
                      You can opt out of marketing communications while still receiving service-related messages.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <Separator />

            {/* Section 6 */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Cookies and Tracking Technologies</h2>
              <div className="space-y-3">
                <p className="text-gray-700 leading-relaxed">
                  We use cookies and similar tracking technologies to collect and use personal information about you. 
                  You can control cookies through your browser settings.
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Types of Cookies We Use:</h4>
                  <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 ml-4">
                    <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                    <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our website</li>
                    <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
                    <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
                  </ul>
                </div>
              </div>
            </section>

            <Separator />

            {/* Section 7 */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Data Retention</h2>
              <p className="text-gray-700 leading-relaxed">
                We retain your personal information for as long as necessary to provide our services, comply with legal obligations, 
                resolve disputes, and enforce our agreements. When you delete your account, we will delete or anonymize your personal information, 
                except where we are required to retain it for legal or regulatory purposes.
              </p>
            </section>

            <Separator />

            {/* Section 8 */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">8. International Data Transfers</h2>
              <p className="text-gray-700 leading-relaxed">
                Your information may be transferred to and processed in countries other than your own. 
                We ensure that such transfers are made in accordance with applicable data protection laws and that appropriate safeguards are in place.
              </p>
            </section>

            <Separator />

            {/* Section 9 */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">9. Children's Privacy</h2>
              <p className="text-gray-700 leading-relaxed">
                Our service is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. 
                If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
              </p>
            </section>

            <Separator />

            {/* Section 10 */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">10. Changes to This Privacy Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page 
                and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </section>

            <Separator />

            {/* Contact Information */}
            <section className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                If you have any questions about this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="space-y-2 text-gray-700">
                <p>Email: privacy@contractorlist.com</p>
                <p>Phone: 1-800-CONTRACTOR</p>
                <p>Address: 123 Business Ave, Suite 100, City, State 12345</p>
                <p>Data Protection Officer: dpo@contractorlist.com</p>
              </div>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
