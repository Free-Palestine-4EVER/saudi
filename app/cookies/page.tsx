import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Cookie Policy</h1>
            <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>What Are Cookies?</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p>
                  Cookies are small text files that are stored on your device when you visit our website. They help us
                  provide you with a better browsing experience by remembering your preferences and analyzing how you
                  use our site.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Types of Cookies We Use</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Essential Cookies</h4>
                    <p>
                      These cookies are necessary for the website to function properly. They enable basic functions like
                      page navigation and access to secure areas of the website.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-2">Performance Cookies</h4>
                    <p>
                      These cookies collect information about how visitors use our website, such as which pages are
                      visited most often. This data helps us improve our website's performance.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-2">Functionality Cookies</h4>
                    <p>
                      These cookies allow the website to remember choices you make and provide enhanced, more personal
                      features.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-2">Marketing Cookies</h4>
                    <p>
                      These cookies are used to deliver advertisements more relevant to you and your interests. They may
                      also be used to limit the number of times you see an advertisement.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Third-Party Cookies</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p>We may use third-party services that also set cookies on your device:</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>
                    <strong>Google Analytics:</strong> To analyze website traffic and user behavior
                  </li>
                  <li>
                    <strong>Payment Processors:</strong> To securely process payments
                  </li>
                  <li>
                    <strong>Social Media Platforms:</strong> To enable social sharing features
                  </li>
                  <li>
                    <strong>Advertising Networks:</strong> To display relevant advertisements
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Managing Your Cookie Preferences</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p>You can control and manage cookies in several ways:</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>
                    <strong>Browser Settings:</strong> Most browsers allow you to view, delete, and block cookies
                  </li>
                  <li>
                    <strong>Cookie Consent Banner:</strong> Use our cookie consent tool to manage your preferences
                  </li>
                  <li>
                    <strong>Opt-out Tools:</strong> Use industry opt-out tools for advertising cookies
                  </li>
                </ul>

                <div className="mt-6 p-4 bg-amber-50 rounded-lg">
                  <p className="text-sm">
                    <strong>Note:</strong> Disabling certain cookies may affect the functionality of our website and
                    your user experience.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Cookie Retention</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p>Different cookies have different retention periods:</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>
                    <strong>Session Cookies:</strong> Deleted when you close your browser
                  </li>
                  <li>
                    <strong>Persistent Cookies:</strong> Remain on your device for a set period or until manually
                    deleted
                  </li>
                  <li>
                    <strong>Third-party Cookies:</strong> Retention periods vary by provider
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Updates to This Policy</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p>
                  We may update this Cookie Policy from time to time to reflect changes in our practices or for other
                  operational, legal, or regulatory reasons. We will notify you of any material changes by posting the
                  updated policy on our website.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Us</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p>If you have any questions about our use of cookies, please contact us at:</p>
                <div className="mt-4">
                  <p>
                    <strong>Email:</strong> privacy@saudiexplorer.com
                  </p>
                  <p>
                    <strong>Phone:</strong> +966 12 345 6789
                  </p>
                  <p>
                    <strong>Address:</strong> 123 King Fahd Road, Riyadh, Saudi Arabia
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="text-center mt-12">
              <Button className="bg-orange-500 hover:bg-orange-600">Manage Cookie Preferences</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
