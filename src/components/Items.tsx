import Box from '@mui/material/Box';
import type { FC } from 'react';

import type { ITicket } from '../types';

import { Item } from './Item';

export const Items: FC<{ items: ITicket[] }> = ({ items = [] }) => (
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
