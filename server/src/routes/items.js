import express from 'express';
import fetch from 'node-fetch';
import { buildItemsList, buildCategories, buildItem } from '../utils/index.js';

const router = express.Router();

router.get('/items', async (req, res) => {
  const searchTerm = req.query.search;
  try {
    const rawResponse = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${searchTerm}`);
    const response = await rawResponse.json();

    const author = { name: 'Franklin', lastName: 'Lugo' };
    const items = buildItemsList(response);
    const categories = buildCategories(response);

    res.status(200).json({ author, categories, items });
  } catch (error) {
    res.status(400).send();
  }
});

router.get('/items/:id', async (req, res) => {
  const id = req.params.id;
  const  urls = [ `https://api.mercadolibre.com/items/${id}`, `https://api.mercadolibre.com/items/${id}/description` ];
  const requests = urls.map(url => fetch(url));

  try {
    const [itemRawResponse, descriptionRawResponse] = await Promise.all(requests);
    const [item, description] = await Promise.all([itemRawResponse.json(), descriptionRawResponse.json()]);

    const author = { name: 'Franklin', lastName: 'Lugo' };
    const itemObj = buildItem(item, description);

    res.status(200).json({author, item: itemObj});
  } catch (error) {
    res.status(400).send();
  }
})

export default router;
