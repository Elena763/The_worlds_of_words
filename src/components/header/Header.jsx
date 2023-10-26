import "./header.scss";
import Space from "../../assets/icons/galaxy_icon.png";

function Header() {
  return (
    <div className="header">
      <div className="menu">
        <div className="logo">
          <img
            className="img"
            src={Space}
            alt="space"
          ></img>
          The world of words
        </div>
      </div>
      <div className="menu">
        <div className="home">Home</div>
        <div className="game">Game</div>
      </div>
    </div>
  );
}
export default Header;