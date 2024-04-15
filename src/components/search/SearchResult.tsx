/** @jsxImportSource @emotion/react */

import { useLayoutEffect } from 'react';
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
    hasMore: hasMoreList,
  } = useFetchMore<ProductResponse>(API_PATHS.SEARCH, {
    checkHasMore: data => data?.total > data.products.length,
  });

  const handleFetchMore = () => {
    if (!searchResult) return;
    const variables = {
      q: query || '',
      skip: (searchResult.skip + 10).toString(),
      limit: '10',
    };

    fetchMore(variables, (existingData, incomingData) => {
      return {
        ...incomingData,
        products: [...existingData?.products, ...incomingData.products],
      };
    });
  };

  const handleProductClick = () => {
    saveRestoreData({ data: searchResult, scrollY: window.scrollY });
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
        return;
      }
      const params = { q: query || '', skip: '0', limit: '10' };
      await firstFetch(params);
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

      {hasMoreList && (
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
