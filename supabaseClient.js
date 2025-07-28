import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://wgampnpylslclzwjtbkq.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
export const supabase = createClient(supabaseUrl, supabaseKey)

export async function addToWaitingList({ name, email }) {
  const { data, error } = await supabase
    .from('waiting_list')
    .insert([{ email }])

  if (error) {
    console.error('Error adding to waiting list:', error)
    throw error
  }
  return data
}
