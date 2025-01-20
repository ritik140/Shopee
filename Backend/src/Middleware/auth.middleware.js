import jwt from "jsonwebtoken";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../models/User.model.js";

const verifyJwt = asyncHandler(async (req, res, next) => {
  try {
    const role = req.role;
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

    if (role && user.role !== role) {
      throw new ApiError(401, `Only ${role} can access this`);
    }

    req.user = user;
    next();
  } catch (error) {
    console.log("----------------Error------------------", error);
    throw new ApiError(400, "Something went wrong");
  }
});

export { verifyJwt };
