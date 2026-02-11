import { useDispatch } from "react-redux";
import {
  decrement,
  increment,
  reset,
} from "../../store/features/counter/CounterSlice";

export default function CountButton() {
  const dispatch = useDispatch();
  return (
    <>
      {/* <button onClick={() => dispatch({ type: "counterSlice/decrement" })}> */}
      <button onClick={() => dispatch(decrement())}>감소</button>
      <button onClick={() => dispatch(reset())}>리셋</button>
      <button onClick={() => dispatch(increment())}>증가</button>
    </>
  );
}
