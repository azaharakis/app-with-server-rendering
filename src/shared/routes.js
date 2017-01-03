import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { App, Home, Results } from '../screens';

export default (
    <Route component={App} path="/">
        <IndexRoute component={Home}/>
        <Route path="results" component={Results} fetchData={Results.fetchData} />
    </Route>
)
