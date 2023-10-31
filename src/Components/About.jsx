import "../Style_Files/about.css";

export default function About() {
  return (
    <div className="about" id="about">
      <div className="container">
        <div className="header">
          <h3>About US</h3>
        </div>
        <div className="box">
          <h3>
            <i class="fa-solid fa-quote-left"></i>Welcome To Coffee Mug
            <i class="fa-solid fa-quote-right"></i>
          </h3>
          <div className="text">
            <p>
              Welcome, we are Coffee Mug, experts in the world of coffee since
              1960. We have the finest types of coffee beans from Yemen, Brazil
              and Colombia. We work hard to give you the best taste. Our goal is
              to make you happy with the drug of coffee. Only if you want to be
              happy, drink our coffee from Coffee Mug.
            </p>
            <ul className="social">
              <li>
                <a href="/">
                  <i class="fa-brands fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i class="fa-brands fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i class="fa-brands fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
