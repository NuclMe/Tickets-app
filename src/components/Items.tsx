import React from 'react';
import Box from '@mui/material/Box';
import { Item } from './Item';

export const Items = ({ items = [] }) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      marginTop: '20px',
    }}
  >
    {items.map((i) => (
      <Item key={i.price} {...i} />
    ))}
  </Box>
);
