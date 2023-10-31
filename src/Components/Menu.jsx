import "../Style_Files/menu.css";

export default function Menu() {
  return (
    <div className="services">
      <div className="container">
        <div className="header">
          <h3>Our Menu</h3>
        </div>
        <div className="menu-wrapper">
          <div className="menu-card">
            <h4>Arabic coffee </h4>

            <p>$10</p>
          </div>
          <div className="menu-card">
            <h4>French coffee </h4>
            <p>$5.5</p>
          </div>
          <div className="menu-card">
            <h4>Brazilian coffee </h4>

            <p>$12</p>
          </div>
          <div className="menu-card">
            <h4>Latte macchiato </h4>

            <p>$8</p>
          </div>
          <div className="menu-card">
            <h4>Turkish coffee </h4>

            <p>$10</p>
          </div>
          <div className="menu-card">
            <h4>Espresso coffee</h4>

            <p>$15</p>
          </div>
        </div>
      </div>
    </div>
  );
}
