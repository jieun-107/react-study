import axios from "axios";
import { Heart } from "lucide-react";
import {
  startTransition,
  useEffect,
  useOptimistic,
  useRef,
  useState,
} from "react";

interface Posts {
  id: number;
  isLike: boolean;
}
export default function Ex05() {
  const controller = useRef<AbortController | null>(null);
  const [posts, setPosts] = useState<Posts[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [optimisticPosts, addOptimisticPosts] = useOptimistic(
    posts, // 실제 서버 데이터
    (statePosts, id) => {
      // 어떻게 업데이트할지 정의하는 함수
      return statePosts.map((statePost) =>
        statePost.id === id
          ? { ...statePost, isLike: !statePost.isLike }
          : statePost,
      );
    },
  );

  const updateLike = (id: number, isLike: boolean) => {
    controller.current?.abort();
    controller.current = new AbortController();
    startTransition(async () => {
      addOptimisticPosts(id);
      try {
        const { data } = await axios.patch(
          `http://localhost:3000/posts/${id}`,
          {
            isLike: !isLike,
          },
          {
            signal: controller.current?.signal,
          },
        );
        setPosts((posts) =>
          posts.map((post) => (post.id === data.id ? data : post)),
        );
      } catch (e) {
        console.error("좋아요 업데이트 실패: " + e);
      }
    });
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get("http://localhost:3000/posts");
        setPosts(data);
      } catch (e) {
        console.error("에러 발생: " + e);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, []);

  if (isLoading) return <p>Loading...</p>;
  return (
    <>
      {/* fill: 'none', stroke: 'currentColor' */}
      {/* fill: 'rgb(255,0,0)', stroke: 'rgb(255,0,0)' */}
      {posts.map((post) => {
        return (
          <Heart
            key={post.id}
            fill={post.isLike ? "rgb(255,0,0)" : "none"}
            stroke={post.isLike ? "rgb(255,0,0)" : "currentColor"}
            onClick={() => updateLike(post.id, post.isLike)}
          />
        );
      })}
      {/* <Heart fill="rgb(255, 0, 0)" stroke="rgb(255,0,0)" /> */}
    </>
  );
}
