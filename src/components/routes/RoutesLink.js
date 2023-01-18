import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Books, Categories, ErrorPage } from '../imports/Imports';

const RoutesLink = () => (
  <>
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </>
);

export default RoutesLink;
