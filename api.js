const API_URL = "http://localhost:5000/api";

export async function fetchProducts() {
  try {
    const response = await fetch(`${API_URL}/products`);
    if (!response.ok) throw new Error("Failed to fetch products");
    return await response.json();
  } catch (error) {
    console.error("❌ API Error:", error);
    return [];
  }
}
