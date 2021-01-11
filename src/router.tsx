import React from "react";
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Login from "./pages/login";
import Passing from "./pages/passing";
import Result from "./pages/result";
import Quizzes from "./pages/quizzes";
import { Layout } from "./components";
import { withLayout } from "./hocs";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/passing" exact component={withLayout(Passing)} />
        <Route path="/result" exact component={withLayout(Result)} />
        <Route path="/quizzes" exact component={withLayout(Quizzes)} />
        <Route path="/quizzes/create" exact component={Layout} />
        <Route path="/results" exact component={Layout} />
        <Route path="/students" exact component={Layout} />
        <Route path="/login" exact component={Login} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
