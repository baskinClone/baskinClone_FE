import React from "react";
import "./BestIceCream.scss"



const BestIceCream = ({url, name, rank, rank_img}) => {

  return (
    <>
      <div className="monthly-ice">

        <ul className="rank_ice">
          <li className="ice_list">
            <div className="ranking_ice">
              <div className="rank_img" >
                <img src={rank_img}/>
                <div className="rank_num">{rank}</div>
              </div>
              <div className="rank_cone">
                <img className="rank_iceCream"
                     src={url}/>
              </div>
            </div>
          </li>
          <div className="iceCream_name">
          <span >{name}</span>
          </div>
        </ul>

        </div>
    </>
  )
}

export default BestIceCream;