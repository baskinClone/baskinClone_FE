import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import "./Dessert.scss";
import {getDessert} from "../../redux/Dessert/dessert";
import Pagination from "react-js-pagination";
import {getFirstHidden} from "web-vitals/dist/modules/lib/getFirstHidden";
import DessertCard from "./DessertCard/DessertCard";


const Dessert = () => {

  const [page, setPage] = useState(1);

  const dispatch = useDispatch();



  useEffect(() => {
    dispatch(getDessert({page}))
  },[dispatch]);

  const handlePageChange = (page) => {
    setPage(page);
    dispatch(getDessert({
      page
    }))
  };

 const dessert_data = useSelector(state=>state.dessert.data);



  return(
    <>
      <div className="Dessert_main"></div>
      <div className="ice-title">
        <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fb85gGZ%2Fbtrj2hJCVk7%2FX52wFfGDAmPhQCue9He8oK%2Fimg.png"/>
      </div>
      <div className = "mainDessert">
        {dessert_data&& dessert_data.map((del) => (
          <DessertCard name={del.title} hashtags={del.hashtags} url={del.imgUrl}/>
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
export default Dessert;