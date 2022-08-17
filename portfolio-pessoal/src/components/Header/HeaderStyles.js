import styled from "styled-components";

export const HeaderContainer = styled.div`
  @keyframes changeBackgroundColorToBlack {
    0% {
      background-color: #fff;
    }
    100% {
      background-color: #000;
    }
  }

  @keyframes changeBackgroundColorToWhite {
    0% {
      background-color: #000;
    }
    100% {
      background-color: #fff;
    }
  }

  min-height: 100vh;
  width: 100vw;

  background-color: ${({ darkMode }) => (darkMode ? "#000" : "#fff")};
  color: ${({ darkMode }) => (darkMode ? "#fff" : "#000")};
  animation: ${({ darkMode }) =>
    darkMode
      ? "changeBackgroundColorToBlack 0.5s linear;"
      : "changeBackgroundColorToWhite 0.6s linear"};
  header {
    width: 80%;
    margin: 0 auto;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;

    padding-top: 24px;
    padding-bottom: 54px;
  }

  .contactHeader {
    justify-self: end;
  }

  .headerTitle,
  header li {
    font-weight: 700;
    cursor: pointer;
  }

  header li {
    padding: 6px;

    transition: 0.4s;

    &:hover {
      padding-bottom: 5px;
      border-bottom: ${({ darkMode }) =>
        darkMode ? "1px solid #fff" : "1px solid #000"};
      border-radius: 4px;

      box-shadow: inset 0 -1px #000;
    }
  }

  .headerTitle {
    font-size: 12px;
  }

  header ul {
    display: flex;
    flex-flow: row wrap;

    gap: 10px;
  }

  .linkedin {
    width: 30px;
  }

  .darkAndLigthModes {
    width: 90%;
    margin: 0 auto;

    margin-bottom: 48px;

    display: flex;
    justify-content: center;
  }

  .darkAndLigthModes button {
    border-radius: 6px;
    padding: 6px;
    cursor: pointer;
    transition: 0.3s;
    color: ${({ darkMode }) => (darkMode ? "#fff" : "#000")};

    &:hover {
      background: ${({ darkMode }) => (darkMode ? "#fff" : "#000")};
      color: ${({ darkMode }) => (darkMode ? "#000" : "#fff")};
    }
  }

  .darkMode {
    border-bottom: ${({ darkMode }) =>
      darkMode ? "1px solid #fff" : "1px solid #000"};
  }

  @media (max-width: 800px) {
    header nav > ul > li {
      font-size: 12px;
    }
  }
`;
