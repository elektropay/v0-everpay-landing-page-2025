"use client"

import { useState } from "react"

export function MerchantApplicationForm() {
  const [businessName, setBusinessName] = useState("")

  return (
    <div>
      <h2>Merchant Application</h2>
      <form>
        <div>
          <label htmlFor="business-name">Business Name</label>
          <input
            id="business-name"
            type="text"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
