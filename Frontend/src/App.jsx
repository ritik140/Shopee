import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Home/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
