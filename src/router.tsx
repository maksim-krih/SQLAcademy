import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
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
import Account from "./pages/account";

const PrivateRoute = onlyAuth("/login")(Route);

const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Switch>
          <PrivateRoute path="/passing/:quizId" exact component={withLayout(Passing)} />
          <PrivateRoute path="/result/:quizId/:userId" exact component={withLayout(Result)} />
          <PrivateRoute path="/quizzes" exact component={withLayout(Quizzes)} />
          <PrivateRoute path="/quizzes/create" exact component={withLayout(QuizzesCreate)} />
          <PrivateRoute path="/results/:userId" exact component={withLayout(Results)} />
          <PrivateRoute path="/results" exact component={withLayout(Results)} />
          <PrivateRoute path="/students" exact component={withLayout(Students)} />
          <PrivateRoute path="/account" exact component={withLayout(Account)} />
          <Route path="/login" exact component={Login} />
          <Route exact path="/">
            <Redirect to="/quizzes" />
          </Route>
        </Switch>
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default Router;
