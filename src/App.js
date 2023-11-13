//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import CardContainer from "./components/CardContainer/CardContainer.jsx";
import Table from "./components/table/Table.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
        <Header />
        <CardContainer />
        <Table />
        <Footer />
    </div>
  );
}
export default App;
