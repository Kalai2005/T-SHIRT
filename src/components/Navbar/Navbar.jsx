import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
import "./navbar.css";
import logo from "../../assets/logo/logo.png";
import wishIcon from "../../assets/icons/wish-list.png";
import cartIcon from "../../assets/icons/add-to-cart.png";

const Navbar = () => {
  const { cart } = useCart();
  const { wishlist } = useWishlist();

  return (
    <header className="navbar">
      <div className="container navbar-wrapper">

        
        <div className="navbar-brand">
          <img src={logo} alt="Brand Logo" className="brand-logo" />

          <div className="brand-text">
            <span className="brand-main">M-Shan</span>
            <span className="brand-sub">Outlets</span>
          </div>
        </div>

       
        <div className="navbar-right">
          <ul className="navbar-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/customize">Customize</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>

          
          <Link to="/wishlist" className="header-icon wishlist-icon">
            <img src={wishIcon} alt="Wishlist" />
            {wishlist.length > 0 && <span className="wishlist-count">{wishlist.length}</span>}
          </Link>

         
          <Link to="/cart" className="header-icon cart-icon">
            <img src={cartIcon} alt="Cart" />
            {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
          </Link>
        </div>

      </div>
    </header>
  );
};

export default Navbar;
