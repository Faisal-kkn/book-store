import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Paths } from './path';
import Layout from '../Components/Layout';
import Home from '../Pages/HomePage';
import ErrorPage from '../Pages/ErrorPage';

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route
        path={Paths.home}
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path={Paths.error}
        element={
          <Layout>
            <ErrorPage />
          </Layout>
        }
      />
    </Routes>
  );
};
