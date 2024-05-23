import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    image: String,
    name: String,
    category: String,
    price: Number,
    discount: { type: Number, default: 0 },
    bgColor: { type: String, default: "white" },
    panelColor: { type: String, default: "white" },
    textColor: { type: String, default: "black" },
  },
  {
    timestamps: true,
  }
);

export const Product = mongoose.model("Product", productSchema);
