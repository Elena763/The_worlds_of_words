import "./header.scss";
import CardContainer from "../CardContainer/CardContainer.jsx";
import Table from "../table/Table.jsx";
import Space from "../../assets/icons/galaxy_icon.png";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Page404 from "../page404/Page404.jsx";

function Header() {
  return (
    <div className="main">
      <Router>
        <div className="header">
          <div className="menu">
            <Link to="/">
              <div className="logo">
                <img
                  className="img"
                  src={Space}
                  alt="space"
                ></img>
                The world of words
              </div>
            </Link>
          </div>
          <div className="menu">
            <div className="home">
              <Link to="/home">Home</Link>
            </div>
            <div className="game">
              <Link to="/game">Game</Link>
            </div>
          </div>
        </div>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/game" element={<Game />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<PageError />} />
        </Routes>
      </Router>
    </div>
  );
}
function Home() {
  return <div className="h_table"><Table /></div>;
}

function Game() {
  return <div className="h_card"><CardContainer /></div>;
}

function PageError() {
  return <div className="h_page"><Page404 /></div>;
}

export default Header;