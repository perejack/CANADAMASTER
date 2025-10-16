import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ejioalfxvqplmbflwhlo.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVqaW9hbGZ4dnFwbG1iZmx3aGxvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY3MjE0MzIsImV4cCI6MjA3MjI5NzQzMn0.r8Uaayl_rHK0eY3T5zhXfSiC5kySsoKL9DjqZJE3zMw'

export const supabase = createClient(supabaseUrl, supabaseKey)
