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

