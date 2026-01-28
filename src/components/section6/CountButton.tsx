export default function CountButton({
  handleIncrement, 
  handleDecrement, 
  handleReset
}: { 
  handleIncrement: () => void; 
  handleDecrement: () => void; 
  handleReset: () => void; 
}) {
  return (
    <>
      <button onClick={handleIncrement}>Increment</button>
      <br />
      <button onClick={handleDecrement}>Decrement</button>
      <br />
      <button onClick={handleReset}>Reset</button>
    </>
  )
}
