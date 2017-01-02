import ReactDOMServer from 'react-dom/server';
import createAppFromRedux from '../shared/createAppFromRedux';
import App from '../screens/app';

import page from './page';

export default (request, response) => {
    App.fetchData().then(data => {
        const applicationString = ReactDOMServer.renderToString(createAppFromRedux(App, data));
        const pageResponse = page(applicationString, data);

        return response.status(200).send(pageResponse);
    });
}