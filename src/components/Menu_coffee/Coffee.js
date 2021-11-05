import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import "./Coffee.scss";
import CoffeeCard from "./CoffeeCard/CoffeeCard";
import {getCoffee} from "../../redux/Coffee/coffee";
import BeverageCard from "../Menu_Beverage/BeverageCard/BeverageCard";


const Coffee= () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCoffee())
  },[dispatch]);

  //커피 데이터 불러오기
  const coffee_data = useSelector(state=> state.coffee.data);



  return(
    <>
      <div className="coffee_main"></div>
      <div className="ice-title">
        <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fcj5kT6%2FbtrjV1TMsKe%2FP4tjWXnAkcapx4GPpW7AV1%2Fimg.png"/>
      </div>
      <div className = "mainCoffee">
        {coffee_data && coffee_data.map((ice_coffee) => (
          <CoffeeCard
            name={ice_coffee.name}
            hashtags={ice_coffee.hashtags}
            url = {ice_coffee.imgUrl}/>
        ))}
      </div>
    </>
  )
}
export default Coffee;