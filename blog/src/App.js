import React from 'react';

import { Routes, Route, Link } from 'react-router-dom';

import Header from './components/Header/Header';
import HomePage from './components/Home/HomePage';
import Books from './components/Books/Books';
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
