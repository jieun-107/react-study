import { useState } from "react"

export default function Ex03() {
  // 상태변수의 값을 직접 업데이트 방식으로 변경
  const [count, setCount] = useState<number>(0);
  const handleIncrement = () => {
    setCount(count + 1); // 0 + 1
    setCount(count + 1); // 0 + 1
    setCount(count + 1); // 0 + 1
  }

  // 상태변수의 값을 함수형 업데이트 방식으로 변경
  const [count2, setCount2] = useState<number>(0);
  const handleIncrement2 = () => {
    setCount2((count) => count + 1); // 0 + 1 함수형 업데이트 방식에서는 매개변수를 항상 최신의 값을 전달
    setCount2((count) => count + 1); // 1 + 1
    setCount2((count) => count + 1); // 2 + 1
  }

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>increment</button>
      <h1>Count2: {count2}</h1>
      <button onClick={handleIncrement2}>Increment</button>
    </>
  )
}
