import supabase from "./supabase";

export async function getUsers({ filter, sortBy }) {
  let query = supabase.from("users").select("*");

  // Filtering
  if (filter) query = query[filter.method || "eq"](filter.field, filter.value);

  // Soring
  if (sortBy)
    query = query.order(sortBy.field, {
      ascending: sortBy.direction === "asc",
    });

  const { data, error } = await query;

  if (error) {
    console.error(error);
    throw new Error("Users could not be loaded");
  }

  return data;
}

// Create and Edit User
export async function createEditUser(newUser, id) {
  let quary = supabase.from("users");

  // Create User
  if (!id) quary = quary.insert([newUser]);

  // Edit User
  if (id) quary = quary.update(newUser).eq("id", id);

  const { data, error } = await quary.select();

  if (error) {
    console.error(error);
    throw new Error("User could not be Created");
  }

  return data;
}

export async function deleteUser(id) {
  const { error } = await supabase.from("users").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("User could not be deleted");
  }
}
