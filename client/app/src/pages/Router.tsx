import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  RouteProps,
} from "react-router-dom";
import useUser from "src/hooks/useUser";

const Expense = lazy(() => import("./Expense"));
const Home = lazy(() => import("./Home"));
const Login = lazy(() => import("./Login"));

function PrivateRoute(route: RouteProps) {
  const { error, loading } = useUser();

  if (!loading && error?.status > 400) {
    return <Redirect to="/login" />;
  }
  return <Route {...route} />;
}

export function RouterMain() {
  return (
    <Router>
      <Suspense fallback={<div>Loading..</div>}>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/expense" component={Expense} />
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute exact path="/expense" component={Expense} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default RouterMain;
