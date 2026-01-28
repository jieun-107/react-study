import { useState } from "react"
import LoginState from "./LoginState";

export default function Ex02() {
  const [login, setLogin] = useState(false);
  const handleLogin = () => {
    setLogin((login) => !login);
  }
  return (
    <LoginState login={login} handleLogin={handleLogin} />
  )
}
