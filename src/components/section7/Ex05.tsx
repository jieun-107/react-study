import GuestView2 from "./GuestView2";
import UserInfoView from "./UserInfoView";
import UserView2 from "./UserView2";

export default function Ex05() {
  const isLoggedIn = true;
  const compenents = isLoggedIn? 
    <>
      <UserView2 />
      <UserInfoView />
    </> : <GuestView2 />;
  return (
    <>
      {compenents}
    </>
  )
}
