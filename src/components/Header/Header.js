import React from "react";
import "./Header.scss";



const Header = () => {

  return(
    <>
      <div className = "nav-logo">
        <div className="logo">
        <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbGsXYq%2FbtrjBw75AIK%2FonhIS6EdYkPsP68Jjj6MO1%2Fimg.png"
             alt="이미지"/>
        </div>
      </div>

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
            <li className="sub-nav">
              <li className="menu-nav">아이스크림</li>
              <li className="menu-nav">아이스크림케이크</li>
              <li className="menu-nav">음료</li>
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
        </div>
      </ul>


    </>
  )
}

export default Header;