import { useContext } from "react";
import { CounterContext } from "./CounterContext";

export default function useCounter() {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error("useContext는 CounterProvider 안에서만 사용가능합니다.");
  }
  return context;
}
