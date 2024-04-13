/** @jsxImportSource @emotion/react */
import { PropsWithChildren } from 'react';
import { css } from '@emotion/react';

const Layout = ({ children }: PropsWithChildren) => {
  const layout = css({
    boxSizing: 'border-box',
    backgroundColor: 'white',
    fontSize: '1rem',
    maxWidth: '640px',
    minWidth: '385px',
    minHeight: '100vh',
    margin: '0 auto',
    boxShadow: '0 0 1rem rgba(0, 0, 0, 0.1)',
  });
  return <main css={layout}>{children}</main>;
};

export default Layout;
