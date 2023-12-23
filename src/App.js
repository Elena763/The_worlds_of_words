//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { observer, inject } from 'mobx-react';
import { useEffect } from 'react';
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import "./App.css";

function App({ wordStore }) {

  useEffect(() => {
    wordStore.loadData();
  }, []);

  return (
    <div className="App">
        <Header />
        <Footer />
    </div>
  );
}
export default inject(['wordStore'])(observer(App));
