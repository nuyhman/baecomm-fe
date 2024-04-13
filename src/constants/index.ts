export const API_BASE_URL = 'https://dummyjson.com' as const;

export const ROUTE_PATHS = {
  HOME: '/',
  SEARCH: '/search',
  PRODUCT: '/product/:id',
} as const;

export const API_PATHS = {
  PRODUCTS: (id?: string) => `/products/${id}`,
  SEARCH: '/products/search',
} as const;
