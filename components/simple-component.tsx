import { Button } from "@/components/ui/button"

export function SimpleComponent() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Simple Component</h2>
      <p>This is a simple component to test JSX rendering.</p>
      <div className="mt-4">
        <Button>Click Me</Button>
      </div>
    </div>
  )
}
