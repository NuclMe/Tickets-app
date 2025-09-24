import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import type { FC } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { device, fontSizes, colors } from '../../styledVars';

export const Flights: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const tabIndex = location.pathname === '/fastest' ? 1 : 0;
  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
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
          backgroundColor: `${colors.white}`,
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
            borderTop: `1px solid ${colors.black}`,
            borderLeft: `1px solid ${colors.black}`,
            borderBottom: `1px solid ${colors.black}`,
            backgroundColor: tabIndex === 0 ? `${colors.lightBlue}` : undefined,
            color: tabIndex === 0 ? 'white !important' : undefined,
            borderColor: tabIndex === 0 ? `${colors.lightBlue}` : undefined,
            boxShadow: 'none',
            transition: 'none',
            '&:hover': { borderColor: `${colors.lightBlue}` },
            '&:focus': { outline: 'none' },
            [`${device.tablet}`]: {
              fontSize: fontSizes.small,
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
            borderTop: `1px solid ${colors.black}`,
            borderRight: `1px solid ${colors.black}`,
            borderBottom: `1px solid ${colors.black}`,
            boxShadow: 'none',
            transition: 'none',
            backgroundColor: tabIndex === 1 ? `${colors.lightBlue}` : undefined,
            color: tabIndex === 1 ? 'white !important' : undefined,
            '&:focus': { outline: 'none' },
            '&:hover': { borderColor: `${colors.lightBlue}` },
            [`${device.tablet}`]: {
              fontSize: fontSizes.small,
            },
          }}
        />
      </Tabs>
    </Box>
  );
};
