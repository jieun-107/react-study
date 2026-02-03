import { useState } from "react"

export default function Checkbox() {
  // const [chk1, setChk1] = useState(false);
  // const handleCheckChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setChk1(e.target.checked);
  // }

  const [formState, setFormState] = useState({
    item1: false,
    item2: false,
  });

  const handleFormStateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState(() => ({
      ...formState,
      [e.target.name]: e.target.checked
    }));
  }

  return (
    <div>
      <div>
        <input type="checkbox" name="item1" id="item1" checked={formState.item1} onChange={handleFormStateChange} />
        <label htmlFor="item1">아이템1 ({formState.item1 ? "선택됨" : "선택되지 않음"})</label>
      </div>
      <div>
        <input type="checkbox" name="item2" id="item2" checked={formState.item2} onChange={handleFormStateChange} />
        <label htmlFor="item2">아이템2 ({formState.item2 ? "선택됨" : "선택되지 않음"})</label>
      </div>
    </div>
  )
}
