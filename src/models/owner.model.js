import mongoose from "mongoose";

const ownerSchema = new mongoose.Schema(
  {
    fullname: { type: String, minLength: 3, trim: true },
    email: String,
    password: String,

    products: {
      type: Array,
      default: [],
    },
    gstin: String,
    picture: String,
  },
  {
    timestamps: true,
  }
);

export const Owner = mongoose.model("Owner", ownerSchema);
