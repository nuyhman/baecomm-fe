/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const Loading = () => {
  const loadingCss = css({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  });
  return <div css={loadingCss}>🌀 Loading...</div>;
};

export default Loading;
