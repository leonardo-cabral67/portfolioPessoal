import logo from "./logo.svg";
import "./App.css";
import GlobalStyle from "./styles/global";
import { MainPage } from "./pages/MainPage/MainPage";
import { Routes } from "./routes/Routes";

const App = () => {
  return (
    <>
      <Routes />
      <GlobalStyle />
    </>
  );
};

export default App;
