import { useReducer } from "react"
import counterReducer from "../../reducer/counterReducer";

export default function Counter() {
  const [count, countDispatch] = useReducer(counterReducer, 0);
  // const [count, setCount] = useState<number>(0);
  // const handleIncrement = () => {
  //   setCount((count) => count + 1);
  // }

  // const handleDecrement = () => {
  //   setCount((count) => count - 1);
  // }

  // const handleReset = () => {
  //   setCount(0);
  // }
  return (
    <>
        <h1>Count: {count}</h1>
        <button onClick={() => countDispatch({type: "INCREMENT"})}>Increment</button>
        <br/>
        <button onClick={() => countDispatch({type: "DECREMENT"})}>Decrement</button>
        <br/>
        <button onClick={() => countDispatch({type: "RESET"})}>Reset</button>
    </>
  )
}
