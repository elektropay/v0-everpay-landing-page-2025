import { Card, CardContent } from "@/components/ui/card"

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="w-full max-w-md">
        <CardContent className="flex flex-col items-center justify-center gap-4 p-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900" />
          <p className="text-gray-500 dark:text-gray-400">Loading help content...</p>
        </CardContent>
      </Card>
    </div>
  )
}
