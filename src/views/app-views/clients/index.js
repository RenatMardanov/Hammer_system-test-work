import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from "components/shared-components/Loading";

const Clients = ({ match }) => (
    <Suspense fallback={<Loading cover="content" />}>
        <Switch>
            <Redirect exact from={`${match.url}`} to={`${match.url}/home`} />
            <Route exact path={`${match.url}/list`} component={lazy(() => import(`./list`))} />
            <Route path={`${match.url}/edit/:clientId`} component={lazy(() => import(`./edit`))} />
        </Switch>
    </Suspense>
);

export default Clients;
