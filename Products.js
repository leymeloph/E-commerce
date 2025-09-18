import React, { useEffect, useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <section className="products">
      <h2>Products</h2>
      <div className="product-grid">
        {products.length > 0 ? (
          products.map((p) => (
            <div className="product" key={p._id}>
              <img
                src={p.image ? p.image : "/images/product1.jpg"}
                alt={p.name}
              />
              <p>{p.name}</p>
              <p className="price">${p.price}</p>
            </div>
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </div>
    </section>
  );
}

export default Products;
