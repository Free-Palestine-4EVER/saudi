import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Terms & Conditions</h1>
            <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>1. Acceptance of Terms</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p>
                  By accessing and using Saudi Explorer's services, you accept and agree to be bound by the terms and
                  provision of this agreement. If you do not agree to abide by the above, please do not use this
                  service.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. Booking and Payment</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <ul className="list-disc pl-6 space-y-2">
                  <li>All bookings are subject to availability and confirmation by Saudi Explorer.</li>
                  <li>A deposit is required to secure your booking, with full payment due 30 days before departure.</li>
                  <li>Prices are subject to change until booking is confirmed and deposit is received.</li>
                  <li>All prices are quoted in USD unless otherwise specified.</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. Cancellation Policy</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Cancellations made 60+ days before departure: Full refund minus processing fee</li>
                  <li>Cancellations made 30-59 days before departure: 50% refund</li>
                  <li>Cancellations made 15-29 days before departure: 25% refund</li>
                  <li>Cancellations made less than 15 days before departure: No refund</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. Travel Insurance</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p>
                  We strongly recommend that all travelers purchase comprehensive travel insurance. Saudi Explorer is
                  not responsible for any losses, damages, or expenses incurred due to unforeseen circumstances.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>5. Health and Safety</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Travelers are responsible for ensuring they meet all health requirements for travel to Saudi Arabia.
                  </li>
                  <li>All participants must follow safety guidelines provided by tour guides and local authorities.</li>
                  <li>
                    Saudi Explorer reserves the right to remove any participant who endangers themselves or others.
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>6. Limitation of Liability</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p>
                  Saudi Explorer's liability is limited to the cost of the tour package. We are not liable for any
                  indirect, consequential, or incidental damages arising from your use of our services.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>7. Force Majeure</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p>
                  Saudi Explorer is not liable for any failure to perform due to circumstances beyond our reasonable
                  control, including but not limited to natural disasters, government actions, or other force majeure
                  events.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>8. Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p>If you have any questions about these Terms & Conditions, please contact us at:</p>
                <div className="mt-4">
                  <p>
                    <strong>Email:</strong> legal@saudiexplorer.com
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
          </div>
        </div>
      </div>
    </div>
  )
}
