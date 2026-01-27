import { useState } from "react"

export default function Counter() {
  const [count, setCount] = useState<number>(0);
  const handleIncrement = () => {
    setCount((count) => count + 1);
  }

  const handleDecrement = () => {
    setCount((count) => count - 1);
  }

  const handleReset = () => {
    setCount(0);
  }
  return (
    <>
        <h1>Count: {count}</h1>
        <button onClick={handleIncrement}>Increment</button>
        <br/>
        <button onClick={handleDecrement}>Decrement</button>
        <br/>
        <button onClick={handleReset}>Reset</button>
    </>
  )
}
