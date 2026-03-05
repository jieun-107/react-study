import { axiosInstance } from "../../api/axios";

export default function AxiosCrud() {
  const axiosGet = async () => {
    const { data, status } = await axiosInstance.get("/posts");
    console.log(data, status);
  };
  const axiosPost = async () => {
    const { data } = await axiosInstance.post("/posts", {
      title: "a Axios Data",
      views: 385
    });
    console.log(data);
  };
  const axiosPut = async () => {
    const { data } = await axiosInstance.put("/posts/104", {
      title: "Axios Modify Data",
      views: 320
    });
    console.log(data);
  };
  const axiosPatch = async () => {
    const { data } = await axiosInstance.patch("/posts/103", {
      title: "Axios Modify Data2",
      views: 126
    });
    console.log(data);
  };
  const axiosDelete = async () => {
    const {data, status} = await axiosInstance.delete("/posts/105");
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
