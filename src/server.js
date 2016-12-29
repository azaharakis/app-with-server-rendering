/* eslint-disable no-console */

import express from 'express';

const app = express();

app.set('host', process.env.HOST || "0.0.0.0");
app.set('port', process.env.PORT || 3001);

app.get('/', (request, response) => {
    response.status(200).send('hello world');
});

app.listen(app.get('port'), app.get('host'), () => {
    console.log(`server listening on http://${app.get('host')}:${app.get('port')}`);
});
