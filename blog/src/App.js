import React from 'react';

import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/';
import HomePage from './components/Home/';
import Books from './components/Books';
import BookDetails from './components/Books/BookDetails';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<HomePage />} />
          <Route path="books" element={<Books />} />
          <Route path="books/:id" element={<BookDetails />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
