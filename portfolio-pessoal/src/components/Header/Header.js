import { useScreenMode } from "../../Providers/ScreemMode/ScreemMode";

import iconGithub from "../../assets/icon-github.svg";
import iconGithubPreto from "../../assets/icon-github-preto.svg";
import iconLinkedin from "../../assets/icon-linkedin.svg";

import { HeaderContainer } from "./HeaderStyles";

export const Header = ({ children }) => {
  const { darkIsOn, setDarkIsOn } = useScreenMode();
  return (
    <HeaderContainer darkMode={darkIsOn}>
      <header>
        <nav>
          <ul>
            <li>Meus projetos</li>
          </ul>
        </nav>

        <h2 className="headerTitle">Leonardo Cabral</h2>

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
