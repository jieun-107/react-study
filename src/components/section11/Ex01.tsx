import { useState } from "react"
import Count from "./Count";

export default function Ex01() {
  const [isShow, setIsShow] = useState(false);
  return (
    <>
      <button onClick={() => setIsShow((isShow) => !isShow)}>노출 변경</button>
      {isShow && <Count />}
    </>
  )
}
