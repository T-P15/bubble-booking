export async function signOut() {

  const res = await fetch(`/auth/signout`)
  return res.json()
}