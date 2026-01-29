import { useState } from "react"

export default function Notification() {
  const [showNotification, setShowNotification] = useState(false);
  // const handleNotification = () => {
  //   setShowNotification((showNotification) => !showNotification);
  // }

  const handleNotification = (isShow: boolean) => {
    setShowNotification(isShow);
  }
  return (
    <>
      {showNotification && <><h1>📢 새로운 알림이 도착했습니다!</h1><button onClick={() => handleNotification(false)}>알림 닫기</button></> }
      {!showNotification && <button onClick={() => handleNotification(true)}>알림 보기</button>}
      
    </>
  )
}
 