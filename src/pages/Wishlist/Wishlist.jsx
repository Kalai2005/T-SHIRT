import { useWishlist } from "../../context/WishlistContext";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./Wishlist.css";

const Wishlist = () => {
  const { wishlist } = useWishlist();

  return (
    <div className="wishlist-page">
      <h2>My Wishlist</h2>

      {wishlist.length === 0 ? (
        <p>No items in wishlist ❤️</p>
      ) : (
        <div className="wishlist-grid">
          {wishlist.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
