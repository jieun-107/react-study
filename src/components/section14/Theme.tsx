import { useSelector } from "react-redux"
import type { RootState } from "../../store/store";

export default function Theme() {
  const theme = useSelector((state:RootState) => state.theme.theme);
  return (
    <>
      <h1 className="text-2xl">Theme : {theme}</h1> 
    </>
  )
}
