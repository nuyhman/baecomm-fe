import React from 'react';
import ErrorBoundary from './components/error/ErrorBoundary';
import Layout from './components/layout';
import GlobalStyle from './components/common/GlobalStyle';
import Router from './components/common/Router';

function App() {
  return (
    <ErrorBoundary>
      <Layout>
        <GlobalStyle />
        <Router />
      </Layout>
    </ErrorBoundary>
  );
}

export default App;
