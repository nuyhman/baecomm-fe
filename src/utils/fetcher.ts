import { API_BASE_URL } from '../constants';

type Fetcher<T> = (path: string, params?: string) => Promise<T>;

export const fetcher: Fetcher<any> = async <T>(
  path: string,
  params?: string
) => {
  const url = `${API_BASE_URL}${path}${params ? '?' + params : ''}`;
  const response = await fetch(url);
  return response.json() as T;
};
