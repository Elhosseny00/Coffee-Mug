import "../Style_Files/footer.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="logo">
        <p>Coffee Mug</p>
      </div>
      <ul className="socail">
        <li>
          <a href="\">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
        </li>
        <li>
          <a href="\">
            <i className="fa-brands fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="\">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </li>
        <li>
          <a href="\">
            <i className="fa-brands fa-youtube"></i>
          </a>
        </li>
        <li>
          <a href="\">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
        </li>
      </ul>
      <div className="about-me">
        <p>
          &copy;{year}
          COFFEE MUG, All Rights Reserved
        </p>
        <p>Made With All Love By Hosseny</p>
      </div>
    </footer>
  );
}
