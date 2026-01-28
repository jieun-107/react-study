export default function UserView({handleLogin}: { handleLogin: () => void; }) {

  return (
    <>
      <h1>환영합니다. 사용자!</h1>
      <button onClick={handleLogin}>로그아웃</button>
    </>
  )
}
