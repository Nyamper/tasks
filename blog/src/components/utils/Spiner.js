import { CircularProgress } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Spiner = () => {
  return (
    <>
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
    </>
  );
};

export default Spiner;
