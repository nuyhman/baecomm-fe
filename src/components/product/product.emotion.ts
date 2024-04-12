/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const productCss = {
  listItem: css({
    '&:hover': {
      // brand, title
      '& div div': {
        color: 'blue',
      },
    },
  }),
  thumbnail: css({
    width: '100%',
    aspectRatio: '1 / 1',
    objectFit: 'cover',
    borderRadius: '1rem',
    position: 'relative',
  }),
  itemContent: css({
    padding: '1rem 0',
    fontWeight: 'bold',
  }),
  itemHeader: css({
    display: 'flex',
    gap: '1rem',
  }),
  header: css({
    position: 'sticky',
    inset: 0,
    backgroundColor: 'white',
    boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  }),
  goBackButton: css({
    padding: '1rem',
    fontSize: '1.5rem',
  }),
  article: css({
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    padding: '0 2rem 2rem 2rem',
  }),
  brand: css({
    color: '#bbb',
  }),
  title: css({
    fontSize: '1.5rem',
    fontWeight: 'semi-bold',
  }),
  price: css({
    fontSize: '2rem',
    fontWeight: 'bold',
  }),
  features: css({
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  }),
  featureTitle: css({
    fontSize: '1.25rem',
    fontWeight: 'bold',
  }),
};
