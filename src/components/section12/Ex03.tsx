import React, { lazy, useState } from "react"
// import ChildD from "./ChildD";
// import ChildE from "./ChildE";

// 필요할때 컴포넌트를 번들에 포함시켜 다운로드 가능하도록 함. 초기 앱의 로딩 성능을 향상시킬 수 있음
const ChildD = React.lazy(() => import("./ChildD")) 
const ChildE = lazy(() => import("./ChildE"))

export default function Ex03() {
  const [isShow, setIsShow] = useState(false);
  return (
    <>
      <button onClick={() => setIsShow((isShow) => !isShow)}>토글</button>
      {isShow && (
        <>
          <ChildD />
          <ChildE />
        </>
      )}
    </>
  )
}
