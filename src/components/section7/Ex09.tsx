import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

// Ex09: 고유한 key를 사용한 리스트 렌더링 예제
export default function Ex09() {
  // 초기 과일 목록
  const items = ["apple", "banana", "orange"];
  
  // 과일 목록을 상태로 관리 (각 과일에 고유한 UUID를 할당)
  const [fruits, setFruits] = useState(() => items.map((item) => ({
    id: uuidv4(),
    value: item,
  })));
  
  // 새로운 과일을 목록의 맨 앞에 추가
  const handleAddFruits = () => {
    setFruits([{id: uuidv4(), value: "grape"}, ...fruits]);
  };
  return (
    <>
      <p>Fruits List</p>
      {/* 첫 번째 과일 리스트: UUID를 key로 사용하여 렌더링 */}
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.id}>
            <input type="text" placeholder={fruit.value} />
          </li>
        ))}
      </ul>
      
      {/* 두 번째 과일 리스트: UUID를 key로 사용 
          주의: key 속성은 각 map() 반복 범위 내에서만 유효합니다  */}
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.id}>
            <input type="text" placeholder={fruit.value} />
          </li>
        ))}
      </ul>
      
      <button onClick={handleAddFruits}>추가</button>
    </>
  );
}
