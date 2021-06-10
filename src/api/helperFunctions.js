import { supabase } from "./supabaseClient";

export async function getCategoryIds(userId) {
  console.log('i am in get tag ids', userId)
  const {data, error} = await supabase
          .from('user_category')
          .select('*')
          .eq('user_id', userId)
  return data
}

export async function getWriters() {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('is_writer', 1)
  return data
}

export async function getCategoryNames(categoryId) {
  const {data, error} = await supabase
          .from('category')
          .select('*')
          .eq('id', categoryId)
  return data
}
