import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { TRANSFER_OPTIONS } from '../const';

export const Transfer = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        border: '1px solid lightgray',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.8)',
        backgroundColor: 'white',
        flex: '1',
        padding: '20px 0',
      }}
    >
      <Typography
        variant="h6"
        sx={{
          marginLeft: '20px',
          marginBottom: '10px',
          fontSize: '16px',
          '@media (max-width: 768px)': {
            fontSize: '14px',
          },
        }}
      >
        КОЛИЧЕСТВО ПЕРЕСАДОК
      </Typography>
      <FormGroup
        sx={{
          width: '100%',
          overflow: 'hidden',
          '@media (max-width: 768px)': {
            fontSize: '10px',
          },
        }}
      >
        {TRANSFER_OPTIONS.map((option) => (
          <FormControlLabel
            key={option.value}
            control={
              <Checkbox
                sx={{
                  '& .MuiSvgIcon-root': { fontSize: 28 },
                  p: 0,
                  marginRight: '10px',
                }}
              />
            }
            label={option.label}
            sx={{
              width: '100%',
              paddingLeft: '20px',
              paddingBottom: '10px',
              paddingTop: '10px',
              marginRight: '0px',
              marginLeft: '0px',
              '&:hover': {
                backgroundColor: 'rgba(173, 216, 230, 0.4)',
              },
              '@media (max-width: 768px)': {
                '& .MuiTypography-root': {
                  fontSize: '14px',
                },
              },
            }}
          />
        ))}
      </FormGroup>
    </Box>
  );
};
