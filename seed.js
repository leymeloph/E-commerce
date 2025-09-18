// backend/seed.js
import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./models/Product.js";

dotenv.config(); // load environment variables (like MONGO_URI)

// sample products we want to insert
const products = [
  { name: "Brown Shirt", price: 499, description: "A stylish brown shirt" },
  { name: "White Hoodie", price: 899, description: "A comfy white hoodie for all seasons" },
  { name: "Black Jeans", price: 1199, description: "Classic black denim jeans" },
  { name: "Leather Wallet", price: 699, description: "Durable brown leather wallet" },
  { name: "Sneakers", price: 1499, description: "Trendy sneakers for casual wear" },
];

// main function to insert data
const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI); // connect to MongoDB
    await Product.deleteMany(); // remove old products
    await Product.insertMany(products); // insert new ones
    console.log("✅ Products seeded successfully!");
    process.exit(); // exit program
  } catch (error) {
    console.error("❌ Error seeding products:", error);
    process.exit(1); // exit with error
  }
};

seedData(); // run the function
