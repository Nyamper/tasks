import React from 'react';

import { Link, Outlet } from 'react-router-dom';

import { AppBar, MenuItem, Toolbar, Typography } from '@mui/material';
import YardIcon from '@mui/icons-material/Yard';

const Header = () => {
  const pages = ['Home', 'Books'];
  return (
    <>
      <AppBar position="sticky" sx={{ mb: 5 }}>
        <Toolbar>
          <YardIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h5"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <Link style={{ textDecoration: 'none', color: 'white' }} to={'/'}>
              BLOG
            </Link>
          </Typography>
          {pages.map((page) => (
            <MenuItem key={page} sx={{ mx: 1 }}>
              <Typography textAlign="center" variant="h6">
                <Link
                  style={{ textDecoration: 'none', color: 'white' }}
                  to={`/${page}`}
                >
                  {page}
                </Link>
              </Typography>
            </MenuItem>
          ))}
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
};
export default Header;
