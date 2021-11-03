import React from "react";
import './App.scss';
import {BrowserRouter as Router, Route} from "react-router-dom";

//페이지
import IceCream from "./components/Home/MainIceCream";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
    <div className="App">
      <Router>
        <Header/>
        <Route path="/" exact component={IceCream} />
      </Router>
    </div>
    </>
  );
}

export default App;
