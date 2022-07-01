import React, { useState, useEffect } from 'react';
import axios from 'axios';

import CardBook from './CardBook';
import Spiner from '../utils/Spiner';

import { Grid } from '@mui/material';
import { Container } from '@mui/system';

import { url } from '../../constants';

const Books = () => {
  const [books, setBooks] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let ignore = false;

    async function fetchData() {
      setIsLoading(true);
      try {
        const { data } = await axios.get(url);
        if (!ignore) {
          setBooks(data);
          setIsLoading(false);
        }
      } catch (error) {
        throw new Error(error);
      }
    }

    fetchData();
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <>
      <Container>
        <Grid container spacing={5}>
          {isLoading ? (
            <Spiner />
          ) : (
            books.map((book) => {
              return (
                <Grid item key={book.id} xs={10} md={6} lg={4}>
                  <CardBook book={book} />
                </Grid>
              );
            })
          )}
        </Grid>
      </Container>
    </>
  );
};

export default Books;
