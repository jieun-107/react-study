import GuestView from "./GuestView";
import UserView from "./UserView";

export default function LoginState({login, handleLogin}: { login: boolean; handleLogin: () => void; }) {
  if (login) return <UserView handleLogin={handleLogin} />;
  else return <GuestView handleLogin={handleLogin} />;
}
