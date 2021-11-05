import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import "./Coffee.scss";



const Coffee= () => {

  const dispatch = useDispatch();


  //
  // useEffect(() => {
  //   dispatch(getBeverage())
  // },[dispatch]);
  //


  return(
    <>
      <div className="coffee_main"></div>
      <div className="ice-title">
        <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fcj5kT6%2FbtrjV1TMsKe%2FP4tjWXnAkcapx4GPpW7AV1%2Fimg.png"/>
      </div>
      <div className = "mainBeverage">

      </div>
    </>
  )
}
export default Coffee;