import { useState } from "react";

export default function Ex02() {
  const [name, setName] = useState<string>("Jack");
  const [age, setAge] = useState<number>(20);
  const [gender, setGender] = useState<string>("male");

  const handleClick = () => {
    setName("Jane");
    setAge(26);
    setGender("female");
  };
  return (
    <>
      <h1>name: {name}</h1>
      <h1>age: {age}</h1>
      <h1>gender: {gender}</h1>
      <button onClick={handleClick}>User Profile</button>
    </>
  )
}
