"use client"

import { useState } from "react"

export function PersonalizedSolutionGenerator() {
  const [businessSize, setBusinessSize] = useState("")

  return (
    <div>
      <h2>Personalized Solution</h2>
      <select value={businessSize} onChange={(e) => setBusinessSize(e.target.value)}>
        <option value="">Select size</option>
        <option value="small">Small</option>
        <option value="medium">Medium</option>
      </select>
    </div>
  )
}
