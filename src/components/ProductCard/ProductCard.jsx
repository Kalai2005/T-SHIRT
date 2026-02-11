import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const { wishlist, toggleWishlist } = useWishlist();
  const isWishlisted = wishlist.some((p) => p.id === product.id);

  const openWhatsAppEnquiry = (product) => {
    const phone = "919894588717";
    const website = "https://www.M-ShanOutlets.com";
    const enquiryType = product.category === "Hoodie" ? "Hoodie enquiry" : "T-Shirt enquiry";

    const message = `
Hello 👋
${enquiryType}

I am interested in this product:

Product Name: ${product.name}
Category: ${product.category}
Price: ₹${product.price}

Website: ${website}

Please share more details.
`;

    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="product-card">
      
      <button
        className={`wishlist-btn ${isWishlisted ? "active" : ""}`}
        onClick={() => toggleWishlist(product)}
        aria-label="Add to wishlist"
      >
        ♥
      </button>

      
      <div className="product-img">
        <img src={product.image} alt={product.name} />
      </div>

     
      <div className="product-info">
        <p>name: "{product.name}"</p>
        <p>price: ₹{product.price}</p>
        <p>rating: {product.rating}</p>
        <p>sizes: {product.sizes.join(", ")}</p>
        <p>colors: {product.colors.join(", ")}</p>

        <button
          className="add-cart-btn"
          onClick={() => addToCart(product)}
        >
          🛒 Add Cart
        </button>
        <button 
          className="enquire"
          onClick={() => openWhatsAppEnquiry(product)}
        >
          Enquire Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
