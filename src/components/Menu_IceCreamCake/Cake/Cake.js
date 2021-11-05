import React from "react";

const Cake = ({name, url, hashtags}) => {

  //IceCream과 똑같은 방식으로 하면 slice 에러가 나서 if문 사용해서 처리해줌.
  let a = []
  if(hashtags===undefined || hashtags===""){

  }else{
    const tagSlice= hashtags.slice(0, 2)
    const tag = tagSlice.join(" ");
    a = tag;
  }

  return(
    <>

          <div className="Ice">
            <ul className="grid-ice">
              <li className="ice">
                <div className="ice-name">{name}</div>
                <div className="ice-hash"><a>{a}</a></div>
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
export default Cake;