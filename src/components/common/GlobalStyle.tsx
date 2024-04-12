import React from 'react';
import { Global, css } from '@emotion/react';

const globalStyles = css`
  html,
  body,
  div,
  p,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  input,
  select,
  textarea,
  button,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-text-size-adjust: none;
    -moz-text-size-adjust: none;
    -ms-text-size-adjust: none;
  }
  html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }
  fieldset,
  img {
    border: 0;
  }
  dl,
  ul,
  ol,
  menu,
  li {
    list-style: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
    border: 0;
  }
  a {
    color: inherit;
    text-decoration: none;
    display: block;
    outline: none;
  }
  a:active,
  a:hover,
  a:link,
  a:visited {
    text-decoration: none;
  }
  address,
  caption,
  cite,
  code,
  dfn,
  em,
  var,
  i {
    font-style: normal;
    font-weight: normal;
  }
  img {
    vertical-align: middle;
    border: 0 none;
  }
  caption {
    padding: 0;
    margin: 0;
    font-size: 0;
    width: 0;
    height: 0;
    line-height: 0;
    text-indent: -99999px;
  }

  input,
  select,
  textarea,
  button {
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    font-weight: 400;
    font-family: inherit;
    color: #181818;
    background: transparent;
    border: 0;
    border-radius: 0;
    vertical-align: middle;
    outline: none;
  }

  button {
    border: 0;
    background: transparent;
    cursor: pointer;
    outline: none;
  }
  textarea {
    resize: none;
  }
  select {
    cursor: pointer;
    font-family: inherit;
    -moz-appearance: none; /* Firefox */
    -webkit-appearance: none; /* Safari and Chrome */
    appearance: none;
  }
  select::-ms-expand {
    display: none;
  }

  input[type='radio'] {
    display: none;
    vertical-align: middle;
    border: none;
  }
`;
const GlobalStyle = () => {
  return <Global styles={globalStyles} />;
};

export default GlobalStyle;
