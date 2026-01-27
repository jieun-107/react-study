import { useState } from "react";

export default function Ex01() {
  const [state, setState] =  useState<number | string>(0); // <number> 타입 추론 자료형이 같을 경우 생략 가능
  const [isShow, setIsShow] = useState<boolean>(true);
  const handleSetToTen = () => {
    setState("10");
    setIsShow(false);
  };
  return (
    <>
      <h1>state: {state}</h1>
      <h1>show: {isShow.toString()}</h1>
      <button onClick={handleSetToTen}>Set to 10</button>
    </>
  );
}
