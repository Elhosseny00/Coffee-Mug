import AddToCartProvider from "./Context/CartContext";
import Nav from "./Components/Nav";
import Wrapper from "./Components/Wrapper";
import { Routes, Route } from "react-router-dom";
import Cart from "./Components/Cart";
import About from "./Components/About";
import Coffee from "./Components/Coffee";
import Menu from "./Components/Menu";
import Contact from "./Components/Contact";
import Serv from "./Components/serv";
import Footer from "./Components/Footer";
import Main from "./Components/Home.jsx";


function App() {
  return (
    <AddToCartProvider>
      <div
        className="landing"
        style={{
          width: "100%",
          height: "100vh",
          backgroundColor: "#f5f5f5",
        }}
      >
        <Nav />
        <Wrapper />
      </div>
      <Routes>
        <Route path="home" element={<Main />} />
        <Route path="cart" element={<Cart />} />
        <Route path="coffee" element={<Coffee />} />
        <Route path="about" element={<About />} />
        <Route path="menu" element={<Menu />} />
        <Route path="services" element={<Serv />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </AddToCartProvider>
  );
}

export default App;
