import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { RouterContext, match } from 'react-router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../screens/reducers';
import routes from '../shared/routes';
import fetchData from '../shared/fetchData';

import page from './page';

export default (request, response) => {
    // Match the URL to a route
    match({location: request.url, routes}, (error, redirect, routingState) => {

        // After we have the active route we execute the fetchData method via the fetchData Module
        fetchData(routingState).then(data => {

            // Render the application to a string
            const applicationString = ReactDOMServer.renderToString(
                // Set the initial state of the store to the data that came back from the API
                <Provider store={createStore(reducers, { apiData: { data } })}>
                    <RouterContext {...routingState} />
                </Provider>
            );

            // Place the application within the page template
            const pageResponse = page(applicationString, data);

            // Return the response to the browser.
            return response.status(200).send(pageResponse);
        });
    });
}