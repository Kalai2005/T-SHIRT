import { Link } from "react-router-dom";
import "./footer.css";
import logo from "../../assets/logo/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-wrapper">

       
        <div className="footer-brand">
          <img src={logo} alt="M-Shan Outlets Logo" />
          <span>M-Shan Outlets</span>
        </div>

        
        <ul className="footer-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/customize">Customize</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

      </div>

      <div className="footer-bottom">
        © 2026 M-Shan Outlets. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
