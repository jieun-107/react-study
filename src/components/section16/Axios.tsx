import axios from "axios";
import { useEffect, useState } from "react";

interface Posts {
  id: number;
  title: string;
  views: number;
}
export default function Axios() {
  const [posts, setPosts] = useState<Posts[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    const axiosPosts = async () => {
      setIsLoading(true);
      setError("");
      try {
        const { data } = await axios.get("http://localhost:3000/posts", {
          signal: controller.signal,
        });
        setPosts(data);
      } catch (e) {
        if (e instanceof Error && e.name != "CanceledError") setError(e.message);
      } finally {
        if (!controller.signal.aborted) setIsLoading(false);
      }
    };

    axiosPosts();
    return () => controller.abort(); 
  }, []);

  if (isLoading) return <h3>Loading...</h3>;
  if (error) return <h3>Error: {error}</h3>;
  return (
    <>
      <h3>Axios</h3>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
}
