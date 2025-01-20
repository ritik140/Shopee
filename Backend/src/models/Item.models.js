import mongoose from "mongoose";

const itemsSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      require: true,
      trim: true,
      lowercase: true,
    },
    category: {
      type: String,
      require: true,
      trim: true,
      lowercase: true,
    },
    product_image_path: {
      type: String, //Cloudnary Url
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

export const Items = mongoose.model("Items", itemsSchema);
