export default function Button2() {
  const handleClick = (
    message: string, 
    event:React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    console.log("버튼이 클릭되었습니다.");
    console.log(event);
    console.log(message);
  };

  const handleClick2 = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log("버튼2가 클릭되었습니다.");
    console.log(event);
  };

  return (
    <>
      <button onClick={(event) => handleClick("Click!", event)}>클릭</button>
      <button onClick={handleClick2}>클릭2</button>
    </>
  )
}
