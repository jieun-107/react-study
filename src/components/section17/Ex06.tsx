import { Suspense } from "react";
import { axiosInstance } from "../../api/axios";
import Posts from "./Posts";

async function fetchPosts() {
  const { data } = await axiosInstance.get("/posts");
  return data; // Promise 객체 반환
}

export default function Ex06() {
  return (
    <>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Posts promise={fetchPosts()} />
      </Suspense>
    </>
  )
}
