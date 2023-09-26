import {createClient} from '@supabase/supabase-js';


export const connectToSupabse = () => {
  console.log(process.env.NEXT_PUBLIC_SUPABASE_URL)
  console.log(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)
    return createClient({
      supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
      supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
      });
}