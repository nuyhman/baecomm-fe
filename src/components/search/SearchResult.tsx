/** @jsxImportSource @emotion/react */

import { useLayoutEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { searchResultCss } from './search.emotion';
import useScrollRestoration from '../../hooks/useScrollRestoration';
import useFetchMore from '../../hooks/useFetchMore';
import type { ProductResponse } from '../product/type';
import { API_PATHS } from '../../constants';
import Loading from '../common/Loading';
import { ProductItem } from '../product';

const SearchResult = () => {
  const location = useLocation();
  const [hasNextPage, setHasNextPage] = useState(false);
  const { saveRestoreData, getRestoreData, restore } = useScrollRestoration(
    'scroll-restoration-product'
  );

  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('q');

  const {
    data: searchResult,
    firstFetch,
    fetchMore,
    loading,
    error,
  } = useFetchMore<ProductResponse>(API_PATHS.SEARCH);

  if (error) {
    throw error;
  }
  const handleFetchMore = () => {
    if (!searchResult) return;
    const variables = {
      q: query || '',
      skip: (searchResult.skip + 10).toString(),
      limit: '10',
    };

    fetchMore(variables, (exisingData, incomingData) => {
      const _hasNextPage =
        exisingData?.total >
        exisingData?.products?.length + incomingData?.products?.length;
      setHasNextPage(_hasNextPage);
      return {
        ...incomingData,
        products: [...exisingData?.products, ...incomingData.products],
      };
    });
  };

  const handleProductClick = () => {
    saveRestoreData({ data: searchResult, scrollY: window.scrollY });
  };

  const checkHasNextPage = (data: ProductResponse) => {
    setHasNextPage(data?.total > data?.products.length);
  };

  /**
   * 복구할 데이터가 있으면 스크롤과 데이터를 복구하고,
   * 그렇지 않으면 새 데이터를 fetch 한다.
   */
  useLayoutEffect(() => {
    const fetchData = async () => {
      const restoredData = getRestoreData();
      if (restoredData) {
        const { data, scrollY } = JSON.parse(restoredData);
        const params = {
          q: query || '',
          skip: data.skip,
          limit: '10',
        };
        restore(() => firstFetch(params, data), scrollY);
        checkHasNextPage(data);
        return;
      }
      const params = { q: query || '', skip: '0', limit: '10' };
      const data = await firstFetch(params);
      checkHasNextPage(data);
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  if (loading) return <Loading />;

  return (
    <section css={searchResultCss.section}>
      {query && <h1 css={searchResultCss.title}>Search For {query}</h1>}

      {searchResult && searchResult?.products?.length > 0 ? (
        <ul css={searchResultCss.resultWrapper}>
          {searchResult?.products.map(product => (
            <ProductItem
              key={product.id}
              product={product}
              handleProductClick={handleProductClick}
            />
          ))}
        </ul>
      ) : (
        <p css={searchResultCss.noResult}>💬 검색 결과가 없습니다.</p>
      )}

      {hasNextPage && (
        <button
          type='button'
          onClick={handleFetchMore}
          css={searchResultCss.moreButton}
        >
          더보기
        </button>
      )}
    </section>
  );
};

export default SearchResult;
