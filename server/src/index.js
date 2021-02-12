import express from 'express';
import itemRoutes from './routes/items.js';

const app = express();

app.use(itemRoutes);
app.listen(3000);
