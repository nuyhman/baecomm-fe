import { css } from '@emotion/react';

export const styles = {
  container: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f5f5f5;
    color: #333;
  `,
  button: css`
    display: flex;
    align-items: center;
    padding: 1rem;
    margin-bottom: 2rem;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
      background-color: #0056b3;
    }
    span {
      &:first-of-type {
        margin-right: 0.5rem;
      }
    }
  `,
};
