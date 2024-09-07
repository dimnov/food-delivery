import { supabase } from "../lib/supabase";

export async function getAllItems() {
  const { data, error } = await supabase.from("items").select("*");

  if (error) {
    throw new Error(error);
  }

  return data;
}

export async function getAllItemsByCategory(category) {
  const { data, error } = await supabase.from("items").select("*").eq("category", category);

  if (error) {
    throw new Error(error);
  }

  return data;
}

export async function getItemsInCartData(ids) {
  if (!Array.isArray(ids)) {
    throw new Error("IDs should be an array");
  }

  const { data, error } = await supabase.from("items").select("*").in("id", ids);

  if (error) {
    throw new Error(error);
  }

  return data;
}

export async function getAllCategories() {
  const { data, error } = await supabase.from("categories").select("*");

  if (error) {
    throw new Error(error);
  }

  return data;
}

export async function getCartItems(userId) {
  const { data, error } = await supabase
    .from("users")
    .select("cartItems")
    .eq("id", userId)
    .single();

  if (error) {
    throw new Error(error);
  }

  return data.cartItems;
}

export async function addItemToCart({ cartItems, userId }) {
  const { error } = await supabase.from("users").update({ cartItems: cartItems }).eq("id", userId);

  if (error) {
    throw new Error(error.message);
  }
}

export async function removeItemToCart({ cartItems, userId }) {
  const { error } = await supabase.from("users").update({ cartItems: cartItems }).eq("id", userId);

  if (error) {
    throw new Error(error.message);
  }
}
