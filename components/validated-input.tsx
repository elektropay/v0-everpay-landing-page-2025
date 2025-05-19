"use client"

import { useState } from "react"

interface ValidatedInputProps {
  id: string
  label: string
  value: string
  onChange: (value: string) => void
}

export function ValidatedInput({ id, label, value, onChange }: ValidatedInputProps) {
  const [error, setError] = useState("")

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} type="text" value={value} onChange={(e) => onChange(e.target.value)} />
      {error && <p>{error}</p>}
    </div>
  )
}
