export default function GuestView({handleLogin}: { handleLogin: () => void; }) {
  return (
    <>
      <h1>로그인이 필요합니다.</h1>
      <button onClick={handleLogin}>로그인</button>
    </>
  )
}
