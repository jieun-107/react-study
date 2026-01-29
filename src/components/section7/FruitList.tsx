import { useState } from "react";

export default function FruitList() {
  const [items, setItems] = useState(["사과", "바나나", "오렌지"]);
  // const [disabled, setDisabled] = useState(false);
  const handleAddFruits = () => {
    setItems((items) => [...items, "포도"]);
    // setDisabled(true);
  };
  const isGrapeAdded = items.includes("포도");

  return (
    <>
      <p>Fruits List</p>
      <button onClick={handleAddFruits} disabled={isGrapeAdded}>
        과일 추가
      </button>
      <ul>
        {items.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </>
  );
}
