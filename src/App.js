import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import CartDropdown from "./components/CartDropdown/CartDropdown";
import { Footer } from "./components/Footer/Footer";
import Homepage from "./pages/Homepage/Homepage";
import { Routes, Route, useLocation } from "react-router-dom";
import Cart from "./pages/Cart/Cart";
import ItemDetail from "./pages/ItemDetail/ItemDetail";
import NotFound from "./pages/NotFound/NotFound";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { useEffect } from "react";

function App() {
  const location = useLocation();

  useEffect(() => {
    const pathName = location.pathname;

    if (pathName === "/") {
      document.title = "Salman's Storefront App";
    } else if (pathName === "/cart") {
      document.title = "My Cart";
    }
  }, [location]);
  return (
    <div className="App">
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="cart" element={<Cart />} />
        <Route path="/products/:id" element={<ItemDetail />} />{" "}
        <Route path="*" element={<NotFound />} />{" "}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
