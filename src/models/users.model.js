import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullname: String,
    email: String,
    password: String,
    cart: {
      type: Array,
      default: [],
    },
    isAdmin: Boolean,
    orders: {
      type: Array,
      default: [],
    },
    contact: Number,
    picture: String,
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model("User", userSchema);
