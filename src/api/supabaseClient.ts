import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://lutcrhnocwappsgimbuo.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyMTgwNjY3MCwiZXhwIjoxOTM3MzgyNjcwfQ.V6FMrhAOZdnnPIVmBhmGH0RTDQfOw3U4uHRQeOn_rNs'
export const supabase = createClient(supabaseUrl, supabaseKey)
