import jwt from "jsonwebtoken";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../models/User.model.js";

const verifyJwt = asyncHandler(async (req, res, next) => {
  try {
    const token =
      req.cookies?.AccessToken ||
      req.header("Authorization")?.replace("Bearer", "").trim();

    if (!token) {
      throw new ApiError(401, "Unauthorized access");
    }

    const decodeToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    const user = await User.findById(decodeToken._id).select(
      "-refreshToken -password"
    );

    if (!user) {
      throw new ApiError(401, "Unauthorized access");
    }
    req.user = user;
    next();
  } catch (error) {
    console.log("----------------Error------------------", error);
    throw new ApiError(400, `Auth Middleware: ${error}`);
  }
});

const verifyAdmin = asyncHandler(async (req, res, next) => {
  // console.log(req);
  try {
    const userRole =req.user?.role;
    console.log(userRole);
  
    if (userRole === "admin") {
      next();
    }
    else{
        throw new ApiError(401, "Ony Admin can access");
    }
  } catch (error) {
    throw new ApiError(400, `VerfiyAdmin Middleware: ${error}`);
  }
});

export { verifyJwt, verifyAdmin };
