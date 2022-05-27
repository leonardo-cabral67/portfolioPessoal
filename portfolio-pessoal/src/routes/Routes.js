import { Route, Switch } from "react-router-dom";
import { MainPage } from "../pages/MainPage/MainPage";
import { Projetos } from "../pages/Projetos/Projetos";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <MainPage />
      </Route>
      <Route path="/projetos">
        <Projetos />
      </Route>
    </Switch>
  );
};
