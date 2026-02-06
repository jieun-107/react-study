import { useEffect, useState } from "react"

export default function Count() {
  const [count, setCount] = useState(0);

  // useEffect(이펙트함수, 의존성배열)
  // 의존성 배열이 비어있을 경우 컴포넌트가 생성될 때만 호출됨
  useEffect(() => {
    console.log("Count 컴포넌트 생성!");

    // 컴포넌트가 삭제(언마운트) 될 때 호출하는 코드 : useEffect의 이펙트 함수 내부에서 함수를 리턴하면 됨
    return () => {
      console.log("Count 컴포넌트 삭제");
    }
  }, [])

  // 컴포넌트의 상태가 변경 되었을 때만 호출하려면 : useEffect의 의존성 배열에 변경상태를 감지하고 싶은 상태값을 넣어줌
  useEffect(() => {
    console.log("Count Change : " + count);
  }, [count])
  
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>증기</button>
    </>
  )
}
