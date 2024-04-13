/** @jsxImportSource @emotion/react */

import React from 'react';
import { Link } from 'react-router-dom';
import type { Product } from './type';
import { productCss } from './product.emotion';
import { convertToDollar } from '../../utils/convertToDollar';

interface ProductItemProps {
  product: Product;
  handleProductClick: () => void;
}
const ProductItem = ({ product, handleProductClick }: ProductItemProps) => {
  return (
    <li key={product.id} css={productCss.listItem}>
      <Link to={`/product/${product.id}`} onClick={handleProductClick}>
        <img
          src={product.thumbnail}
          alt={product.title}
          css={productCss.thumbnail}
        />
        <div css={productCss.itemContent}>
          <div css={productCss.itemHeader}>
            <p>{product.brand}</p>
            <p>{product.title}</p>
          </div>
          <p>{convertToDollar(product.price)}</p>
        </div>
      </Link>
    </li>
  );
};

export default ProductItem;
