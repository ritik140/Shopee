import { Items } from "../models/Item.models.js";
import { User } from "../models/User.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { uploadCloudinary } from "../utils/cloudinary.js";

/* 
Create,Delete and Update a item/product by admin
*/
const addItem = asyncHandler(async (req, res) => {
  const { name, category, price, description } = req.body;
  if (
    [name, category, price].some((field) => {
      field?.trim() == "";
    })
  ) {
    throw new ApiError(400, "Some Fields are missing");
  }

  const productImagePath = await req.files?.image[0]?.path;

  const product_image = await uploadCloudinary(productImagePath);

  if (!product_image) {
    throw new ApiError(400, "Something Went wrong while uploading image");
  }
  const item = await Items.create({
    name,
    category,
    price,
    product_image_path: product_image?.url || "",
    description,
  });
  const itemUpload = await Items.findById(item._id);
  if (!itemUpload) {
    throw new ApiError(400, "There is some issue while upload in cloudinary");
  }
  return res
    .status(200)
    .json(new ApiResponse(200, itemUpload, "Item Uploaded Successfully"));
});

const updateItem = asyncHandler(async (req, res) => {
  const { itemId } = req.params;
  if (!itemId) {
    throw new ApiError(400, "This item is not Present");
  }
  const replaceValues = req.body;
  const filePath = req.files?.image.path;
  const itemImagePath = "";
  if (filePath) {
    itemImagePath = await uploadCloudinary(filePath);
    console.log(itemImagePath);
  }
  const updateData = {
    productName: replaceValues?.newProductName,
    category: replaceValues?.newCategory,
    price: replaceValues?.newPrice,
    description: replaceValues?.newDescription,
  };

  // Only add product_image_path if a new image was uploaded
  if (filePath) {
    updateData.product_image_path = itemImagePath;
  }

  const item = await Items.findByIdAndUpdate(
    itemId,
    { $set: updateData },
    { new: true }
  ).select("-password");

  if (!item) {
    throw new ApiError(400, "There is some problem while Updating Item");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, item, "Updated Successfully"));
});
const deleteItem = asyncHandler(async (req, res) => {
  const { itemId } = req.params;

  if (!itemId) {
    throw new ApiError(400, "The Item is not present");
  }
  const item = await Items.findByIdAndDelete(itemId);

  if (!item) {
    throw new ApiError(400, "There is some problem while deleting item");
  }
  return res
    .status(200)
    .json(new ApiResponse(200, "The Item is deleted Successfully!"));
});

export { addItem, updateItem, deleteItem };
