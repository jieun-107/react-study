import { useState } from "react"

export default function Textarea() {
  // const [text, setText] = useState("");
  // const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
  //   setText(e.target.value);
  // }

  const [formState, setFormState] = useState({
    desc: "",
    introduce: "",
  });
  const handleFormState = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormState((formState) => ({
      ...formState,
      [e.target.name]: e.target.value
    }));
  }

  return (
    <div>
      <textarea name="desc" value={formState.desc} onChange={handleFormState} />
      <p>입력된 텍스트: {formState.desc}</p>

      <textarea name="introduce" value={formState.introduce} onChange={handleFormState} />
      <p>입력된 텍스트2: {formState.introduce}</p>
    </div>
  )
}
