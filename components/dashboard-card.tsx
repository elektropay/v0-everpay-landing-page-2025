import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface DashboardCardProps {
  title: string
  value: string
  percentage?: string
  valueColor?: string
  className?: string
}

export function DashboardCard({ title, value, percentage, valueColor, className }: DashboardCardProps) {
  return (
    <Card className={cn("flex-1 bg-everpayLightGray rounded-lg shadow-sm", className)}>
      <CardContent className="p-4">
        <p className="text-sm text-gray-600 font-sans">{title}</p>
        <div className="flex items-baseline justify-between mt-1">
          <h3 className={cn("text-2xl font-bold font-heading", valueColor)}>{value}</h3>
          {percentage && <span className="text-everpayGreen text-sm font-medium font-sans">{percentage}</span>}
        </div>
      </CardContent>
    </Card>
  )
}
