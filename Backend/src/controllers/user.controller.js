import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { User } from "../models/User.model.js";

const generateToken = async (userId) => {
  try {
    const user = await User.findById(userId);
    const accessToken = await user.generateAccessToken();
    const refreshToken = await user.generateRefreshToken();
    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });
    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(500, error);
  }
};
/*
-------Register user--------
Steps to Follow-->
1. Take the data from the body
2. Check the user is previously user exist
3. Then save to the data base.
*/

const registerUser = asyncHandler(async (req, res) => {
  const { name, username, email, password, role } = req.body;
  if (
    [name, username, email, password, role].some(
      (field) => field?.trim() === ""
    )
  ) {
    throw new ApiError(400, "Required All Fields");
  }
  const existUser = await User.findOne({
    $or: [{ username }, { email }],
  });
  if (existUser) {
    throw new ApiError(400, "User is already Exist");
  }
  const user = await User.create({
    name,
    username,
    email,
    password,
    role,
  });
  const checkUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  if (!checkUser) {
    throw new ApiError(400, "User Not Created");
  }
  return res.status(200).json(new ApiResponse(200, checkUser, "User Created!"));
});

/*
-------Login user--------
Steps to Follow-->
1. Take the data from the Body.
2. Check the email and password
3. Password should be compare by using bycrpt method
4. After successfull authorization generate the acckess token and insert in the cookies.
5. give the suitable response.
*/

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!(email && password)) {
    throw new ApiError(400, "email and Password required");
  }
  const user = await User.findOne({ email });
  if(!user){
    throw new ApiError(400,"User not find");
  }
  const pwdcorrect = await user.isPasswordCorrect(password);
  // console.log(pwdcorrect +" "+ user);
  if (!(user && pwdcorrect)) {
    throw new ApiError(400, "Wrong email and password");
  }
  //Generate Access Token and Refresh Token
  const { accessToken, refreshToken } = await generateToken(user._id);

  const userWithToken = await User.findById(user._id);
  if (!userWithToken) {
    throw new ApiError(400, "Token not Set");
  }
  const options = {
    httpOnly: true,
    secure: true,
  };
  return res
    .status(200)
    .cookie("AccessToken", accessToken, options)
    .cookie("RefreshToken", refreshToken, options)
    .json(
      new ApiResponse(
        200,
        {
          user: userWithToken,
          accessToken,
          refreshToken,
        },
        "User Logged In"
      )
    );
});

/*
-------Logout user--------
Steps to Follow-->
1. Take the data from the Body.
2. Check the email and password
3. Password should be compare by using bycrpt method
4. After successfull authorization generate the acckess token and insert in the cookies.
5. give the suitable response.
*/

const logoutUser = asyncHandler(async (req, res) => {
  const userId = req.user._id;
  await User.findByIdAndUpdate(
    userId,
    {
      $set: {
        refreshToken: 1,
      },
    },
    {
      new: true,
    }
  );
  const options = {
    httpOnly: true,
    secure: true,
  };
  return res
    .status(200)
    .clearCookie("AccessToken", options)
    .clearCookie("RefreshToken", options)
    .json(new ApiResponse(200, {}, "User Logout"));
});

export { registerUser, loginUser, logoutUser };
