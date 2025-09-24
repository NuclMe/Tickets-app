import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import type { FC } from 'react';

import { device, fontSizes, colors } from '../../styledVars';
import type { ITicket } from '../../types';
import { numberWithSpaces } from '../../utils';
import { TableWrapper } from '../TableWrapper/TableWrapper';

export const Item: FC<ITicket> = ({ price, carrier, segments }) => (
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
        sx={{
          fontWeight: 'bold',
          color: colors.primary,
          fontSize: fontSizes.large,
          [`${device.tablet}`]: {
            fontSize: fontSizes.medium,
          },
        }}
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
