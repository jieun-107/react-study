import { useState } from "react";

export default function Ex10() {
  const [items, setItems] = useState([
    { id: 1, name: "Apple", category: "Fruit" },
    { id: 2, name: "Carrot", category: "Vegetable" },
    { id: 3, name: "Banana", category: "Fruit" },
    { id: 4, name: "Tomato", category: "Vegetable" },
  ]);
  const handleDeleteItem = (id: number) => {
    setItems((items) => 
      items.filter((item) => item.id !== id)
    );
  }

  return (
    <>
      <h1>Items List</h1>
      <ul>
        {items
          // .filter((element) => element.category === "Fruit")
          .map((item) => (
            <li key={item.id}>
              {item.category} - {item.name}
              <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
            </li>
          ))}
      </ul>
    </>
  );
}
