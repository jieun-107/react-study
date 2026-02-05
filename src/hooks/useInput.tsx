import { useState } from "react";

// 커스텀 훅 - 리액트에서 기존에 존재하는 훅을 사용하여 나만의 훅을 만듦.
export default function useInput(initialValue = "", validateFn: (value: string) => string | undefined) {
  const [error, setError] = useState(initialValue);
  const [value, setValue] = useState(initialValue);
  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setError(validateFn(e.target.value) || "")
  }

  return {
    value,
    handleValueChange,
    error,
  }
}
