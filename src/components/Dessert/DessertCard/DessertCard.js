import React from "react";

const DessertCard = ({name, url, hashtags}) => {

  //이름이 길어서 grid css 망가지는 부분때문에 이름 자름.
  const nameSplit = name.split("(");
  const names = nameSplit[0];

  const tagSplit = hashtags.split("#");
  const tag = tagSplit.join(" #");



  return(
    <>
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

    </>
  )
}
export default DessertCard;