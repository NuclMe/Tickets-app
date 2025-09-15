import React from 'react';
import airplane from '../assets/airplane.svg';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

export const Header = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Link
        href="#"
        sx={{
          backgroundColor: '#2196f3',
          borderRadius: '50%',
          padding: '15px',
          display: 'flex',
          alignItems: 'center',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.8)',
        }}
      >
        <img src={airplane} alt="Airplane" style={{ width: 32, height: 32 }} />
      </Link>
    </Box>
  );
};
