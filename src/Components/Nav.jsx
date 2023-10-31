import { useEffect, useRef, useState } from "react";
import "../Style_Files/nav.css";
import { useAddToCart } from "../Context/CartContext";
import { Link } from "react-router-dom";

function Nav() {
  const { cartQuantity } = useAddToCart();
  const [activeLink, setActiveLink] = useState("home");
  const hundleClick = (link) => {
    setActiveLink(link);
    setNavOpen(false);
  };
  const [navOpen, setNavOpen] = useState(false);
  const hundleBurgerIcon = () => {
    setNavOpen(!navOpen);
  };
  const navlinksRef = useRef(null);
  const btnRef = useRef(null);
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        navlinksRef.current &&
        !navlinksRef.current.contains(e.target) &&
        btnRef.current &&
        !btnRef.current.contains(e.target)
      ) {
        setNavOpen(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);
  return (
    <nav>
      <Link to={"home"} className="logo">
        Coffee Mug
      </Link>
      <div className={`navlinks ${navOpen ? "openme" : ""}`} ref={navlinksRef}>
        <ul className="mainlinks">
          <li>
            <Link
              className={activeLink === "home" ? "active" : ""}
              onClick={() => hundleClick("home")}
              to={"home"}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to={"coffee"}
              className={activeLink === "coffee" ? "active" : ""}
              onClick={() => hundleClick("coffee")}
            >
              Coffee
            </Link>
          </li>
          <li>
            <Link
              to={"/about"}
              className={activeLink === "about" ? "active" : ""}
              onClick={() => hundleClick("about")}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to={"/menu"}
              className={activeLink === "menu" ? "active" : ""}
              onClick={() => hundleClick("menu")}
            >
              Menu
            </Link>
          </li>
          <li>
            <Link
              to={"/services"}
              className={activeLink === "services" ? "active" : ""}
              onClick={() => hundleClick("services")}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to={"/contact"}
              className={activeLink === "contact" ? "active" : ""}
              onClick={() => hundleClick("contact")}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="handlecartandbtns">
        <Link to={"/cart"}>
          <div className="cart">
            <span id="quantity">{cartQuantity}</span>
            <i className="fa-solid fa-bag-shopping"></i>
          </div>
        </Link>
        <div
          className={`btn ${navOpen ? "changeme" : ""}`}
          onClick={hundleBurgerIcon}
          ref={btnRef}
        >
          <div className="btn-line"></div>
          <div className="btn-line"></div>
          <div className="btn-line"></div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
