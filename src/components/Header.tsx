import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import type { FC } from 'react';

import airplane from '../assets/airplane.svg';
import { colors } from '../styledVars';

export const Header: FC = () => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      mb: '50px',
    }}
  >
    <Link
      href="#"
      sx={{
        backgroundColor: `${colors.blue}`,
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
