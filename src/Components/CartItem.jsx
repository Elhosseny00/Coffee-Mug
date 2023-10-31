import { useAddToCart } from "../Context/CartContext";
import data from "../data/data.json";
import formatCurrency from "./FormateCurrency";

const CartItem = ({ id, quantity }) => {
  const { removeItems, increaseItemsQuantity, decreaseItemsQuantity } =
    useAddToCart();
  const item = data.find((i) => i.id === id);
  if (item === null) return null;
  const hundleDecrease = () => {
    if (quantity > 0) {
      decreaseItemsQuantity(id);
    }
  };
  return (
    <div className="card">
      <button className="dele-btn" onClick={() => removeItems(id)}>
        X
      </button>
      <div className="img-card">
        <img src={item.image} alt={item.name} />
      </div>
      <div className="iteminfo">
        <div className="maininfo">
          <h3>{item.name}</h3>
          <p> {item.description}</p>
        </div>
        <div className="quantity-btns">
          <div className="btns">
            <button onClick={() => increaseItemsQuantity(id)}>+</button>
            <span>{quantity}</span>
            <button onClick={hundleDecrease}>-</button>
          </div>
          <div className="price">{formatCurrency(item.price)}</div>
        </div>
      </div>
    </div>
  );
};
export default CartItem;
