// PrintValueProps 인터페이스: props의 타입을 정의
/*
interface PrintValueProps {
  numberValue: number;        
  stringValue: string;        
  booleanValue: boolean;    
  arrayValue: number[];     
  objectValue: { name: string; age: number };
  handleClick: () => void;   
}
*/

export default function PrintValue(props: PrintValueProps) {
  return (
    <>
      <p>numberValue: {props.numberValue}</p>
      <p>stringValue: {props.stringValue}</p>
      <p>booleanValue: {props.booleanValue.toString()}</p>
      <p>arrayValue: {props.arrayValue}</p>
      <p>objectValue: {JSON.stringify(props.objectValue)}</p>
      <p>function: {props.handleClick.toString()}
      </p>
    </>
  )
}
