import express from 'express';
import router from './routes/items.js';

const app = express();

app.use(router);

app.listen(3000);
