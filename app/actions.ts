"use server"

import { supabase } from "@/lib/supabase"
import type { DemoRequest, ContactRequest } from "@/lib/supabase"

export async function submitDemoRequest(data: DemoRequest) {
  try {
    if (!supabase) {
      throw new Error("Supabase client is not configured")
    }

    const { error } = await supabase.from("demo_requests").insert([data])

    if (error) throw error

    return { success: true, message: "Demo request submitted successfully!" }
  } catch (error) {
    console.error("Error submitting demo request:", error)
    return { success: false, message: "Failed to submit demo request. Please try again." }
  }
}

export async function submitContactRequest(data: ContactRequest) {
  try {
    if (!supabase) {
      throw new Error("Supabase client is not configured")
    }

    const { error } = await supabase.from("contact_requests").insert([data])

    if (error) throw error

    return { success: true, message: "Contact request submitted successfully!" }
  } catch (error) {
    console.error("Error submitting contact request:", error)
    return { success: false, message: "Failed to submit contact request. Please try again." }
  }
}
