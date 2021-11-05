import React, {useEffect, useState} from "react";
import Cake from "./Cake/Cake";
import "./IceCreamCake.scss"
import {useDispatch, useSelector} from "react-redux";

import {getIceCreamCake} from "../../redux/icecreamcake/icecreamcake";
import Pagination from "react-js-pagination";
import {getFirstHidden} from "web-vitals/dist/modules/lib/getFirstHidden";

import {getBeverage} from "../../redux/Beverage/beverage";

const IceCreamCake = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  const cake_data = useSelector(state => state.iceCreamCake.data);



  useEffect(() => {
    dispatch(getIceCreamCake({page}))
  },[dispatch]);


  //페이지네이션 클릭했을 때마다 dispatch 보내기.
  const handlePageChange = (page) => {
    setPage(page);
    dispatch(getIceCreamCake({
      page
    }))
  };
  return(
    <>
      <div className="iceCake_main"></div>
      <div className="iceCake-title">
        <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbqDpYi%2FbtrjV9Kd5Ps%2F1aMpkFPsmuPkk5QZj68nok%2Fimg.png"/>
      </div>
      <div className = "mainCake">
        {cake_data && cake_data.map((cakeIce) => (
          <Cake
          name = {cakeIce.name}
          url ={cakeIce.imgUrl}
          hashtags = {cakeIce.hashtags}
          />
        ))}

      </div>
      <Pagination
        activePage={page}
        hideFirstLastPages ={getFirstHidden}
        itemsCountPerPage={2}
        totalItemsCount={7}
        pageRangeDisplayed={2}
        prevPageText={"‹"} nextPageText={"›"}
        onChange={handlePageChange}
      />
    </>
  )
}
export default IceCreamCake;