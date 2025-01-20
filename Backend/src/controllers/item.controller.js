import { Items } from "../models/Item.models.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { uploadCloudinary } from "../utils/cloudinary.js";


/* 
Create,Delete and Update a item/product by admin
*/
const addItem=asyncHandler(async(req,res)=>{
    const {name,category,price,description}=req.body;
    if([name,category,price].some((field)=>{field?.trim()==""})){
       throw new ApiError(400, "Some Fields are missing")
    }
    const productImagePath=await req.files?.product_image[0]?.path;

    const product_image=uploadCloudinary(productImagePath);
    if(!product_image){
        throw new ApiError(400, "Something Went wrong while uploading image");
    }
    const item=await Items.create({
        name,
        category,
        price,
        product_image_path:product_image?.url || "",
        description
    })
    const itemUpload=await Items.findById(item._id);
    if(!itemUpload){
        throw new ApiError(400, "There is some issue while upload in cloudinary");
    }
    return res
    .status(200)
    .json(new ApiResponse(200, itemUpload,"Item Uploaded Successfully"))
    
})
const updateItem=asyncHandler(async(req,res)=>{

})
const deleteItem=asyncHandler(async(req,res)=>{

})

export {addItem, updateItem, deleteItem};