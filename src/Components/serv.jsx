import "../Style_Files/services.css";

export default function Serv() {
  return (
    <div className="services">
      <div className="container">
        <div className="header">
          <h3>Our best services</h3>
        </div>
        <div className="cards">
          <div className="card">
            <img src={require("../ProjectImages/coffee-beans.png")} alt="img" />
            <div className="text">
              <h4>All types of coffee beans</h4>
              <p>
                We offer you all types of coffee beans from all over the
                world. Just tell us.
              </p>
            </div>
          </div>
          <div className="card">
            <img src={require("../ProjectImages/coffee-mac.png")} alt="img" />
            <div className="text">
              <h4>Coffee preparation tools</h4>
              <p>
                We have all the coffee preparation tools you need for home or
                even your own cafe.
              </p>
            </div>
          </div>
          <div className="card">
            <img src={require("../ProjectImages/coffee-shop.png")} alt="img" />
            <div className="text">
              <h4>Coffee corner</h4>
              <p>
                We have a coffee corner. You can visit us to drink
                coffee together.
              </p>
            </div>
          </div>
          <div className="card">
            <img src={require("../ProjectImages/deli.png")} alt="img" />
            <div className="text">
              <h4>Free delivery</h4>
              <p>
                We can deliver your order anywhere for free within the city.
                Just contact us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
