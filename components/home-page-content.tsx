import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DashboardCard } from "@/components/dashboard-card"
import { CheckCircle } from "lucide-react"

export function HomePageContent() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] bg-white text-everpayText">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 text-center px-4">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 font-heading">
            Accept payments, send payouts, and manage their businesses online.
          </h1>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-everpayGreen hover:bg-everpayGreen-dark text-white px-8 py-3 rounded-full text-lg font-medium shadow-md">
              Start now
            </Button>
            <Button
              variant="outline"
              className="border-everpayGreen text-everpayGreen px-8 py-3 rounded-full text-lg font-medium hover:bg-everpayGreen hover:text-white shadow-md bg-transparent"
            >
              Contact sales
            </Button>
          </div>
        </div>
      </section>

      {/* Features/Benefits Section */}
      <section className="w-full py-8 px-4">
        <div className="container mx-auto flex flex-col sm:flex-row justify-center items-center gap-8 text-lg font-medium text-gray-700">
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-everpayGreen" />
            <span>Always available</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-everpayGreen" />
            <span>No setup fees</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-everpayGreen" />
            <span>Cancel anytime</span>
          </div>
        </div>
      </section>

      {/* Payment Dashboard Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="rounded-xl shadow-lg p-6 md:p-8">
            <CardHeader className="flex flex-row items-center justify-between pb-4">
              <CardTitle className="text-2xl font-bold font-heading text-everpayText">Payment Dashboard</CardTitle>
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-red-500" />
                <span className="h-3 w-3 rounded-full bg-yellow-500" />
                <span className="h-3 w-3 rounded-full bg-everpayGreen" />
              </div>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <DashboardCard
                title="Total Revenue"
                value="$2,847,392"
                percentage="+12.5%"
                valueColor="text-everpayText"
              />
              <DashboardCard title="Transactions" value="24,847" valueColor="text-everpayText" />
              <DashboardCard title="Success Rate" value="99.2%" valueColor="text-everpayText" />
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
