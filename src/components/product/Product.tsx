/** @jsxImportSource @emotion/react */

import { useNavigate, useParams } from 'react-router-dom';
import { productCss } from './product.emotion';
import useScrollRestoration from '../../hooks/useScrollRestoration';
import useFetch from '../../hooks/useFetch';
import type { ProductDetail } from './type';
import { API_PATHS } from '../../constants';
import Loading from '../common/Loading';
import { convertToDollar } from '../../utils/convertToDollar';

const Product = () => {
  useScrollRestoration('scroll-restoration-product', true);
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: product, loading } = useFetch<ProductDetail>(
    API_PATHS.PRODUCTS(id)
  );

  const handleGoBack = () => {
    const canGoBack = window.history.state.idx !== 0;
    if (canGoBack) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  if (loading) return <Loading />;

  return product ? (
    <>
      <header css={productCss.header}>
        <button
          type='button'
          onClick={handleGoBack}
          css={productCss.goBackButton}
        >
          <span aria-label='go-back'>&larr;</span>
        </button>
      </header>
      <article css={productCss.article}>
        <img src={product.thumbnail} alt='Thumbnail' />
        <p css={productCss.brand}>{product.brand}</p>
        <p css={productCss.title}>{product.title}</p>
        <p css={productCss.price}>{convertToDollar(product.price)}</p>
        <div css={productCss.features}>
          <p css={productCss.featureTitle}>Product features</p>
          <p>{product.description}</p>
        </div>
        {product.images.map(image => (
          <img key={image} src={image} alt={`product ${image}`} />
        ))}
      </article>
    </>
  ) : null;
};

export default Product;
