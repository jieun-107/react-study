import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  /**
   * React의 StrictMode가 활성화되어 있으면 개발 모드에서만 React가 컴포넌트에 잠재적인 문제(부작용, 안전하지 않은 코드)를 찾기 위해 일부 동작을 의도적으로 두 번 실행.
   * 이 과정에서 컴포넌트는 마운트 → 언마운트 → 다시 마운트되는 것처럼 동작하며, 특히 useEffect, useLayoutEffect 같은 사이드 이펙트 코드가 두 번 실행되는 것처럼 보일 수 있다.
   * 이 동작은 배포(프로덕션) 환경에서는 발생하지 않음.
   */
  <StrictMode>
    <App />
  </StrictMode>
);
