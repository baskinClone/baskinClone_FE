import React from "react";
import "./Header.scss";
import {motion} from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
    y: '-50vw'
  },
  Hover: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
}


const Header = () => {

  return(
    <>
      <ul className="nav-bar">
        <li> <span className="login">LOGIN</span>
          <span className="login">JOIN</span></li>
        <li className="nav">FLAVOR OF THE MONTH</li>
        <li className="nav">MENU</li>
        <li className="nav">영양 성분 및 알레르기</li>
        <li className="nav">EVENT</li>
        <li className="nav">STORE</li>
        <li className="nav">ABOUT</li>
        <motion.div className="nav-menu"
                    variants={containerVariants}
                    initial="hidden"
                    whileHover="Hover">
          <ul>
            <li>아아ㅏ</li>
            <li>아아ㅏ</li>
            <li>아아ㅏ</li>
            <li>아아ㅏ</li>
            <li>아아ㅏ</li>
          </ul>
        </motion.div>
      </ul>

      <div><img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbGsXYq%2FbtrjBw75AIK%2FonhIS6EdYkPsP68Jjj6MO1%2Fimg.png"/></div>
    </>
  )
}

export default Header;