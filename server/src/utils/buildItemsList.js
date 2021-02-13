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

export default buildItemsList;