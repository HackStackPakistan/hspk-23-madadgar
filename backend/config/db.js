import {createClient} from '@supabase/supabase-js';


export const connectToSupabse = () => {
  const supabaseUrl = process.env.SUPBASE_URL
  const supabaseKey = process.env.SUPABASE_KEY
  return createClient(supabaseUrl, supabaseKey)
  
}