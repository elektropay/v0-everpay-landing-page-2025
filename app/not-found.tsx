"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function NotFound() {
  const router = useRouter()

  useEffect(() => {
    router.replace("/en/404") // Redirect to the English 404 page
  }, [router])

  return null // Or a simple loading spinner if preferred
}
