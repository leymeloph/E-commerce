// Import mongoose (for MongoDB) and bcrypt (for password hashing)
import mongoose from "mongoose";
import bcrypt from "bcryptjs";

// User schema (blueprint for users)
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },     // username
  email: { type: String, required: true, unique: true }, // email (must be unique)
  password: { type: String, required: true }      // password
});

// Hash password before saving user to DB
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next(); // only hash if changed/new
  this.password = await bcrypt.hash(this.password, 10); // hash with salt rounds = 10
  next();
});

// Create User model (represents "users" collection in DB)
const User = mongoose.model("User", userSchema);

// Export model
export default User;
