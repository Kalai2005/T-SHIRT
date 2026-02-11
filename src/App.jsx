import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Customize from "./pages/Customize/Customize";
import About from "./pages/About/About";
import Wishlist from "./pages/Wishlist/Wishlist";
import Contact from "./pages/Contact/Contact";
import Cart from "./pages/Cart/Cart";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />   
      <Navbar />

      <div className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/customize" element={<Customize />} />
          <Route path="/about" element={<About />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      <WhatsAppButton />
      <Footer />
    </Router>
  );
}

export default App;
