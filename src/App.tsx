export default function App() {

  const primitiveString = "Hello, World!";
  const primitiveNumber = 42;
  const primitiveBoolean = false;
  const primitiveUndefined = undefined;
  const primitiveNull = null;
  const primitiveSymbol = Symbol("mySymbol");
  const primitiveBigInt = 9007199254741991n;

  return (
    // <> : React.Fragment 와 같은 의미 (전체 감싸기 용도)
    <>
      <h2>기본 자료형 출력</h2>
      <p>문자열: {primitiveString}</p>
      <p>숫자: {primitiveNumber}</p>
      <p>논리형: {primitiveBoolean.toString()}</p>
      <p>undefined: {String(primitiveUndefined)}</p>
      <p>null: {String(primitiveNull)}</p>
      <p>Symbol: {String(primitiveSymbol)}</p>
      <p>BigInt: {primitiveBigInt}</p>
    </>
  )
}
