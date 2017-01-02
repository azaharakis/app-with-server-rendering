import ReactDOMServer from 'react-dom/server';
import React from 'react';
import App from '../components/App';

import page from './page';

export default (request, response) => {
    App.fetchData().then(data => {
        const applicationString = ReactDOMServer.renderToString(<App data={data}/>);
        const pageResponse = page(applicationString, data);

        return response.status(200).send(pageResponse);
    });
}