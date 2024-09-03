import { supabase } from "../lib/supabase";

export async function getAllItems() {
  const { data, error } = await supabase.from("items").select("*");

  if (error) {
    throw new Error(error);
  }

  return data;
}

export async function getAllItemsByCategory(category = "burger") {
  const { data, error } = await supabase.from("items").select("*").eq("category", category);

  if (error) {
    throw new Error(error);
  }

  return data;
}

