// Import mongoose (to work with MongoDB)
import mongoose from "mongoose";

// Product schema (blueprint for products)
const productSchema = new mongoose.Schema({
  name: {         // product name
    type: String,
    required: true,
  },
  price: {        // product price
    type: Number,
    required: true,
  },
  description: {  // product description
    type: String,
    required: true,
  },
});

// Product model (represents the "products" collection in DB)
const Product = mongoose.model("Product", productSchema);

// Export model
export default Product;
