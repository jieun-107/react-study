import { useActionState } from "react"

export default function Ex02() {
  const [count, formAction, isPending] = useActionState(async (count: number, formData: FormData) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const amount = Number(formData.get("amount"));
    return count + amount;
  }, 0);
  return (
    <>
      <form >
        <h1>Count: {count}</h1>
        <input type="number" name="amount" />
        <button type="submit" disabled={isPending} formAction={formAction}>증가</button>
        {isPending && <p>제출 중...</p>}
      </form>
    </>
  )
}
