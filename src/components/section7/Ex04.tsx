import { useState } from "react"
import TrafficLight from "./TrafficLight";

export default function Ex04() {
  const [light, setLight] = useState("red");
  const [text, setText] = useState("멈추세요!");

  const handleLight = () => {
    setLight((light) => {
      switch (light) {
        case "red":
          return "yellow";
        case "yellow":
          return "green";
        case "green":
          return "red";
        default:
          return "red"; 
      }
    });

    setText(() => {
      switch (light) {
        case "red":
          return "주의하세요!";
        case "yellow":
          return "지나가세요!";
        case "green":
          return "멈추세요!";
        default:
          return "멈추세요!";
      }
    });
  }

  // const handleText = () => {
  //   setText((text) => {
  //     switch (light) {
  //       case "red":
  //         return "주의하세요!";
  //       case "yellow":
  //         return "지나가세요!";
  //       case "green":
  //         return "멈추세요!";
  //       default:
  //         return "멈추세요!";
  //     }
  //   });
  // }

  return (
    <>
      <TrafficLight light={light} handleLight={handleLight} text={text} />
    </>
  )
}
