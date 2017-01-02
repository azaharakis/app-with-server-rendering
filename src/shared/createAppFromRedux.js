/*
    This module is responsible for creating the store of data and initializing it within a Provider Component
    http://redux.js.org/docs/basics/UsageWithReact.html#passing-the-store It is a react specific implementation
*/
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../screens/reducers';

export default (App, data) => (
    <Provider store={createStore(reducers, { apiData: data })}>
        <App />
    </Provider>
);