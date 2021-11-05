import React from "react";

const CoffeeCard = ({name, hashtags, url}) => {



const tagSlice = hashtags.slice(0,2);
const tag = tagSlice.join(" ");


  return(
    <>

        <div className="Ice">
          <ul className="grid-ice">
            <li className="ice">
              <div className="ice-name">{name}</div>
              <div className="ice-hash"><a>{tag}</a></div>
              <button className="buy">구매</button>
              <div className="ice-picture">
                <img src={url}/>
              </div>
            </li>
          </ul>
        </div>

    </>
  )
}
export default CoffeeCard;