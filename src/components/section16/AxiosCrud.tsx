import axios from "axios";

export default function AxiosCrud() {
  const axiosGet = async () => {
    const { data, status } = await axios.get("http://localhost:3000/posts");
    console.log(data, status);
  };
  const axiosPost = async () => {
    const { data } = await axios.post("http://localhost:3000/posts", {
      title: "a Axios Data",
      views: 385
    });
    console.log(data);
  };
  const axiosPut = async () => {
    const { data } = await axios.put("http://localhost:3000/posts/104", {
      title: "Axios Modify Data",
      views: 320
    });
    console.log(data);
  };
  const axiosPatch = async () => {
    const { data } = await axios.patch("http://localhost:3000/posts/103", {
      title: "Axios Modify Data2",
      views: 126
    });
    console.log(data);
  };
  const axiosDelete = async () => {
    const {data, status} = await axios.delete("http://localhost:3000/posts/105");
    console.log(data, status);

  };

  return (
    <>
      <button onClick={axiosGet}>GET</button><br />
      <button onClick={axiosPost}>POST</button><br />
      <button onClick={axiosPut}>PUT</button> <br />
      <button onClick={axiosPatch}>PATCH</button> <br />
      <button onClick={axiosDelete}>DELETE</button>
    </>
  )
}
