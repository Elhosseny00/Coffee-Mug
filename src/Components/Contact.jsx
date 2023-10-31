import "../Style_Files/contact.css";

export default function Contact() {
  const submit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="contact">
      <div className="container">
        <div className="header">
          <h3>Contact us</h3>
        </div>
        <div className="contact-wrapper">
          <div className="contact-info">
            <div className="box">
              <div className="icon">
                <i class="fa-solid fa-phone"></i>
              </div>
              <div className="info">
                <h4>Phone Number</h4>
                <span>00-125-128</span>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <i class="fa-solid fa-envelope"></i>
              </div>
              <div className="info">
                <h4>Email Adress</h4>
                <span>coffeemug@gmail.com</span>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <i class="fa-solid fa-location-dot"></i>
              </div>
              <div className="info">
                <h4>Location</h4>
                <span>14 ST, cairo EGY</span>
              </div>
            </div>
          </div>
          <div className="send-message">
            <h3>Send Message</h3>
            <form action="">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="tel" placeholder="Phone" />
              <textarea placeholder="Message"></textarea>
              <button type="submit" onClick={submit}>
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
