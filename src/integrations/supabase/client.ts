
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://yacnhixhfecwmoobpioc.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlhY25oaXhoZmVjd21vb2JwaW9jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAwMDI0MjEsImV4cCI6MjA2NTU3ODQyMX0.x5b6ieDJPwKe7QeODYp442K_5oc014BPHD0xtpSWZEo'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  }
})
