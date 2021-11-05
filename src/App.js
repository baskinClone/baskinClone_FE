import React from "react";
import './App.scss';
import {BrowserRouter as Router, HashRouter, Route} from "react-router-dom";

//페이지
import Header from "./components/Header/Header";
import MainiceCream from "./components/Menu_IceCream/MainIceCream";
import IceCreamCake from "./components/Menu_IceCreamCake/IceCreamCake";
import Footer from "./components/Footer/Footer";
import Beverage from "./components/Menu_Beverage/Beverage";
import Coffee from "./components/Menu_coffee/Coffee";
import Dessert from "./components/Dessert/Dessert";

function App() {
  return (
    <>
    <div className="App">
      <HashRouter>
        <Header/>
        <Route path="/" exact component={MainiceCream} />
        <Route path="/icecream" exact component={MainiceCream} />
        <Route path="/cake" exact component={IceCreamCake} />
        <Route path="/beverage" exact component={Beverage} />
        <Route path="/coffee" exact component={Coffee} />
        <Route path="/dessert" exact component={Dessert} />
        <Footer/>
      </HashRouter>
    </div>
    </>
  );
}

export default App;
