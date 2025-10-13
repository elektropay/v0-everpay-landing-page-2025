import { Shield, Lock, CheckCircle } from "lucide-react"

export function CheckoutProtectionSection() {
  return (
    <section className="bg-muted/50 py-24 md:py-32">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">
              Checkout protection that works
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our advanced fraud detection and prevention system protects every transaction, giving you and your
              customers peace of mind.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">AI-Powered Detection</h3>
                  <p className="text-muted-foreground">
                    Machine learning algorithms analyze patterns to identify and prevent fraud in real-time.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Lock className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">3D Secure Authentication</h3>
                  <p className="text-muted-foreground">
                    Additional layer of security for card-not-present transactions.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Chargeback Protection</h3>
                  <p className="text-muted-foreground">
                    Comprehensive tools to help prevent and manage chargebacks effectively.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-border p-8 flex items-center justify-center">
              <Shield className="h-32 w-32 text-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
