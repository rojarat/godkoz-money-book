import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Index = lazy(() => import("./index"));

export function RouterMain() {
  return (
    <Router>
      <Suspense fallback={<div>Loading..</div>}>
        <Switch>
          <Route exact path="/" component={Index} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default RouterMain;
