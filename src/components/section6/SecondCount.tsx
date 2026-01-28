
export default function SecondCount({
  count, 
  handleIncrement
}: { 
  count: number; 
  handleIncrement: () => void;
}) {
  // console.log("SecondCount");
  // 컴포넌트 내에 정의된 상태변수는 컴포넌트 내에서만 유효함
  // const [count, setCount] = useState(0);
  return (
    <>
      <h1>SecondCount Component: {count}</h1>
      <button onClick={handleIncrement}>increment</button>
    </>
  )
}
