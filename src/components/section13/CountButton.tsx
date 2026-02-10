import { useCounterAction } from "../../context/counter/useCounter";

export default function CountButton() {
  const countDispatch = useCounterAction();
  console.log("CountButton");
  return (
    <>
      <button onClick={() => countDispatch({type:"DECREMENT"})}>감소</button>
      <button onClick={() => countDispatch({type:"RESET"})}>리셋</button>
      <button onClick={() => countDispatch({type:"INCREMENT"})}>증가</button>
    </>
  );
}
