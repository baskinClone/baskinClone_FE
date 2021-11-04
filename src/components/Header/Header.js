import React from "react";
import "./Header.scss";

import {NavLink} from "react-router-dom";


const Header = () => {

  return(
    <>
      <div className = "nav-logo">
        <ul className="nav-icons">
          <li className="nav-icon">
            <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FchJjjX%2FbtrjXCFLvkf%2FhPHrQNSc7eqK0rxEt9EDJk%2Fimg.png"/>
          </li>
          <li className="nav-icon">
            <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FKykMb%2FbtrjYhai8Ov%2FIcfvkl6nl0lhQqFhrrva0k%2Fimg.png"/>
          </li>
          <li className="nav-icon">
            <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcNTv09%2FbtrjXFCq1d7%2Fj3bMKAa2LLsPKuub41Uh20%2Fimg.png"/>
          </li>
          <li className="nav-icon">
            <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FL231J%2FbtrjXEQ4YtJ%2FiAkPQPS5k8yuE4wDRFbWRk%2Fimg.png"/>
          </li>
          <li className="nav-icon">
            <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FpNy1w%2FbtrjXCFLvkm%2FHqxtquwWZ8ZyEmCtZFEx1K%2Fimg.png"/>
          </li>
        </ul>
        <div className="logo">
        <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbGsXYq%2FbtrjBw75AIK%2FonhIS6EdYkPsP68Jjj6MO1%2Fimg.png"
             alt="이미지"/>
        </div>
        <ul className="nav-info">
          <li className="info">고객센터</li>
          <li className="info">CONTACT US</li>
          <li className="info">
            <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbIzyTI%2FbtrjWVMmQZa%2FQcFgPtDmlWK1akKPNs7Xo0%2Fimg.png"/>
          </li>
        </ul>
      </div>
<div className="main-nav">
      <ul className="nav-bar">
        <li className="nav-login">
          <span className="login">LOGIN</span>
          <span className="login">JOIN</span>
        </li>
        <li className="nav">FLAVOR OF THE MONTH</li>
        <li className="nav">MENU</li>
        <li className="nav">영양 성분 및 알레르기</li>
        <li className="nav">EVENT</li>
        <li className="nav">STORE</li>
        <li className="nav">ABOUT</li>
        <div className="nav-menu">
          <ul  className="nav-menus">
            <ul className="sub-navs">
            <li className="sub-nav">
              <img className="happy-point" src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fb8N0Lo%2FbtrjD2sIPDX%2F72GWIUzJRbROLjy8Xedbt1%2Fimg.jpg"/>
              <img className="cheese-tree" src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcFpr8f%2FbtrjDgEML2i%2FK201Zqrx66GYwkfHyM8epK%2Fimg.jpg"/>
            </li>
            <li className="sub-nav">
              <NavLink to={"/icecream"}>
              <li className="menu-nav">아이스크림</li>
              </NavLink>
              <NavLink to={"/cake"}>
              <li className="menu-nav">아이스크림케이크</li>
              </NavLink>
              <NavLink to={"/beverage"}>
              <li className="menu-nav">음료</li>
              </NavLink>
              <li className="menu-nav">커피</li>
              <li className="menu-nav">디저트</li>
            </li>
            <li className="sub-nav">
              <li className="nutrient-nav">아이스크림</li>
              <li className="nutrient-nav">음료</li>
              <li className="nutrient-nav">커피</li>
            </li>
            <li className="sub-nav">
              <li className="event-nav">진행중이벤트</li>
              <li className="event-nav">당첨자발표</li>
            </li>
            <li className="sub-nav">
              <li className="store-nav">매장찾기</li>
              <li className="store-nav">고객센터</li>
              <li className="store-nav">단체주문</li>
            </li>
            <li className="sub-nav">
              <li className="about-nav">공지사항</li>
              <li className="about-nav">보도자료</li>
              <li className="about-nav">채용정보</li>
              <li className="about-nav">점포개설문의</li>
              <li className="about-nav">CONTACT US</li>
            </li>
            </ul>
          </ul>

        </div>
      </ul>

</div>
    </>
  )
}

export default Header;