import { css } from '@emotion/react';

/** @jsxImportSource @emotion/react */
export const searchCss = {
  section: css({
    padding: '1rem',
  }),
  form: css({
    display: 'flex',
    padding: '1rem',
    backgroundColor: '#f8f8f8',
    borderRadius: '8rem',
  }),
  input: css({
    flexGrow: 1,
    padding: '0.5rem',
    border: 'none',
    marginLeft: '0.5rem',
    backgroundColor: 'transparent',
  }),
  button: css({
    padding: '0.5rem 1rem',
    border: 'none',
    backgroundColor: '#007bff',
    color: 'white',
    borderRadius: '4px',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#0056b3',
    },
  }),
};
export const searchResultCss = {
  section: css({
    padding: '1rem',
  }),
  title: css({
    margin: '1rem',
  }),
  resultWrapper: css({
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    placeContent: 'stretch',
    margin: '0 1rem',
    gap: '1rem',
  }),
  noResult: css({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  }),
  moreButton: css({
    width: '100%',
    gap: '1rem',
    padding: '1rem',
    margin: '1rem auto',
    backgroundColor: '#eee',
    borderRadius: '8rem',
  }),
};
