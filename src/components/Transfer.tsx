import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { TRANSFER_OPTIONS } from '../const';

export const Transfer = () => {
  const styles = {
    formControlLabel: {
      p: '0px',
      marginRight: '0px',
      marginLeft: '0px',
      marginBottom: '10px',
      '&:hover': {
        backgroundColor: 'rgba(173, 216, 230, 0.4)',
      },
    },
  };
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        p: '20px',
        border: '1px solid lightgray',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.8)',
      }}
    >
      <Typography variant="h6" sx={{ mb: '10px' }}>
        КОЛИЧЕСТВО ПЕРЕСАДОК
      </Typography>
      <FormGroup>
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
            sx={styles.formControlLabel}
          />
        ))}
      </FormGroup>
    </Box>
  );
};
