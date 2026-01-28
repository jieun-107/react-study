import { type Dispatch, type SetStateAction } from "react";

export default function SecondCount({
  count, 
  setCount
}: { 
  count: number; 
  setCount: Dispatch<SetStateAction<number>>; 
}) {
  // console.log("SecondCount");
  // 컴포넌트 내에 정의된 상태변수는 컴포넌트 내에서만 유효함
  // const [count, setCount] = useState(0);
  return (
    <>
      <h1>SecondCount Component: {count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>increment</button>
    </>
  )
}
