export type User = { name: string; email: string };
export type UserList = Array<User & { password: string }>;

export async function getUser() {
  const request = await fetch("/current.json");
  const user: User = await request.json();
  return user;
}

export async function login(email: string, password: string) {
  const request = await fetch("/users.json");
  const response = await request.json();
  console.log(response);
  if (response) {
    const usersJson: UserList = response.users;
    console.log(usersJson);
    return usersJson.find((s) => s.password === password && s.email === email);
  }
}
