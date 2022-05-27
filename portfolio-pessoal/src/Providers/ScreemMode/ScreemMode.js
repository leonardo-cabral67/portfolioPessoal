import { createContext, useContext, useState } from "react";

export const ScreenModeContext = createContext();

export const ScreenModeProvider = ({ children }) => {
  const [darkIsOn, setDarkIsOn] = useState(false);

  return (
    <ScreenModeContext.Provider value={{ darkIsOn, setDarkIsOn }}>
      {children}
    </ScreenModeContext.Provider>
  );
};

export const useScreenMode = () => useContext(ScreenModeContext);
