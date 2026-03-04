import React from 'react'

export default function FetchCrud() {
  const fetchGet = async () => {
    const response = await fetch("http://localhost:3000/posts");
    const data = await response.json();
    console.log(data);
  };
  const fetchPost = async () => {
    const response = await fetch("http://localhost:3000/posts", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "a new Title",
        views: 155,
      })
    });
    const data = await response.json();
    console.log(data);
  };
  const fetchPut = async () => {
    const response = await fetch("http://localhost:3000/posts/105", {
      method: "PUT",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "POST #105",
        views: 155,
      })
    });
    const data = await response.json();
    console.log(data);
    
  };
  const fetchPatch = async () => {
    const response = await fetch("http://localhost:3000/posts/104", {
      method: "PATCH",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "POST #104",
        views: 148,
      })
    });
    const data = await response.json();
    console.log(data);
  };
  const fetchDelete = async () => {
    await fetch("http://localhost:3000/posts/105", {
      method: "DELETE",
    });
  };

  return (
    <>
      <button onClick={fetchGet}>GET</button><br />
      <button onClick={fetchPost}>POST</button><br />
      <button onClick={fetchPut}>PUT</button> <br />
      <button onClick={fetchPatch}>PATCH</button> <br />
      <button onClick={fetchDelete}>DELETE</button>
    </>
  )
}
