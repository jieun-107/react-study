export default function Button() {
  const handleClick = () => alert("Click");
  return (
    <>
      {/* 인라인 화살표 함수로 직접 이벤트 핸들러 정의 (간단하지만 재사용 불가) */}
      {/* <button onClick={() => alert("Click!")}>클릭</button> */}
      
      {/* 매개변수가 없는 이벤트 핸들러: 별도 함수를 정의하여 onClick에 참조로 전달.
         이 방식은 함수가 재생성되지 않아 성능 최적화에 유리. */}
      <button onClick={handleClick}>클릭2</button>
      {/* 매개변수가 있는 이벤트 핸들러: 화살표 함수로 래핑하여 함수 호출.
         handleClick()처럼 호출 시 매개변수를 전달할 수 있음. */}
      <button onClick={() => handleClick()}>클릭3</button>
    </>
  )
}
