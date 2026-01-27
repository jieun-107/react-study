import { useState } from "react"

export default function Ex06() {
  const [fruits, setFruits] = useState(['apple', 'banana', 'kiwi', 'orange' ]);
  const handleAddFruits = () => {
    // setFruits(() => [...fruits, "melon"]);
    // 
    // setFruits((fruits) =>
    //   fruits.map((fruit) => (fruit === "apple" ? "grape" : fruit))
    // );
    setFruits((fruits) => [...fruits.slice(0, 1), "melon", ...fruits.slice(1)]);

  }
  return (
  <>
    <p>{fruits.join(", ")}</p>
    <button onClick={handleAddFruits}>Add Fruits</button>
  </>
  )
}
