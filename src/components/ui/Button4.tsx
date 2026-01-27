export default function Button4({message, handleClick, children}: {
  message: string;
  handleClick: (message: string) => void;
  children: React.ReactNode
}) {

  return (
    <>
      <button onClick={() => handleClick(message)}>{children}</button>
    </>
  )
}
