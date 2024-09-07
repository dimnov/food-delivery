import { supabase } from "../lib/supabase";

export async function fetchSession() {
  const {
    data: { session },
    error,
  } = await supabase.auth.getSession();

  if (error) {
    throw new Error(error.message);
  }

  return session;
}

export async function registerUser({ username, email, password }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        username,
      },
    },
  });

  if (error) {
    throw new Error(error);
  }

  const userObject = {
    id: data.user.id,
    name: username,
    email: email,
    cartItems: {},
    address: "",
    phone: "",
  };

  const { error: profileError } = await supabase.from("users").insert(userObject);

  if (profileError) {
    throw new Error(profileError.message);
  }

  return data.user;
}

export async function loginUser({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw new Error(error.message);
  }

  return data.user;
}

export async function logoutUser() {
  const { error } = await supabase.auth.signOut();

  if (error) {
    throw new Error(error.message);
  }

  return;
}
