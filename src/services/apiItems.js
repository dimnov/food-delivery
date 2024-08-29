import { supabase } from "../lib/supabase";
import { v4 as uuidv4 } from "uuid";

export async function uploadImage(image) {
  if (!image) return "";

  const imageName = `${image.name}-${uuidv4()}`;

  const { error } = await supabase.storage
    .from("items-images")
    .upload(`public/${imageName}`, image);
  if (error) throw error;

  return `${
    supabase.storage.from("items-images").getPublicUrl(`public/${imageName}`).data.publicUrl
  }`;
}

export async function addItemApi(itemData) {
  if (
    !itemData.imageUrl |
    !itemData.name |
    !itemData.category |
    !itemData.price |
    !itemData.description
  ) {
    throw new Error("All fields are required!");
  }
  const { error } = await supabase.from("items").insert({
    image_url: itemData.imageUrl,
    name: itemData.name,
    category: itemData.category,
    price: Number(itemData.price),
    description: itemData.description,
  });

  if (error) {
    throw new Error(error);
  }
}

