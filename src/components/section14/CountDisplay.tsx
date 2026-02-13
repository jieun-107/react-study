import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";

export default function CountDisplay() {
  const count = useSelector((state:RootState) => state.counter.count);

  return (
    <>
      <h1 className="text-2xl">Count: {count}</h1>
    </>
  );
}
