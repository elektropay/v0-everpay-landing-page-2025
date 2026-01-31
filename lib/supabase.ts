import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_NEXT_PUBLIC_SUPABASE_URL || ""
const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_NEXT_PUBLIC_SUPABASE_ANON_KEY || ""

export const supabase = supabaseUrl && supabaseAnonKey ? createClient(supabaseUrl, supabaseAnonKey) : null

export type DemoRequest = {
  id?: string
  first_name: string
  last_name: string
  email: string
  company: string
  phone: string
  country: string
  company_size: string
  monthly_volume: string
  use_case?: string
  message?: string
  created_at?: string
}

export type ContactRequest = {
  id?: string
  first_name: string
  last_name: string
  email: string
  company?: string
  inquiry_type: string
  message: string
  created_at?: string
}
