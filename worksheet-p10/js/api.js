const ALAMAT = "https://jsonplaceholder.typicode.com/posts";

// menghubungkan file JavaScript
export async function ambilNotisia() {
  try {
    const respons = await fetch(ALAMAT);

    if (!respons.ok) {
      throw new Error("status " + respons.status);
    }

    const data = await respons.json();
    return data;
    // mengecek galat
  } catch (galat) {
    console.error("gagal memuat", galat.message);
    throw galat;
  }
}