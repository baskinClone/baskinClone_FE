import React, {useRef, useState} from "react";
import "./MainIceCream.scss"
import BestIceCream from "./BestIceCream/BestIceCream";


const Home = () => {
  const scrollRef = useRef(null);
  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState();

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
      <BestIceCream/>
        </div>

      </div>
    </>
  )
}

export default Home;