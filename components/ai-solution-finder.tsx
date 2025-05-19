"use client"

import { useState } from "react"

export function AiSolutionFinder() {
  const [businessType, setBusinessType] = useState("")

  return (
    <div>
      <h2>AI Solution Finder</h2>
      <input
        type="text"
        value={businessType}
        onChange={(e) => setBusinessType(e.target.value)}
        placeholder="Business type"
      />
      <button>Find Solution</button>
    </div>
  )
}
