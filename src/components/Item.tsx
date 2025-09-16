import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { TableWrapper } from './TableWrapper';

export const Item = (props) => {
  const { price, carrier, segments } = props;
  function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }
  return (
    <Box
      key={price}
      sx={{
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '5px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.8)',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography
          sx={{ fontWeight: 'bold', color: '#1976d2', fontSize: '24px' }}
        >
          {numberWithSpaces(price)} Р
        </Typography>
        <img
          src={`https://pics.avs.io/99/36/${carrier}.png`}
          alt="flightCompanyLogo"
        />
      </Box>
      {segments.map((segment) => (
        <TableWrapper key={segment.duration} segments={segment} />
      ))}
    </Box>
  );
};
