import { useEffect, useState } from "react";

interface Posts {
  id: number;
  title: string;
  views: number;
}
export default function Fetch() {
  const [posts, setPosts] = useState<Posts[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    const fetchPosts = async () => {
      setIsLoading(true);
      setError("");
      try {
        const response = await fetch("http://localhost:3000/posts", {
          signal: controller.signal,
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setPosts(data);
      } catch (e) {
        if (e instanceof Error && e.name != "AbortError") setError(e.message);
      } finally {
        if (!controller.signal.aborted) setIsLoading(false);
      }
    };

    fetchPosts();
    return () => controller.abort(); // 컴포넌트가 언마운트될 때 fetch 요청을 취소하여 메모리 누수 방지
  }, []);

  if (isLoading) return <h3>Loading...</h3>;
  if (error) return <h3>Error: {error}</h3>;
  return (
    <>
      <h3>Fetch</h3>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
}
