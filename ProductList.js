// src/components/ProductList.js
import React, { useEffect, useState } from "react";
import { fetchProducts } from "../services/api";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const data = await fetchProducts();
      setProducts(data);
    }
    loadProducts();
  }, []);

  return (
    <div>
      <h2>🛍️ Products</h2>
      {products.length === 0 ? (
        <p>No products available.</p>
      ) : (
        <ul>
          {products.map((p) => (
            <li key={p._id}>
              <strong>{p.name}</strong> - ₱{p.price} <br />
              <em>{p.description}</em>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProductList;

