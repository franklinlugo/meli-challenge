interface RoutesConfig {
  HOME: string;
  RESULTS: string;
  PRODUCT_DETAIL: string;
}

export const ROUTES: RoutesConfig = {
  HOME: '/',
  RESULTS: '/items',
  // RESULTS: '/items?search=',
  PRODUCT_DETAIL: '/items/:id',
};
