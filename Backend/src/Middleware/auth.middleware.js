import jwt from "jsonwebtoken";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../models/User.model.js";


const verifyJwt=asyncHandler(async(req,_,next)=>{
    try{
        // console.log(req.cookies);
        const token=req.cookies?.AccessToken || req.header("Authorization")?.replace("Bearer","").trim();
        if(!token){
            throw new ApiError(401,'Unathorized access');
        }
        const decodeToken=jwt.verify(token,process.env.ACCESS_TOKEN_SECRET);
        const user=await User.findById(decodeToken._id).select('-refreshToken -password');
        if(!user){
            throw new ApiError(401, 'Unathorized access');
        }
        req.user=user;
        next();
    }catch(error){
        console.log("----------------Logout Error------------------",error);
        throw new ApiError(400,"Something went wrong in Logout");
    }
});
export {verifyJwt};