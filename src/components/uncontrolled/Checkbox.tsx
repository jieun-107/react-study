import { useRef } from "react";

export default function Checkbox() {
  const privacyRef = useRef<HTMLInputElement>(null);
  const termsRef = useRef<HTMLInputElement>(null);
  const fruitsRef = useRef<HTMLInputElement[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const selectedFruits = fruitsRef.current
      .filter((fruit) => fruit.checked)
      .map((fruit) => fruit.value);
    console.log(selectedFruits);

    const privacy = privacyRef.current?.checked;
    if (!privacy) {
      alert("개인정보에 동의해주세요.");
      return;
    }

    const trems = termsRef.current?.checked;
    if (!trems) {
      alert("약관에 동의해주세요.");
      return;
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="checkbox" ref={privacyRef} />
          <label htmlFor="">개인정보동의</label>
        </div>
        <div>
          <input type="checkbox" ref={termsRef} />
          <label htmlFor="">약관동의</label>
        </div>
        <div>
          <input
            type="checkbox"
            value={"사과"}
            ref={(el) => {
              fruitsRef.current[0] = el!;
            }}
          />
          <label htmlFor="">사과</label>
        </div>
        <div>
          <input
            type="checkbox"
            value={"바나나"}
            ref={(el) => {
              fruitsRef.current[1] = el!;
            }}
          />
          <label htmlFor="">바나나</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="오렌지"
            ref={(el) => {
              fruitsRef.current[2] = el!;
            }}
          />
          <label htmlFor="">오렌지</label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
