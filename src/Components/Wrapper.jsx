import "../Style_Files/wrapper.css";

export default function Wrapper() {
  return (
    <div className="wrapper">
      <div className="fristword">
        <span>Feel</span>
        <p>the teste</p>
      </div>
      <div className="landingphoto">
        <img src={require("../ProjectImages/land.png")} alt="img" />
      </div>
      <div className="lastword">
        <p>Of</p>
        <span>Coffee</span>
      </div>
    </div>
  );
}
