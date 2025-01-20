import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const UserSchema = new mongoose.Schema(
  {
    name: {
      require: true,
      type: String,
      lowercase: true,
      trim: true,
    },
    username: {
      require: true,
      type: String,
      trim: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
    addToCard: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Items",
      },
    ],
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
      required: true,
    },
    refreshToken: {
      type: String,
    },
  },
  { timestamps: true }
);

//Bycrypt the Password
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  this.password = await bcrypt.hash(this.password, 10);
  next();
  return;
});

//Check the password
UserSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

//Generate Access Token
UserSchema.methods.generateAccessToken = async function () {
  return jwt.sign(
    {
      _id: this._id,
      email: this.email,
      username: this.username,
      name: this.name,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    }
  );
};

//Genereate Refresh Token
UserSchema.methods.generateRefreshToken = async function () {
  return jwt.sign(
    {
      _id: this._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: process.env.REFRESH_TOKEN_EXPIRY }
  );
};

export const User = mongoose.model("User", UserSchema);
