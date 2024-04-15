import { useState } from 'react';
import { type Params, getSearchParams } from '../utils/getSearchParams';
import { fetcher } from '../utils/fetcher';

type FetchMoreOptions<T> = {
  checkHasMore?: (data: T) => boolean;
};

type FetchMore<T> = (
  variables: Params,
  updateQuery: (data: T, incomingData: T) => T
) => Promise<void>;

/**
 * 페이지네이션을 위한 커스텀 훅
 * @param path
 * @param options - optional
 * @returns
 */
const useFetchMore = <T>(path: string, options?: FetchMoreOptions<T>) => {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [hasMore, setHasMore] = useState(false);

  const checkHasMore = (data: T) => {
    if (options?.checkHasMore == null) return;
    setHasMore(options.checkHasMore(data));
  };

  const firstFetch = async (params: Params, restoredData?: T) => {
    try {
      if (restoredData) {
        setData(restoredData);
        checkHasMore(restoredData);
        return;
      }
      const searchParams = getSearchParams(params);
      const data = await fetcher(path, searchParams);
      setData(data);
      checkHasMore(data);
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
      setData(existingData => {
        const updateData = updateQuery(existingData as T, incomingData);
        checkHasMore(updateData);
        return updateData;
      });
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
    hasMore,
  };
};

export default useFetchMore;
