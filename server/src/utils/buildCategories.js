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

export default buildCategories;