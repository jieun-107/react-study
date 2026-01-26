type UserProfileProps = {
  name: string;
  age: number;
  isAdmin: boolean;
}

export default function UserProfile({
  name, age, isAdmin
}: UserProfileProps) {
  return (
    <div>
        <p>이름: {name}</p>
        <p>나이: {age}</p>
        <p>{isAdmin ? "관리자 계정" : "일반 사용자"}</p>
    </div>
  )
}
