import React from "react";


const IceCream = ({name, url, hashtags, coneurl}) => {


  //서버에서 받는 태그가 너무 길어서 잘라서 사용
  const tagSlice= hashtags.slice(0, 2)
  //태그 사이에 띄어쓰기로 구분 처리
  const tag = tagSlice.join(" ");

  //서버에서 콘 이미지 받아서 콘 없는 이미지는 공백이나 undefined로 오는 현상때문에 그런경우 사진에서
  //엑박떠서 콘이미지가 없는경우 false 있는경우 true로 해서 아래에서 삼항연산자 처리해줌.
  let cone = coneurl;
  if (cone === "" || cone === undefined){
    cone = false;
  }else{
    cone = true;
  }


  return(
    <>
      <div className="ice">
        <div className="Ice">
          <ul className="grid-ice">
            <li className="ice">
              <div className="ice-name">{name}</div>
            <div className="ice-hash"><a>{tag}</a></div>
            <button className="buy">구매</button>
              <div className="ice-picture">
                <img src={url}/>
              </div>
              <div className="ice-cone">
                {cone ? (<img src={coneurl}/>) : (<div/>) }
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
export default IceCream;