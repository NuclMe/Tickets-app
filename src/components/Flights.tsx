import React from 'react';
import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export const Flights = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
  return (
    <Box>
      <Tabs
        value={selectedTab}
        onChange={handleChange}
        sx={{
          backgroundColor: 'white',
          borderRadius: '5px',
        }}
      >
        <Tab
          label="САМЫЙ ДЕШЕВЫЙ"
          value={0}
          sx={{
            width: '50%',
            maxWidth: '50%',
            borderTop: '1px solid #000',
            borderLeft: '1px solid #000',
            borderBottom: '1px solid #000',
            backgroundColor: selectedTab === 0 ? '#00bfff' : undefined,
            color: selectedTab === 0 ? 'white !important' : undefined,
            borderColor: selectedTab === 0 ? '#00bfff' : undefined,
            boxShadow: 'none',
            transition: 'none',
            '&:hover': { borderColor: '#00bfff' },
            '&:focus': { outline: 'none' },
            '@media (max-width: 768px)': {
              fontSize: '12px',
            },
          }}
        />
        <Tab
          label="САМЫЙ БЫСТРЫЙ"
          value={1}
          sx={{
            width: '50%',
            maxWidth: '50%',
            borderTop: '1px solid #000',
            borderRight: '1px solid #000',
            borderBottom: '1px solid #000',
            boxShadow: 'none',
            transition: 'none',
            backgroundColor: selectedTab === 1 ? '#00bfff' : undefined,
            color: selectedTab === 1 ? 'white !important' : undefined,
            '&:focus': { outline: 'none' },
            '&:hover': { borderColor: '#00bfff' },
            '@media (max-width: 768px)': {
              fontSize: '12px',
            },
          }}
        />
      </Tabs>
    </Box>
  );
};
