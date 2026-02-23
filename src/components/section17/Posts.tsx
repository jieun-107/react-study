import { use } from "react";

export default function Posts({
  promise,
}: {
  promise: Promise<
    {
      id: number;
      title: string;
      views: number;
    }[]
  >;
}) {
  const posts = use(promise); // promise가 해결될 때까지 기다렸다가 결과를 반환
  return (
    <>
      <pre>{JSON.stringify(posts, null, 2 )}</pre>
    </>
  );
}
