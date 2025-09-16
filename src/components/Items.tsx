import React from 'react';
import Box from '@mui/material/Box';
import { Item } from './Item';

export const Items = () => {
  const items = [
    {
      price: 14000,
      carrier: 'S7',
      segments: [
        {
          origin: 'SFO',
          destination: 'LAX',
          date: '2023-10-01T10:00:00Z',
          stops: ['ORD', 'DFW'],
          duration: 120,
        },
        {
          origin: 'LAX',
          destination: 'SFO',
          date: '2023-10-08T10:00:00Z',
          stops: ['ORD', 'DFW'],
          duration: 80,
        },
      ],
    },
    {
      price: 18000,
      carrier: 'S7',
      segments: [
        {
          origin: 'SFO',
          destination: 'LAX',
          date: '2023-10-01T10:00:00Z',
          stops: ['ORD', 'DFW'],
          duration: 150,
        },
        {
          origin: 'LAX',
          destination: 'SFO',
          date: '2023-10-08T10:00:00Z',
          stops: ['ORD', 'DFW'],
          duration: 90,
        },
      ],
    },
  ];
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        marginTop: '20px',
      }}
    >
      {items.map((i) => {
        return <Item key={i.price} {...i} />;
      })}
    </Box>
  );
};
