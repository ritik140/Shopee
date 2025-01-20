import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import Login from "../Login/Login";

function SignUp() {
  // Set up useForm with destructured functions for register, handleSubmit, and formState
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Handle form submission
  const onSubmit = (data) => {
    console.log(data);
    alert("Signup successful!");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-md mb-12">
      <h2 className="text-2xl font-bold mb-5 text-center">Sign Up</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Name field */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">
            Name:
          </label>
          <input
            type="text"
            id="name"
            {...register("name", { required: "Name is required" })}
            className={`w-full p-2 border rounded ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        {/* Email field */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">
            Email:
          </label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email format",
              },
            })}
            className={`w-full p-2 border rounded ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* Password field */}
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700">
            Password:
          </label>
          <input
            type="password"
            id="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters long",
              },
            })}
            className={`w-full p-2 border rounded ${
              errors.password ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUp;
