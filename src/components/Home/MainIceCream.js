import React, {useEffect, useRef, useState} from "react";
import "./MainIceCream.scss"
import BestIceCream from "./BestIceCream/BestIceCream";
import IceCream from "./Icecreams/IceCream";
import Pagination from "react-js-pagination";
import {useDispatch, useSelector} from "react-redux";
import {getBestIceCream} from "../../redux/icecream/icecream";



const Home = () => {
  const dispatch = useDispatch();


  const [page, setPage] = useState(1);
  const scrollRef = useRef(null);
  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState();

  useEffect(() => {
    dispatch(getBestIceCream({page}))
  },[dispatch]);

  //Monthly Best IceCream 데이터 가져오기
  const ice_data = useSelector((state)=> state.iceCream.bestIce);

  //아이스크림 다 가져오기
  const all_ice = useSelector((state)=> state.iceCream.allIcecream);
  console.log(all_ice)


  const a = useSelector((state)=> state.iceCream);
  console.log(a)



  const onDragStart = (e) => {
    e.preventDefault();
    setIsDrag(true);
    setStartX(e.pageX + scrollRef.current.scrollLeft);
  };

  const onDragEnd = () => {
    setIsDrag(false);
  };

  const onDragMove = (e) => {
    if (isDrag) {
      scrollRef.current.scrollLeft = startX - e.pageX;
    }
  };

//throttle은 scroll 드래그 때문에 실행이 너무 많이 되는 이벤트때메 일정주기내에 한 번만 호출할 수 있도록 사용함
  const throttle = (func, ms) => {
    let throttled = false;
    return (...args) => {
      if (!throttled) {
        throttled = true;
        setTimeout(() => {
          func(...args);
          throttled = false;
        }, ms);
      }
    };
  };
  const onThrottleDragMove = throttle(onDragMove);

  const handlePageChange = (page) => {
    setPage(page);
    dispatch(getBestIceCream({
      page
    }))
  };


  return(
    <>
      <div className="iceCream_main"></div>
      <div className="iceCream_rank">
        <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdglP4B%2FbtrjJyKwowH%2F64pizKQ1yXOdfNudiMUWuK%2Fimg.png"/>
      </div>
      <div className="best_rank">
        <div className="categories"
                    onMouseDown={onDragStart}
                    onMouseMove={isDrag ? onThrottleDragMove : null}
                    onMouseUp={onDragEnd}
                    onMouseLeave={onDragEnd}
                    ref={scrollRef}>
          {ice_data&&ice_data.map((ice) => (
            <BestIceCream
              url={ice.imgUrl}
              name={ice.name}
              rank={ice.rank}
              rank_img={ice.rankLabelUrl} />
          ))}

        </div>

        <div className="ice-title">
          <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FYU2I3%2FbtrjJk7kWzQ%2FBDwUpVMBpKPUoCq5txKQO0%2Fimg.png"/>
        </div>
        <div className="all_icecream">
          {all_ice && all_ice.map((all) => (
            <IceCream name={all.name} url={all.imgUrl} hashtags={all.hashtags} coneurl={all.coneUrl}/>
          ))}

        </div>
      </div>
      <Pagination
        activePage={page}
        itemsCountPerPage={8}
        totalItemsCount={20}
        pageRangeDisplayed={8}
        prevPageText={"‹"} nextPageText={"›"}
        onChange={handlePageChange}
      />
    </>
  )
}

export default Home;