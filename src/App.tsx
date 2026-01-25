import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

export default function App() {
  return (
    // <> : React.Fragment 와 같은 의미 (전체 감싸기 용도)
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )
}
