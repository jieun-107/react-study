import { useState } from "react"

export default function Ex05() {
  const [userInfo, setUserInfo] = useState({
    name: "Jack",
    age: 20,
    gender: "male",
    contact: {
      email: "jack@example.com",
      phone: "123-4567-8901",
    },
    address: {
      home: {
        street: "123 Main St",
        city: "New York",
        zipCode: "10001"
      },
      office: {
        street: "456 Business Ave",
        city: "New York",
        zipCode: "10002"
      }
    }
  });
  
  const handleUpdateUserInfo = () => {
    setUserInfo(() => ({
      ...userInfo,
      name: "Mike",
      contact: {
        ...userInfo.contact,
        email: "Mike@example.com",
      },
      address: {
        home: {
          ...userInfo.address.home,
          zipCode: "11200",
        },
        office: {
          ...userInfo.address.office,
          zipCode: "10004"
        }
      }
    }));
  }
  
  return (
    <>
      <pre>{JSON.stringify(userInfo, null, 2)}</pre>
      <button onClick={handleUpdateUserInfo}>UpdateUserInfo</button>
    </>
  )
}
