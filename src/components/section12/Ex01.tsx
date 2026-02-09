import { useState } from "react"
import ChildA from "./ChildA";

export default function Ex01() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>count: {count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>증가</button>
      <ChildA />
    </>
  )
}
