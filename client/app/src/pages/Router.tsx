import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Login = lazy(() => import("./Login"));
const Expense = lazy(() => import("./Expense"));
export function RouterMain() {
  return (
    <Router>
      <Suspense fallback={<div>Loading..</div>}>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/expense" component={Expense} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default RouterMain;
