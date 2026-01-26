import PrintValue from "./components/PrintValue";
import User from "./components/User";

export default function App() {
  // 기본 자료형 출력
  const primitiveString = "Hello, World!";
  const primitiveNumber = 42;
  const primitiveBoolean = false;
  const primitiveUndefined = undefined;
  const primitiveNull = null;
  const primitiveSymbol = Symbol("mySymbol");
  const primitiveBigInt = 9007199254741991n;

  // 참조 자료형 출력
  const referenceArray = [1, 2, 3, 4];
  const referenceObject = { name: "Alice", age: 30 };
  const referenceFunction = () => "함수의 리턴 값";
  const referenceDate = new Date();
  const referenceRegExp = /react/i;
  const referenceMap = new Map([
    ["key1", "value1"],
    ["key2", "value2"],
  ]);
  const referenceSet = new Set([1, 2, 3, 4]);

  // 컴포넌트에 데이터 전달
  const numberValue = 100;
  const stringValue = "Hello World";
  const booleanValue = true;
  const arrayValue = [10, 20, 30];
  const objectValue = { name: "John Doe", age: 30 };
  const handleClick = () => alert("버튼이 클릭되었습니다.");

  return (
    // <> : React.Fragment 와 같은 의미 (전체 감싸기 용도)
    <>
      <h1>컴포넌트에 다양한 자료형의 props 전달 </h1>
      <PrintValue 
        numberValue={numberValue}
        stringValue={stringValue}
        booleanValue={booleanValue}
        arrayValue={arrayValue}
        objectValue={objectValue}
        handleClick={handleClick}
      />

      {/* props를 사용하여 컴포넌트에 데이터 전달. 숫자형은 {}로 감싸야 함 */}
      <User name="Jack" age={20} /> 
      {/* <User name="Mike" age={25} />  */}

      <hr />
      
      <h2>기본 자료형 출력</h2>
      <p>문자열: {primitiveString}</p>
      <p>숫자: {primitiveNumber}</p>
      <p>논리형: {primitiveBoolean.toString()}</p>
      <p>undefined: {String(primitiveUndefined)}</p>
      <p>null: {String(primitiveNull)}</p>
      <p>Symbol: {String(primitiveSymbol)}</p>
      <p>BigInt: {primitiveBigInt}</p>
      <hr />
    
      <h2>참조 자료형 출력</h2>
      <p>배열: {referenceArray}</p>
      <p>객체: {JSON.stringify(referenceObject)}</p>
      <p>함수: {referenceFunction.toString()}</p>
      <p>Date 객체: {referenceDate.toString()}</p>
      <p>정규식: {referenceRegExp.toString()}</p>
      <p>Map: {JSON.stringify(Array.from(referenceMap.entries()))}</p>
      <p>Set: {JSON.stringify(Array.from(referenceSet))}</p>
    </>
  )
}
