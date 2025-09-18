import React from 'react';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { getFlightTimeRange } from '../utils';

export const TableWrapper = ({ segments }) => (
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
            color: 'grey',
            '@media (max-width: 768px)': {
              fontSize: '12px',
            },
          }}
        >
          {segments.origin} - {segments.destination}
        </TableCell>
        <TableCell
          align="center"
          sx={{
            color: 'grey',
            '@media (max-width: 768px)': {
              fontSize: '12px',
            },
          }}
        >
          В ПУТИ
        </TableCell>
        <TableCell
          align="right"
          sx={{
            color: 'grey',
            '@media (max-width: 768px)': {
              fontSize: '12px',
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
            '@media (max-width: 768px)': {
              fontSize: '12px',
            },
          }}
        >
          {getFlightTimeRange(segments.date, segments.duration)}
        </TableCell>
        <TableCell
          align="center"
          sx={{
            '@media (max-width: 768px)': {
              fontSize: '12px',
            },
          }}
        >
          {Math.floor(segments.duration / 60)}ч {segments.duration % 60}м
        </TableCell>
        <TableCell
          align="right"
          sx={{
            '@media (max-width: 768px)': {
              fontSize: '12px',
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
