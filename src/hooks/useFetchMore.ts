import { useState } from 'react';
import { type Params, getSearchParams } from '../utils/getSearchParams';
import { fetcher } from '../utils/fetcher';

type FetchMore<T> = (
  variables: Params,
  updateQuery: (data: T, incomingData: T) => T
) => Promise<void>;

/**
 * 페이지네이션을 위한 커스텀 훅
 * @param path
 * @returns
 */
const useFetchMore = <T>(path: string) => {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const firstFetch = async (params: Params, restoredData?: T) => {
    try {
      if (restoredData) {
        setData(restoredData);
        return restoredData;
      }
      const searchParams = getSearchParams(params);
      const data = await fetcher(path, searchParams);
      setData(data);
      return data;
    } catch (error) {
      if (error instanceof Error) {
        setError(error);
      }
    } finally {
      setLoading(false);
    }
  };

  const fetchMore: FetchMore<T> = async (variables, updateQuery) => {
    try {
      const searchParams = getSearchParams(variables);
      const incomingData = await fetcher(path, searchParams);
      setData(existingData => updateQuery(existingData as T, incomingData));
    } catch (error) {
      if (error instanceof Error) {
        console.error('Error fetching more data:', error);
        setError(error);
      }
    }
  };

  return {
    data,
    loading,
    error,
    firstFetch,
    fetchMore,
  };
};

export default useFetchMore;
