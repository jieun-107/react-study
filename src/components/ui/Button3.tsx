export default function Button3({
  handleClick2,
}: {
  handleClick2: (
    message: string,
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> 
   ) => void;  
}) {
  return (
    <>
      <button onClick={(event) => handleClick2("Hello!", event)}>클릭3</button>
    </>
  );
  
}
