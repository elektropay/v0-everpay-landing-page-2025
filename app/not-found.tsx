"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { defaultLocale } from "@/lib/i18n/config"

export default function NotFound() {
  const router = useRouter()

  useEffect(() => {
    router.replace(`/${defaultLocale}/404`)
  }, [router])

  return null
}
