import { useState } from "react";
import LoginPanel from "./LoginPanel";

export default function Ex06() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleIsLoggedIn = () => {
    setIsLoggedIn(() => !isLoggedIn);
  }
  return (
    <>
      <LoginPanel isLoggedIn={isLoggedIn} handleIsLoggedIn={handleIsLoggedIn} />
    </>
  )
}
