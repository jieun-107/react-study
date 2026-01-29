export default function Ex07() {
  const isLoggedIn = true;
  return (
    <>
      {isLoggedIn && <h1>Welcome Back!</h1>}
      {!isLoggedIn && <h1>Please Sign Up!</h1>}
    </>
  )
}
