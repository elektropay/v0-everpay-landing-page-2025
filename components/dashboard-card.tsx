import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface DashboardCardProps {
  title: string
  value: string
  percentage?: string
  className?: string
}

export function DashboardCard({ title, value, percentage, className }: DashboardCardProps) {
  return (
    <Card className={cn("p-4 rounded-lg bg-everpay-lightgray shadow-none", className)}>
      <p className="text-sm text-gray-600">{title}</p>
      <div className="flex items-baseline justify-between mt-1">
        <h3 className="text-2xl font-bold font-mono text-everpay-dark">{value}</h3>
        {percentage && <span className="text-everpay-green text-sm font-medium">{percentage}</span>}
      </div>
    </Card>
  )
}
