import React from "react";
import "./IceCream.scss";

const IceCream = () => {

  return(
    <>
      <div className="ice-cream">
        <div className="IceCreams">
          <ul className="grid-iceCream">
            <li className="ice">
              <div className="ice-name">이름</div>
            <div className="ice-hash"><a>#크림치즈</a> <a>#그린티</a></div>
            <button className="buy">구매</button>
              <div className="ice-picture">
                <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcFs6Bt%2FbtrjHUOQcXK%2FMSXu4TCRYd7Z34f2kK5dT1%2Fimg.png"/>
              </div>
              <div className="ice-cone"></div>

            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
export default IceCream;