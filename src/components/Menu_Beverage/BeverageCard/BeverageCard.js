import React from "react";

const BeverageCard = ({name, url, hashtags}) => {

  const nameSplit = name.split("-");
  const names = nameSplit[0];

  const tagSplit = hashtags.split("#");
  const tag = tagSplit.join(" #");



  return(
    <>
      <div className="ice">
        <div className="Ice">
          <ul className="grid-ice">
            <li className="ice">
              <div className="ice-name">{names}</div>
              <div className="ice-hash"><a>{tag}</a></div>
              <button className="buy">구매</button>
              <div className="ice-picture">
                <img src={url}/>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
export default BeverageCard;