import React from "react";

function ProductsPage() {
  return (
    <div className="products">
      // Page title
      <h2>All Products</h2>

      // Container for product items
      <div className="product-grid">
        
        // First product
        <div className="product">
          <img src="images/product1.jpg" alt="Product 1" />
          <p>Product 1</p>
        </div>

        // Second product
        <div className="product">
          <img src="images/product2.jpg" alt="Product 2" />
          <p>Product 2</p>
        </div>

        // Third product
        <div className="product">
          <img src="images/product3.jpg" alt="Product 3" />
          <p>Product 3</p>
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
