import Greeting from "./Greeting";
import GuestView from "./GuestView";
import UserView from "./UserView";

export default function Ex01() {
  const isLoggedIn = true;
  return <Greeting isLoggedIn={isLoggedIn} />;
}
