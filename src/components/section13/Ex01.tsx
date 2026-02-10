import Count from "./Count";
import CountOutside from "./CountOutside";
import ThemeProvider from "../../context/theme/ThemeProvider";
import Theme from "./Theme";
import ThemeButton from "./ThemeButton";
import CounterProvider from "../../context/counter/CounterProvider";

export default function Ex01() {
  return (
    <>
      <ThemeProvider>
        <CounterProvider>
          <Count />
          <CountOutside />
          <Theme />
          <ThemeButton />
        </CounterProvider>
      </ThemeProvider>
    </>
  );
}
