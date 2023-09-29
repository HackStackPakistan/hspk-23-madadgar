import {createClient} from '@supabase/supabase-js';
import { PrismaClient } from '@prisma/client';

const connectToSupabse = () => {
  const supabaseUrl = process.env.SUPBASE_URL
  const supabaseKey = process.env.SUPABASE_KEY
  return createClient(supabaseUrl, supabaseKey)
  
}
 const prisma = new PrismaClient()

 export {
  connectToSupabse,
  prisma
 }