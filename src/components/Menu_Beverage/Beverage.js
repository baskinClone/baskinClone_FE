import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import "./Beverage.scss";

import {getBeverage} from "../../redux/Beverage/beverage";
import BeverageCard from "./BeverageCard/BeverageCard";

const Beverage = () => {

  const dispatch = useDispatch();



  useEffect(() => {
    dispatch(getBeverage())
  },[dispatch]);

  const beverage_data = useSelector(state => state.beverage.data);


  return(
    <>
      <div className="Beverage_main"></div>
      <div className="ice-title">
        <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fmoixe%2FbtrjRktzKKE%2FaQrojmbFfIT9qDBreWnQ9K%2Fimg.png"/>
      </div>
      <div className = "mainBeverage">
        {beverage_data && beverage_data.map((beverage_ice) => (
          <BeverageCard
            name={beverage_ice.title}
            hashtags={beverage_ice.hashtags}
          url = {beverage_ice.imgUrl}/>
          ))}
      </div>
    </>
  )
}
export default Beverage;