import { createGlobalStyle } from "styled-components";
import { useScreenMode } from "../Providers/ScreemMode/ScreemMode";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;

  }

   body, input, button {
    font: 14px Roboto, sans-serif;
  }

  a {
    text-decoration: none;
    cursor: pointer
  }

  body {
    height: 100vh;
    width: 100vw;
    max-width: 1200px;
    text-align: center;
    margin-bottom: 60px;
    overflow-x: hidden;
  }

  button {
    cursor: pointer;
    background: none;
    border: none;
  }

  ul {
    list-style: none;
  }
`;
