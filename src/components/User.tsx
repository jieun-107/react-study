export default function User(props: {name: string; age: number}) {
  // 부모 컴포넌트에서 전달한 props는 갯수에 상관없이 모두 객체 형태로 전달된다.
  return (
    <>
      <div>
        <p>name: {props.name}</p>
        <p>age: {props.age}</p>
      </div>
    </>
  )
}
