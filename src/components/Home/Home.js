import React from "react";
import "./Home.scss"
import BestIceCream from "./BestIceCream/BestIceCream";


const Home = () => {

  return(
    <>
      <div className="iceCream_main"></div>
      <div className="iceCream_rank">
        <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdglP4B%2FbtrjJyKwowH%2F64pizKQ1yXOdfNudiMUWuK%2Fimg.png"/>
      </div>
      <div className="best_rank">
      <BestIceCream/>
      </div>
    </>
  )
}

export default Home;