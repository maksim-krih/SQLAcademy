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
import Results from "./pages/results";
import Students from "./pages/students";
import QuizzesCreate from "./pages/quizzes/create";
import { ScrollToTop } from "./components";
import { onlyAuth, withLayout } from "./hocs";

const PrivateRoute = onlyAuth("/login")(Route);

const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Switch>
          <PrivateRoute path="/passing" exact component={withLayout(Passing)} />
          <PrivateRoute path="/result" exact component={withLayout(Result)} />
          <PrivateRoute path="/" exact component={withLayout(Quizzes)} />
          <PrivateRoute path="/quizzes/create" exact component={withLayout(QuizzesCreate)} />
          <PrivateRoute path="/results" exact component={withLayout(Results)} />
          <PrivateRoute path="/students" exact component={withLayout(Students)} />
          <Route path="/login" exact component={Login} />
        </Switch>
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default Router;
