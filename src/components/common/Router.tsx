import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ROUTE_PATHS } from '../../constants';
import HomePage from '../../pages/home/HomePage';
import ProductPage from '../../pages/product/ProductPage';
import SearchPage from '../../pages/search/SearchPage';
import NotFoundPage from '../../pages/error/NotFoundPage';

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTE_PATHS.HOME} element={<HomePage />} />
          <Route path={ROUTE_PATHS.PRODUCT} element={<ProductPage />} />
          <Route path={ROUTE_PATHS.SEARCH} element={<SearchPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
