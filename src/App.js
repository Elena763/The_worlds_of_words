//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import Card from "./components/card/Card.jsx";
import Table from "./components/table/Table.jsx";
import ButtonLeft from "./components/buttonleft/ButtonLeft.jsx";
import ButtonRight from "./components/buttonright/ButtonRight.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
        <Header />
        <div className="card-container">
          <ButtonLeft />
          <Card />
          <ButtonRight />
        </div>
        <Table />
        <Footer />
    </div>
  );
}
export default App;
