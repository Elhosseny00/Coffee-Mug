import data from "../data/data.json";
import "../Style_Files/coffee.css";
import ItemsInfo from "./ItemsInfo";
import "../Style_Files/cart.css";

const Coffee = () => {
  return (
    <div className="coffee" id="coffee">
      <div className="container">
        <div className="header">
          <h3>Welcome To the World Of Caffeine</h3>
        </div>
        <div className="cofee-wrapper">
          {data.map((item) => {
            return (
              <div className="card" key={item.id}>
                <ItemsInfo {...item} />
              </div>
            );
          })}
        </div>
        <div className="discount">
          <div className="text">
            <p>
              Get 20% Off On Any Type Of coffee Beans on white friday every Week
            </p>
            <a href="#coffee">Go TO Coffee</a>
          </div>
          <div className="image-box">
            <img src={require("../ProjectImages/discount.webp")} alt="img" />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Coffee;
