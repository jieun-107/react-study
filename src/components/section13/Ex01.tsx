import Count from "./Count";
import CountOutside from "./CountOutside";
import CounterProvider from "../context/counter/CounterProvider";

export default function Ex01() {
  return (
    <>
      <CounterProvider>
        <Count />
        <CountOutside />
      </CounterProvider>
    </>
  );
}
