import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import { Provider } from "react-redux";
import Login from "./components/Login/Login.jsx";
import Category from "./pages/Category.jsx";
import ProductList from "./pages/ProductList.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import Cart from "./pages/Cart.jsx";
import Checkout from "./pages/Checkout.jsx";
import CheckoutComplete from "./pages/CheckoutComplete.jsx";
import Signup from "./pages/Signup.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="/category" element={<Category />} />
      <Route path="/product-list" element={<ProductList />} />
      <Route path="/product-detail" element={<ProductDetail />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/checkout-complete" element={<CheckoutComplete />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Route>
  )
);
createRoot(document.getElementById("root")).render(
  // <Provider store={store}>

  // </Provider>
  <RouterProvider router={router} />
);
