import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import type { FC } from 'react';

import { device, fontSizes, colors } from '../styledVars';
import type { ISegment } from '../types';
import { getFlightTimeRange } from '../utils';

export const TableWrapper: FC<{ segments: ISegment }> = ({ segments }) => (
  <Table
    sx={{
      [`& .${tableCellClasses.root}`]: {
        borderBottom: 'none',
      },
    }}
  >
    <TableHead>
      <TableRow
        key={segments.duration}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        <TableCell
          align="left"
          sx={{
            color: colors.grey,
            [`${device.tablet}`]: {
              fontSize: fontSizes.xs,
            },
          }}
        >
          {segments.origin} - {segments.destination}
        </TableCell>
        <TableCell
          align="center"
          sx={{
            color: colors.grey,
            [`${device.tablet}`]: {
              fontSize: fontSizes.xs,
            },
          }}
        >
          В ПУТИ
        </TableCell>
        <TableCell
          align="right"
          sx={{
            color: colors.grey,
            [`${device.tablet}`]: {
              fontSize: fontSizes.xs,
            },
          }}
        >
          {segments.stops.length} ПЕРЕСАДКИ{' '}
        </TableCell>
      </TableRow>
    </TableHead>
    <TableBody sx={{ borderBottom: 'none' }}>
      <TableRow>
        <TableCell
          align="left"
          sx={{
            [`${device.tablet}`]: {
              fontSize: fontSizes.xs,
            },
          }}
        >
          {getFlightTimeRange(segments.date, segments.duration)}
        </TableCell>
        <TableCell
          align="center"
          sx={{
            [`${device.tablet}`]: {
              fontSize: fontSizes.xs,
            },
          }}
        >
          {Math.floor(segments.duration / 60)}ч {segments.duration % 60}м
        </TableCell>
        <TableCell
          align="right"
          sx={{
            [`${device.tablet}`]: {
              fontSize: fontSizes.xs,
            },
          }}
        >
          {segments.stops.map((stop, idx, arr) => (
            <span key={stop}>
              {stop}
              {idx < arr.length - 1 ? ', ' : ''}
            </span>
          ))}
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
);
