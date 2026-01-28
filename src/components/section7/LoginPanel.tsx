export default function LoginPanel({
  isLoggedIn, 
  handleIsLoggedIn
}: { 
  isLoggedIn: boolean; 
  handleIsLoggedIn: () => void; 
}) {
  return (
    <>
      <h1>{isLoggedIn? "환영합니다! 🎉" : "로그인이 필요합니다. 🔐"}</h1>
      <button onClick={handleIsLoggedIn}>{isLoggedIn? "로그아웃" : "로그인"}</button>
    </>
  )
}
