import '../shared/polyfills';
import {browserHistory, Router, match} from 'react-router';
import React from 'react';
import reactDOM from 'react-dom';
import routes from '../shared/routes';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from '../screens/reducers';
import fetchData from '../shared/fetchData';
import {DATA_LOADED, DATA_FETCHING} from '../screens/app/actions';

export default (() => {
    // Create a store from hydrated data that was populated by the server.
    const store = createStore(reducers, {apiData: {data: window.__hydrationData__}});
    // Create an instance of our application
    const application = (
        <Provider store={store}>
            <Router history={browserHistory} routes={routes}/>
        </Provider>
    );

    // Render the application into the DOM
    reactDOM.render(application, document.getElementById("wrapper"));

    // Listen to URL changes in the browser
    browserHistory.listen(location => {
        // Match the URL we listened to, to one of our routes
        match({location, routes}, (error, redirectLocation, routingState) => {
            // Dispatch an action to our store that we are fetching data, we block re-rendering within the app screen
            // Until the next set of data comes back because as soon as this callback finishes react router will render the
            // Next matched route, we stop this behaviour until the asynchronous route has finished fetching data.
            store.dispatch({type: DATA_FETCHING});

            // After we have the active route we execute the fetchData method via the fetchData Module
            fetchData(routingState).then(data => {

                // Dispatch the data to our store so the screens can now render.
                store.dispatch({type: DATA_LOADED, data});
            });
        });
    });
})();
