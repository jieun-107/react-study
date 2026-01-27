import { useState } from "react"

export default function Ex04() {
  const [userInfo, setUserInfo] = useState({
    name: "Jack",
    age: 25,
    gender: "male",
  });

  // 직접 업데이트 방식
  const handleUpdateUserInfo = () => {
    setUserInfo({
      ...userInfo,
      name: "Mike",
      age: 30,
    });
  }

  const handleUpdateUserInfo2 = () => {
    // setUserInfo((userInfo) => ({
    //   ...userInfo,
    //   name: "Jay",
    //   age: 25,
    // }));

    // 객체의 모든 속성을 변경하는 경우는 직접 업데이트 방식으로 하는것이 적절
    setUserInfo({
      name: "July",
      age: 25,
      gender: "female",
    });
  }


  return (
    <>
      <p>name: {userInfo.name}</p>
      <p>age: {userInfo.age}</p>
      <p>gender: {userInfo.gender}</p>
      <button onClick={handleUpdateUserInfo}>UpdateUserInfo</button>
      <br />
      <button onClick={handleUpdateUserInfo2}>UpdateUserInfo2</button>
    </>
  )
}
