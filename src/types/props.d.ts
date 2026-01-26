// Props 타입 정의
// interface 대신 type 별칭 사용 가능
type PrintValueProps = {
  numberValue: number;
  stringValue: string;
  booleanValue: boolean;
  arrayValue: number[];
  objectValue: { name: string; age: number};
  handleClick: (message: string) => void;
}