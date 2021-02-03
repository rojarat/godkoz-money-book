import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Login = lazy(() => import('./Login'));

export function RouterMain() {
  return (
    <Router>
      <Suspense fallback={<div>Loading..</div>}>
        <Switch>
          <Route exact path="/" component={Login} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default RouterMain;
