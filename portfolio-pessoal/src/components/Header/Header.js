import { useScreenMode } from "../../Providers/ScreemMode/ScreemMode";

import iconGithub from "../../assets/icon-github.svg";
import iconGithubPreto from "../../assets/icon-github-preto.svg";
import iconLinkedin from "../../assets/icon-linkedin.svg";

import { HeaderContainer } from "./HeaderStyles";
import { useHistory } from "react-router-dom";

export const Header = ({ children, ProjectsPage }) => {
  const { darkIsOn, setDarkIsOn } = useScreenMode();
  const history = useHistory();
  return (
    <HeaderContainer darkMode={darkIsOn}>
      <header>
        <nav>
          <ul>
            {!ProjectsPage ? (
              <li onClick={() => history.push("/projetos")}>PROJETOS</li>
            ) : (
              <li onClick={() => history.push("/")}>HOME</li>
            )}
          </ul>
        </nav>

        <h2 className="headerTitle" onClick={() => history.push("/")}>
          Leonardo Cabral
        </h2>

        <ul className="contactHeader">
          <li>
            <a target="_blank" href="https://github.com/leonardo-cabral67">
              {!darkIsOn ? (
                <img src={iconGithub} alt="Ícone do github" />
              ) : (
                <img src={iconGithubPreto} alt="Ícone do github" />
              )}
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/leonardo-cabral67/">
              <img
                className="linkedin"
                src={iconLinkedin}
                alt="Ícone linkedin"
              />
            </a>
          </li>
        </ul>
      </header>

      <div className="darkAndLigthModes">
        <button className="darkMode" onClick={() => setDarkIsOn(!darkIsOn)}>
          {darkIsOn ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
      {children}
    </HeaderContainer>
  );
};
