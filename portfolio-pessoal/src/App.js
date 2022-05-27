import logo from "./logo.svg";
import "./App.css";
import GlobalStyle from "./styles/global";
import { MainPage } from "./pages/MainPage/MainPage";

const App = () => {
  return (
    <>
      <MainPage />
      <GlobalStyle />
    </>
  );
};

export default App;
