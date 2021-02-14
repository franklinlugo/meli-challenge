function buildProductCategories(categories) {
  try {
    const values = categories.path_from_root;
    return values.reduce((acc, value) => {
      acc.push(value.name);
      return acc;
    }, []);
  } catch (error) {
    return [];
  }
}

export default buildProductCategories;