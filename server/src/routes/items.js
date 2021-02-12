import express from 'express';
import fetch from 'node-fetch';

const router = express.Router();

function buildItems(response) {
  const { results } = response;
  return results.map((item) => ({
    id: item.id,
    title: item.title,
    price: {
      currency: item.currency_id,
      amount: item.price,
      decimals: 0,
    },
    picture: item.thumbnail,
    condition: item.condition,
    free_shipping: item.shipping.free_shipping,
  }));
}

function buildCategories(response) {
  try {
    const categories = response.filters.find(({ id }) => id === 'category');
    const values = categories.values[0].path_from_root;
    return values.reduce((acc, value) => {
      acc.push(value.name);
      return acc;
    }, []);
  } catch (error) {
    return [];
  }
}

router.get('/items', async (req, res) => {
  const searchTerm = req.query.search;
  try {
    const rawResponse = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${searchTerm}`);
    const response = await rawResponse.json();

    const author = { name: 'Franklin', lastName: 'Lugo' };
    const items = buildItems(response);
    const categories = buildCategories(response);

    res.status(200).json({ author, categories, items });
  } catch (error) {
    res.status(400).send();
  }
});

export default router;
