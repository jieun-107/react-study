export default function Table() {
  return (
    <>
      {/* 이벤트 전파 - 버블링 */}
      <table border={1}  onClick={() => console.log("table")}>
        <tbody onClick={() => console.log("tbody")}>
          <tr onClick={() => console.log("tr")}>
            <td 
              onClick={(event) => {
                event.stopPropagation(); // 이벤트 버블링 방지
                console.log("td")
              }}
            >
              Mike
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      {/* 이벤트 전파 - 캡처링 */}
      <table border={1}  onClickCapture={() => console.log("table")}>
        <tbody onClickCapture={() => console.log("tbody")}>
          <tr onClickCapture={() => console.log("tr")}>
            <td 
              onClickCapture={(event) => {
                event.stopPropagation(); // 이벤트 버블링 방지
                console.log("td")
              }}
            >
              Mike
            </td>
          </tr>
        </tbody>
      </table>
    </>
  )
}
