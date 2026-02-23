import { useFormStatus } from "react-dom";

type ButtonProps = React.ComponentPropsWithoutRef<"button">;

export default function Button({ children, ...props }: ButtonProps) {
  const {pending, data, method, action} = useFormStatus();
  return (
    <>
      <button {...props} disabled={pending}>{children}</button>
      {data && <p>Logging in with email: {String(data.get("email"))}</p>}
    </>
  );
}
