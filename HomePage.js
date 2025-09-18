import React from "react";

function HomePage() {
  return (
    <main className="content">
      //LEFT: graphics / pictures
      <section className="graphics">
        <h2>Graphics placeholder</h2>
        <img src="images/graphic1.jpg" alt="Graphic 1" />
        <img src="images/graphic2.jpg" alt="Graphic 2" />
      </section>

      //MIDDLE: products area
      <section className="products">
        <h2>Products</h2>
        <div className="product-grid">
          <div className="product">
            <img src="images/product1.jpg" alt="Product 1" />
            <p>Product 1</p>
          </div>
          <div className="product">
            <img src="images/product2.jpg" alt="Product 2" />
            <p>Product 2</p>
          </div>
        </div>
      </section>

      //RIGHT: videos
      <section className="videos">
        <h2>Videos</h2>
        <video controls>
          <source src="videos/sample1.mp4" type="video/mp4" />
        </video>
        <video controls>
          <source src="videos/sample2.mp4" type="video/mp4" />
        </video>
      </section>

      //FUNDRAISING section 
      <section className="fundraising">
        <h2>Online Fundraising</h2>
        <p>Help us Preserve Indigenous Weaving Culture by donating below:</p>
        <button>Donate Now</button>
      </section>
    </main>
  );
}

export default HomePage;
