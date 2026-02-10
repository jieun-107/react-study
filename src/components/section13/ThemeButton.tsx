import { useThemeAction } from "../../context/theme/useTheme"

export default function ThemeButton() {
  const { changeTheme } = useThemeAction();
  console.log("ThemeButton");
  return (
    <>
      <button onClick={changeTheme}>테마변경</button>
    </>
  )
}
