import Button from "../html/Button";

export default function Ex04() {
  const formAction = async (formData: FormData) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(formData.get("email"));
    console.log(formData.get("pw"));
  };

  return (
    <>
      <form action={formAction}>
        <input type="text" name="email" autoComplete="off" />
        <input type="password" name="pw" />
        <Button type="submit">로그인</Button>
      </form>
    </>
  )
}
