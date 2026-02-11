import { useCart } from "../../context/CartContext";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./Cart.css";

const Cart = () => {
  const { cart } = useCart();

  return (
    <div className="cart-page">
      <h2><center>My Cart</center></h2>

      {cart.length === 0 ? (
        <p>Your cart is empty 🛒</p>
      ) : (
        <div className="cart-grid">
          {cart.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
