const ALAMAT = "https://jsonplaceholder.typicode.com/posts";

// menghubungkan file JavaScript
export async function muat() {
  const respons = await fetch(ALAMAT);
  console.log("status", respons.status, "ok", respons.ok);
  // mengecek respons API (content type)
  console.log("Content-Type", respons.headers.get("Content-Type"));

  if (!respons.ok) {
    throw new Error("status " + respons.status);
  }

  return respons.json();
}