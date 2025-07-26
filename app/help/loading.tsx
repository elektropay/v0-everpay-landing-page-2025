import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function HelpLoading() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="h-10 bg-muted rounded w-64 mx-auto mb-4 animate-pulse" />
          <div className="h-6 bg-muted rounded w-96 mx-auto mb-8 animate-pulse" />
          <div className="h-10 bg-muted rounded w-80 mx-auto animate-pulse" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[...Array(3)].map((_, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="h-6 bg-muted rounded w-32 mb-2 animate-pulse" />
                <div className="h-4 bg-muted rounded w-48 animate-pulse" />
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="h-4 bg-muted rounded w-full animate-pulse" />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mb-12">
          <div className="h-8 bg-muted rounded w-48 mx-auto mb-4 animate-pulse" />
          <div className="h-4 bg-muted rounded w-64 mx-auto animate-pulse" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[...Array(3)].map((_, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-muted rounded-full mx-auto mb-4 animate-pulse" />
                <div className="h-6 bg-muted rounded w-24 mx-auto mb-2 animate-pulse" />
                <div className="h-4 bg-muted rounded w-32 mx-auto animate-pulse" />
              </CardHeader>
              <CardContent>
                <div className="h-10 bg-muted rounded w-full mb-2 animate-pulse" />
                <div className="h-3 bg-muted rounded w-24 mx-auto animate-pulse" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
