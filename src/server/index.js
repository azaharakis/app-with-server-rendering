/* eslint-disable no-console */

import express from 'express';
import path from 'path';
import middleware from './middleware';
import mockAPI from './mockAPI';

const app = express();

app.set('host', process.env.HOST || "0.0.0.0");
app.set('port', process.env.PORT || 3001);

app.use('/public', express.static(path.join(__dirname, '../../public')));
app.get('/api', mockAPI);
app.use('/', middleware);

app.listen(app.get('port'), app.get('host'), () => {
    console.log(`server listening on http://${app.get('host')}:${app.get('port')}`);
});
