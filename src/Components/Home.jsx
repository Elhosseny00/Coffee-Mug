import "../Style_Files/home.css";

export default function Main() {
  return (
    <div className="home">
      <div className="container">
        <div className="header">
          <h3>في حب فلسطين</h3>
        </div>
        <div className="home-wrapper">
          <h2>إن عُدتم عُدنا وإن زدتم زدنا</h2>
          <div className="imgs-cards">
            <img
              src={require("../ProjectImages/flag-palestine-6540477ba39bc.webp")}
              alt="img"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
