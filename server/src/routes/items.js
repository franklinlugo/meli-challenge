import express from 'express';
import fetch from 'node-fetch';

const router = express.Router();

function buildItemsList(response) {
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

function buildItem(item, description) {
  return {
    id: item.id,
    title: item.title,
    price: {
      currency: item.currency_id,
      amount: item.price,
      decimals: 0,
    },
    picture: item.pictures[0].url,
    condition: item.condition,
    free_shipping: item.shipping.free_shipping,
    sold_quantity: item.sold_quantity,
    description: description.plain_text
  };
}

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
