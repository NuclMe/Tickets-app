import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Link, useLocation, useNavigate } from 'react-router-dom';

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
            '@media (max-width: 768px)': {
              fontSize: '12px',
            },
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
            '@media (max-width: 768px)': {
              fontSize: '12px',
            },
          }}
        />
      </Tabs>
    </Box>
  );
};
