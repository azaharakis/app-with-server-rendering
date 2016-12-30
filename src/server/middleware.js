import ReactDOMServer from 'react-dom/server';
import React from 'react';
import App from '../components/App';

import page from './page';

export default (request, response) => {
    const applicationString = ReactDOMServer.renderToString(<App />);
    const pageResponse = page(applicationString);

    return response.status(200).send(pageResponse);
}