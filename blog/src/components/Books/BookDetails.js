import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { useParams } from 'react-router-dom';

import { url } from '../../constants';

import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  CircularProgress,
  Typography,
} from '@mui/material';
import { Container } from '@mui/system';

const BookDetails = () => {
  const params = useParams();
  console.log(params);
  const [book, setBook] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let ignore = false;

    async function fetchData() {
      setIsLoading(true);
      try {
        const { data } = await axios.get(`${url}/${params.id}`);
        if (!ignore) {
          setBook(data);
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
        {isLoading ? (
          <Box
            sx={{
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              position: 'absolute',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <CircularProgress size={100} />
          </Box>
        ) : (
          <Card>
            <CardMedia
              component="img"
              height="200"
              image="https://s.yimg.com/uu/api/res/1.2/k_8a7.DeuEJHGGgFo.KgEg--~B/Zmk9c3RyaW07aD00MzI7cT04MDt3PTc2ODthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-uploaded-images/2022-04/2e9a68b0-be5d-11ec-9efd-3edbf61b28d7.cf.jpg"
              alt="Book"
            />
            <CardHeader
              title={book.title}
              subheader={book.publishDate.slice(0, 10)}
            />
            <CardContent>
              <Typography variant="h6">{`Pages: ${book.pageCount}`}</Typography>
            </CardContent>
            <CardContent>
              <Typography variant="body1">{book.description}</Typography>
            </CardContent>
            <CardContent>
              <Typography variant="subtitle2">{book.excerpt}</Typography>
            </CardContent>
          </Card>
        )}
      </Container>
    </>
  );
};
export default BookDetails;
