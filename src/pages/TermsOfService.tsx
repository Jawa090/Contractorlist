import { Link } from "react-router-dom";
import { ArrowLeft, FileText, Shield, Users, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const TermsOfService = () => {
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
            <div className="p-3 bg-blue-100 rounded-full">
              <FileText className="h-8 w-8 text-blue-600" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Terms of Service</h1>
          <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-blue-600" />
              Agreement to Terms
            </CardTitle>
            <CardDescription>
              By accessing and using ContractorList, you accept and agree to be bound by the terms and provision of this agreement.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* Section 1 */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Acceptance of Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                By accessing and using ContractorList ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. 
                If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <Separator />

            {/* Section 2 */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Use License</h2>
              <div className="space-y-3">
                <p className="text-gray-700 leading-relaxed">
                  Permission is granted to temporarily access ContractorList for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>modify or copy the materials</li>
                  <li>use the materials for any commercial purpose or for any public display</li>
                  <li>attempt to reverse engineer any software contained on the website</li>
                  <li>remove any copyright or other proprietary notations from the materials</li>
                </ul>
              </div>
            </section>

            <Separator />

            {/* Section 3 */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">3. User Accounts</h2>
              <div className="space-y-3">
                <p className="text-gray-700 leading-relaxed">
                  When you create an account with us, you must provide information that is accurate, complete, and current at all times. You are responsible for safeguarding the password and for all activities that occur under your account.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-blue-900">Account Types</h4>
                      <p className="text-sm text-blue-700 mt-1">
                        We offer two types of accounts: Client accounts for those seeking contractors, and Contractor accounts for service providers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <Separator />

            {/* Section 4 */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Service Description</h2>
              <p className="text-gray-700 leading-relaxed">
                ContractorList is a platform that connects clients with contractors for various construction and renovation projects. 
                We provide tools for project posting, contractor matching, communication, and project management. We do not directly provide construction services.
              </p>
            </section>

            <Separator />

            {/* Section 5 */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Payment Terms</h2>
              <div className="space-y-3">
                <p className="text-gray-700 leading-relaxed">
                  Payment terms are established directly between clients and contractors. ContractorList may facilitate payments but is not responsible for payment disputes between parties.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>All payments are processed securely through our payment partners</li>
                  <li>Service fees may apply to certain transactions</li>
                  <li>Refund policies are subject to individual contractor terms</li>
                </ul>
              </div>
            </section>

            <Separator />

            {/* Section 6 */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Prohibited Uses</h2>
              <div className="space-y-3">
                <p className="text-gray-700 leading-relaxed">You may not use our service:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                  <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                  <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                  <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                  <li>To submit false or misleading information</li>
                </ul>
              </div>
            </section>

            <Separator />

            {/* Section 7 */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Disclaimer</h2>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
                  <div>
                    <p className="text-sm text-yellow-800">
                      The information on this website is provided on an "as is" basis. To the fullest extent permitted by law, 
                      this Company excludes all representations, warranties, conditions and terms whether express or implied.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <Separator />

            {/* Section 8 */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">8. Limitations</h2>
              <p className="text-gray-700 leading-relaxed">
                In no event shall ContractorList or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, 
                or due to business interruption) arising out of the use or inability to use the materials on ContractorList's website.
              </p>
            </section>

            <Separator />

            {/* Section 9 */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">9. Revisions and Errata</h2>
              <p className="text-gray-700 leading-relaxed">
                The materials appearing on ContractorList's website could include technical, typographical, or photographic errors. 
                ContractorList does not warrant that any of the materials on its website are accurate, complete, or current.
              </p>
            </section>

            <Separator />

            {/* Section 10 */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">10. Governing Law</h2>
              <p className="text-gray-700 leading-relaxed">
                These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which ContractorList operates, 
                and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
              </p>
            </section>

            <Separator />

            {/* Contact Information */}
            <section className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Contact Information</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="space-y-2 text-gray-700">
                <p>Email: legal@contractorlist.com</p>
                <p>Phone: 1-800-CONTRACTOR</p>
                <p>Address: 123 Business Ave, Suite 100, City, State 12345</p>
              </div>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TermsOfService;