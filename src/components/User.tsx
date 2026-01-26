export default function User({
  userObj: { name, age, gender},
}: { 
  userObj: { name: string; age: number; gender: string; }; 
}) {
  // 부모 컴포넌트에서 전달한 props는 갯수에 상관없이 모두 객체 형태로 전달된다.
  return (
    <>
      <div>
        <p>name: {name}</p>
        <p>age: {age}</p>
        <p>gender: {gender}</p>
      </div>
    </>
  )
}
