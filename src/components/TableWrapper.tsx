import React from 'react';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';

export const TableWrapper = (props) => {
  const { segments } = props;

  function getFlightTimeRange(date: string, duration: number) {
    const start = new Date(date);
    const end = new Date(start.getTime() + duration * 60000);
    const pad = (n: number) => n.toString().padStart(2, '0');
    const startStr = `${pad(start.getHours())}:${pad(start.getMinutes())}`;
    const endStr = `${pad(end.getHours())}:${pad(end.getMinutes())}`;
    return `${startStr} - ${endStr}`;
  }
  return (
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
          <TableCell align="left" sx={{ color: 'grey' }}>
            {segments.origin} - {segments.destination}
          </TableCell>
          <TableCell align="center" sx={{ color: 'grey' }}>
            В ПУТИ
          </TableCell>
          <TableCell align="right" sx={{ color: 'grey' }}>
            {segments.stops.length} ПЕРЕСАДКИ{' '}
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody sx={{ borderBottom: 'none' }}>
        <TableRow>
          <TableCell align="left">
            {getFlightTimeRange(segments.date, segments.duration)}
          </TableCell>
          <TableCell align="center">
            {Math.floor(segments.duration / 60)}ч {segments.duration % 60}м
          </TableCell>
          <TableCell align="right">
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
};
