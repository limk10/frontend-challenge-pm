import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import TransactionList from "~/screens/Transactions/List";
import TransactionCreate from "~/screens/Transactions/Create";
import NotFound from "~/screens/NotFound";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/transaction" />
      </Route>
      <Route exact path="/transaction" component={TransactionList} />
      <Route path="/transaction/create" component={TransactionCreate} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
};

export default Routes;
