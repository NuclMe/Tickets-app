import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import {
  Routes,
  Route,
  Link,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { Items } from './Items';
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
const item2 = [
  {
    price: 80000,
    carrier: 'PS',
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
    price: 90000,
    carrier: 'LH',
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
export const Flights = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const tabIndex = location.pathname === '/fastest' ? 1 : 0;

  const handleChange = (event, newValue) => {
    if (newValue === 0) {
      navigate('/cheapest');
    } else {
      navigate('/fastest');
    }
  };

  return (
    <Box>
      <Tabs
        value={tabIndex}
        onChange={handleChange}
        sx={{
          backgroundColor: 'white',
          borderRadius: '5px',
        }}
      >
        <Tab
          label="САМЫЙ ДЕШЕВЫЙ"
          value={0}
          component={Link}
          to="/cheapest"
          sx={{
            width: '50%',
            maxWidth: '50%',
            borderTop: '1px solid #000',
            borderLeft: '1px solid #000',
            borderBottom: '1px solid #000',
            backgroundColor: tabIndex === 0 ? '#00bfff' : undefined,
            color: tabIndex === 0 ? 'white !important' : undefined,
            borderColor: tabIndex === 0 ? '#00bfff' : undefined,
            boxShadow: 'none',
            transition: 'none',
            '&:hover': { borderColor: '#00bfff' },
            '&:focus': { outline: 'none' },
          }}
        />
        <Tab
          label="САМЫЙ БЫСТРЫЙ"
          value={1}
          component={Link}
          to="/fastest"
          sx={{
            width: '50%',
            maxWidth: '50%',
            borderTop: '1px solid #000',
            borderRight: '1px solid #000',
            borderBottom: '1px solid #000',
            boxShadow: 'none',
            transition: 'none',
            backgroundColor: tabIndex === 1 ? '#00bfff' : undefined,
            color: tabIndex === 1 ? 'white !important' : undefined,
            '&:focus': { outline: 'none' },
            '&:hover': { borderColor: '#00bfff' },
          }}
        />
      </Tabs>
      <Routes>
        <Route path="/cheapest" element={<Items items={items} />} />
        <Route path="/fastest" element={<Items items={item2} />} />
      </Routes>
    </Box>
  );
};
