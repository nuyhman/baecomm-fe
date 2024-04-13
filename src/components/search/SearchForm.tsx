/** @jsxImportSource @emotion/react */

import React, { type ElementRef, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { searchCss } from './search.emotion';

const SearchForm = () => {
  const navigate = useNavigate();
  const { search } = useLocation();

  const searchRef = useRef<ElementRef<'input'>>(null);
  const params = new URLSearchParams(search);
  const query = params.get('q') || '';

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/search?q=${searchRef.current?.value}`);
  };

  return (
    <section css={searchCss.section}>
      <form onSubmit={handleSearch} css={searchCss.form}>
        <input
          ref={searchRef}
          type='text'
          placeholder='검색어 입력'
          defaultValue={query}
          css={searchCss.input}
        />
        <button type='submit' css={searchCss.button}>
          검색
        </button>
      </form>
    </section>
  );
};

export default SearchForm;
