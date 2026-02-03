import { useState } from "react";

export default function Radio() {
  const [selectedValue, setSelectedValue] = useState("option1");
  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(e.target.value);
  }
  
  return (
    <div>
      <label htmlFor="">
        <input
          type="radio"
          name="option"
          value="option1"
          checked={selectedValue === "option1"}
          onChange={handleRadioChange}
        />
        옵션1
      </label>
      <label htmlFor="">
        <input
          type="radio"
          name="option"
          value="option2"
          checked={selectedValue === "option2"}
          onChange={handleRadioChange}
        />
        옵션2
      </label>
      <label htmlFor="">
        <input
          type="radio"
          name="option"
          value="option3"
          checked={selectedValue === "option3"}
          onChange={handleRadioChange}
        />
        옵션3
      </label>
    </div>
  );
}
