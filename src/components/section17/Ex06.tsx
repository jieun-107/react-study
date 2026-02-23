import { Suspense } from "react";
import { axiosInstance } from "../../api/axios";
import Posts from "./Posts";
import { ErrorBoundary } from "react-error-boundary";
import Error from "./Error";
import Loading from "./Loading";

async function fetchPosts() {
  const { data } = await axiosInstance.get("/posts");
  return data; // Promise 객체 반환
}

export default function Ex06() {
  return (
    <>
      <ErrorBoundary FallbackComponent={Error}>
         <Suspense fallback={<Loading />}>
           <Posts promise={fetchPosts()} /> {/* Promise 객체를 Posts 컴포넌트에 전달 */}
         </Suspense>
      </ErrorBoundary>
    </>
  )
}
