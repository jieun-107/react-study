import { useState } from "react";
// import Counter from "./components/section6/Counter";
// import Ex01 from "./components/section6/Ex01";
// import Ex02 from "./components/section6/Ex02";
// import Ex03 from "./components/section6/Ex03";
// import Ex04 from "./components/section6/Ex04";
// import Ex05 from "./components/section6/Ex05";
// import Ex06 from "./components/section6/Ex06";
// import FirstCount from "./components/section6/FirstCount";
// import SecondCount from "./components/section6/SecondCount";
// import Count from "./components/section6/Count";
// import Ex07 from "./components/section6/Ex07";
import Ex01 from "./components/section7/Ex01";
import Ex02 from "./components/section7/Ex02";

export default function App() {
  // 상태 끌어올리기 패턴 : 부모 컴포넌트에서 공통 상태와 업데이트 함수를 정의하여 자식 컴포넌트에 전달
  const [count, setCount] = useState(0);
  // 상태 업데이트 로직을 함수 내부에 작성하여 외부의 접근을 막아 캡슐화
  const handleIncrement = () => {
    setCount((count) => count + 1)
  }
  return (
    <>
      {/* ===================== Section 6 =================== */}
      {/* <Ex01 /> */}
      {/* <Ex02 /> */}
      {/* <Ex03 /> */}
      {/* <Counter /> */}
      {/* <Ex04/> */}
      {/* <Ex05 /> */}
      {/* <Ex06 /> */}
      {/* <FirstCount count={count} handleIncrement={handleIncrement} />
      <SecondCount count={count} handleIncrement={handleIncrement} /> */}
      {/* <Count /> */}
      {/* <Ex07 /> */}

      {/* ===================== Section 7 =================== */}
      {/* <Ex01 /> */}
      <Ex02 />
    </>
  );
}
