import React,{useState} from "react";
import "./Footer.scss";
const Footer = () => {

  const [display, setDisplay] = useState(false);

  const onClickDrop = () => {
    setDisplay(!display);
  }


  return(
    <>
    <div className="Footer">
      <ul className="footer_menu">
        <li>점포개설문의</li>
        <li>채용문의</li>
        <li>윤리신고센터</li>
        <li>이용약관</li>
        <li>개인정보처리방침</li>
        <li>영상정보처리기기운영관리방침</li>
        <li>거래희망회사 사전등록</li>
      </ul>
      <div className="middle-footer">
        <ul className="mid-footer">
        <li>
          <img src="http://www.baskinrobbins.co.kr/assets/images/common/btn_happypoint.png"/>
        </li>
        <li>
          <img src="http://www.baskinrobbins.co.kr/assets/images/common/btn_happymarket.png"/>
        </li>
        <li>
          <img src="http://www.baskinrobbins.co.kr/assets/images/common/btn_spc_story.png"/>
        </li>
        <li>
          <img src="http://www.baskinrobbins.co.kr/assets/images/common/btn_norton.gif"/>
          <img src="http://www.baskinrobbins.co.kr/assets/images/common/btn_ccm.gif"/>
          <img src="http://www.baskinrobbins.co.kr/assets/images/common/btn_ksa.png"/>
        </li>
          <div className="dropDown">
            {display? ( <ul className="hidden_drop">
              <li>베스킨 스쿨</li>
              <li>SPC그룹사이트</li>
              <li>SPCMAGAZIN</li>
              <li>BR코리아</li>
              <li>해피포인트카드</li>
              <li>파스쿠찌</li>
              <li>삼립</li>
              <li>파리바게트</li>
              <li>던킨도너츠</li>
                <button className="dropBtn" onClick={onClickDrop}>FAMILY SITE<a className="click_arrow">▲</a>
                </button>
            </ul>
               ) : ( <button className="dropBtn" onClick={onClickDrop}>FAMILY SITE<a className="click_arrow">▼</a>
            </button>)
          }
          </div>
        </ul>
      </div>
      <div className="footer_info"></div>
    </div>
    </>
  )
}

export default Footer;