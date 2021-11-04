import React from "react";
import "./IceCream.scss";

const IceCream = ({name, url, hashtags, coneurl}) => {

  const tagSlice= hashtags.slice(0, 2)
  const tag = tagSlice.join(" ");


  return(
    <>
      <div className="ice-cream">
        <div className="IceCreams">
          <ul className="grid-iceCream">
            <li className="ice">
              <div className="ice-name">{name}</div>
            <div className="ice-hash"><a>{tag}</a></div>
            <button className="buy">구매</button>
              <div className="ice-picture">
                <img src={url}/>
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