import React, { useState } from "react";
import { Link } from "react-router-dom";
function Home(props) {
  const styles = {
    box: {
      top: "10%",
      position: "relative",
      top: "80px",
      color: "#fff", /* 텍스트 색상 설정 */
      textAlign: "center", /* 텍스트 가운데 정렬 */
      lineHeight: "200px", /* 수직 가운데 정렬을 위한 높이 설정 */
    },
    buttonContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    /* 글자 스타일 설정 */
    text: {
      fontSize: "48px", /* 글자 크기 설정 */
    },
    baseImg: {

      height: "350px",
      margin: "30px",
    },
    imageButtonContainer: {
      position: "relative",
      display: "inline-block",
    },
    buttonImg: {
      position: "absolute",
      top: "-110px",
      right: "-10px",
      width: "50%", // 이미지의 크기를 조절하세요
      height: "100%",
      transition: "opacity 0.3s ease",
      zIndex: 1, // 이미지가 버튼 아래로 내려가도록 설정
    },

    Button: {
      width: "300px",
      height: "100px",
      margin: "20px",
      fontSize: "20px",
      fontWeight: "bold",
      backgroundColor: "#3498db", // 보완색인 블루 컬러
      color: "#fff",
      border: "none",
      cursor: "pointer",
      transition: "background-color 0.3s ease", // hover 효과 부드럽게 적용
    },

    ButtonHover: {
      width: "300px",
      height: "100px",
      margin: "20px",
      fontSize: "20px",
      fontWeight: "bold",
      backgroundColor: "#3498db", // 보완색인 블루 컬러
      color: "#fff",
      border: "none",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
      backgroundColor: "#2980b9", // hover 시 조금 더 진한 블루 컬러
    },
  };

  const [multipleHover, setMultiple] = useState(false);
  const [dictionaryHover, setDictionary] = useState(false);
  const [subjectHover, setSubject] = useState(false);

  return (
    <>
      <div style={styles.box}>
        <p style={styles.text}>일본어 상용한자 공부</p>
      </div>
      <div>
        <img src="/img/base_cat_1.png" style={styles.baseImg} />
      </div>
      <div>
        <div style={styles.buttonContainer}>
          <div style={styles.imageButtonContainer}>
            <img src="/img/base_cat_2.png" style={styles.buttonImg}/>
            <Link to="/dictionary">
              <button style={dictionaryHover ? styles.ButtonHover : styles.Button} onMouseOver={() => setDictionary(true)} onMouseLeave={() => setDictionary(false)}>
                상용한자 사전
              </button>
            </Link>
          </div>
          <Link to="/multiple-choice">
            <button style={multipleHover ? styles.ButtonHover : styles.Button} onMouseOver={() => setMultiple(true)} onMouseLeave={() => setMultiple(false)}>
              객관식 문제
            </button>
          </Link>
          <Link to="/subject">
            <button style={subjectHover ? styles.ButtonHover : styles.Button} onMouseOver={() => setSubject(true)} onMouseLeave={() => setSubject(false)}>
              주관식 문제
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;