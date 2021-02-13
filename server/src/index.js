import express from 'express';
import cors from 'cors';
import router from './routes/items.js';

const app = express();

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(router);


app.listen(4000, () => { console.log('app running on port 4000')});
