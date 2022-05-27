import { ScreenModeProvider } from "./ScreemMode/ScreemMode";

export const Providers = ({ children }) => {
  return <ScreenModeProvider>{children}</ScreenModeProvider>;
};
