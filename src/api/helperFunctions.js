import { supabase } from "./supabaseClient";

export async function getTagIds(writerId) {
  console.log('i am in get tag ids', writerId)
  const {data, error} = await supabase
          .from('writers_tags')
          .select('*')
          .eq('writerid', writerId)
  return data
}

export async function getWriters() {
  const { data, error } = await supabase
    .from('writers')
    .select('*')
  return data
}

export async function getTagNames(tagId) {
  const {data, error} = await supabase
          .from('tag_name')
          .select('*')
          .eq('tag_id', tagId)
  return data
}
