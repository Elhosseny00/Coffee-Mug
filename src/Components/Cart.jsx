import { useAddToCart } from "../Context/CartContext";
import CartItem from "./CartItem";
import data from "../data/data.json";
import formatCurrency from "./FormateCurrency";
import "../Style_Files/cart.css";

function Cart() {
  const { cartItems } = useAddToCart();
  return (
    <div className="cart">
      <div className="container">
        <div className="header">
          <h3>Your Caffeine Drug Is Here</h3>
        </div>
        <div className="cards">
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>
        <div className="total">
          <div className="text">Total</div>
          <div className="number">
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = data.find((i) => i.id === cartItem.id);
                return total + (item?.price || 0) * cartItem.quantity;
              }, 0)
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Cart;
