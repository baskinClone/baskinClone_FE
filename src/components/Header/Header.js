import React from "react";
import "./Header.scss";
import {motion} from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 1,
    y: '100vw'
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2
    }
  }
}



const Header = () => {

  return(
    <>
      <div><img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbGsXYq%2FbtrjBw75AIK%2FonhIS6EdYkPsP68Jjj6MO1%2Fimg.png"/></div>
      <ul className="nav-bar">
        <li> <span className="login">LOGIN</span>
          <span className="login">JOIN</span></li>
        <li className="nav">FLAVOR OF THE MONTH</li>
        <li className="nav">MENU</li>
        <li className="nav">영양 성분 및 알레르기</li>
        <li className="nav">EVENT</li>
        <li className="nav">STORE</li>
        <li className="nav">ABOUT</li>
        <div className="nav-menu">
          <ul  className="nav-menus">
            <li className="sub-nav">
              <div className="nav-img">
                <img className="happy-point" src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fb8N0Lo%2FbtrjD2sIPDX%2F72GWIUzJRbROLjy8Xedbt1%2Fimg.jpg"/>
              <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcFpr8f%2FbtrjDgEML2i%2FK201Zqrx66GYwkfHyM8epK%2Fimg.jpg"/></div>
            </li>
            <li className="sub-nav">아아ㅏ</li>
            <li className="sub-nav">아아ㅏ</li>
            <li className="sub-nav">아아ㅏ</li>
            <li className="sub-nav">아아ㅏ</li>
            <li className="sub-nav">아아ㅏ</li>
          </ul>
        </div>
      </ul>


    </>
  )
}

export default Header;