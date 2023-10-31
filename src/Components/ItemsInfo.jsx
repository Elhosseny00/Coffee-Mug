import { useAddToCart } from "../Context/CartContext";
import formatCurrency from "./FormateCurrency";

const ItemsInfo = ({ id, name, description, image, price }) => {
  const { getItemsQuantity, increaseItemsQuantity } = useAddToCart();
  const quantity = getItemsQuantity(id);
  return (
    <div className="card">
      <div className="img-box">
        <img src={image} alt={name} />
      </div>
      <div className="info">
        <div className="main-info">
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
        <div className="btn">
          <span>{formatCurrency(price)}</span>
          <div className="oreder">
            {quantity === 0 ? (
              <button
                className="order-btn"
                onClick={() => increaseItemsQuantity(id)}
              >
                Order Now
              </button>
            ) : (
              <button
                className="order-btn"
                style={{
                  opacity: "0.5",
                  pointerEvents: "none",
                  backgroundColor: "#090504",
                }}
              >
                Order Now
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ItemsInfo;
