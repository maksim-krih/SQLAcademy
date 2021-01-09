import React from "react";
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Login from "./pages/login";
import { Layout } from "./components";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/passing" exact component={Layout} />
        <Route path="/summary" exact component={Layout} />
        <Route path="/quizzes" exact component={Layout} />
        <Route path="/quizzes/create" exact component={Layout} />
        <Route path="/results" exact component={Layout} />
        <Route path="/students" exact component={Layout} />
        <Route path="/login" exact component={Login} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
