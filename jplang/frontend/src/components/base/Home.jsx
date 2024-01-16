import React from "react";
import {Link} from "react-router-dom";
function Home(props) {
  const styles = {
    box: {
      top: "10%",
      position: "relative",
      top: "-300px",
      color: "#fff", /* 텍스트 색상 설정 */
      textAlign: "center", /* 텍스트 가운데 정렬 */
      lineHeight: "200px", /* 수직 가운데 정렬을 위한 높이 설정 */
    },

    /* 글자 스타일 설정 */
    text: {
      fontSize: "48px", /* 글자 크기 설정 */
    },
  };

  return (
    <>
        <div style={styles.box}>
        <p style={styles.text}>일본어 상용한자 공부</p>
        </div>
        <div>
            <Link to="/multiple-choice">멀티 드가자</Link>
            <Link to="/dictionary">사전 드가자</Link>
            <Link to="/subject">주관 드가자</Link>
        </div>
    </>
  );
}

export default Home;