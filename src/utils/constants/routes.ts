interface RoutesConfig {
  HOME: string;
  SEARCH_RESULTS: string;
  PRODUCT_DETAIL: string;
}

export const ROUTES: RoutesConfig = {
  HOME: '/',
  SEARCH_RESULTS: '/items',
  PRODUCT_DETAIL: '/items/:id',
};
