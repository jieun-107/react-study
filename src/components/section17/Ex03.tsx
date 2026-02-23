import { useState } from "react";

export default function Ex03() {
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (formData: FormData) => {
    const email = formData.get("email");
    const pw = formData.get("pw");

    // api
    setIsLoading(false);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(true);
    console.log(`Login Success: ${email}/${pw}`);

  }
  return (
    <>
      <form action={handleSubmit}>
        <input type="email" name="email" autoComplete="off" />
        <input type="password" name="pw" />
        <button type="submit" disabled={isLoading}>로그인</button>  
      </form>
    </>
  )
}
