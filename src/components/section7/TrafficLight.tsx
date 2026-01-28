export default function TrafficLight({
  light, 
  handleLight,
  text
}: { 
  light: string; 
  handleLight: () => void; 
  text: string; 
}) {

  return (
    <>
      <h1 color={light}>{light}</h1>
      <h2>{text}</h2>
      <button onClick={handleLight}>LIGHT</button>
    </>
  )
}
