import { useEffect, useState } from 'react';
import { fetcher } from '../utils/fetcher';

/**
 * 데이터를 가져오는 커스텀 훅
 * @param path
 * @returns
 */
const useFetch = <T>(path: string) => {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetcher(path);
        setData(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [path]);

  return { data, loading, error };
};

export default useFetch;
