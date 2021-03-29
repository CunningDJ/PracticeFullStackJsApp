/*
    Practice-App: NodeJS Backend
*/
import express from 'express';
import routes from './routes';

import config from './serverConfig';

const app = express();

// Allow JSON parsing
app.use(express.json());

app.use(routes);

app.listen(config.port, () => {
    console.log(`Serving on port ${config.port}!`);
});