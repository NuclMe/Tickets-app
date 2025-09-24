import type { ITicket } from '../../../types';

export const mockTickets: ITicket[] = [
  {
    price: 35230,
    carrier: 'SU',
    segments: [
      {
        origin: 'MOW',
        destination: 'HKT',
        date: '2018-05-18T02:00:00.000Z',
        stops: [],
        duration: 400,
      },
      {
        origin: 'HKT',
        destination: 'MOW',
        date: '2018-05-18T08:30:00.000Z',
        stops: [],
        duration: 300,
      },
    ],
  },
  {
    price: 30000,
    carrier: 'S7',
    segments: [
      {
        origin: 'MOW',
        destination: 'HKT',
        date: '2018-05-18T02:00:00.000Z',
        stops: ['LED'],
        duration: 600,
      },
      {
        origin: 'HKT',
        destination: 'MOW',
        date: '2018-05-18T08:30:00.000Z',
        stops: ['LED'],
        duration: 200,
      },
    ],
  },
  {
    price: 25000,
    carrier: 'TK',
    segments: [
      {
        origin: 'MOW',
        destination: 'HKT',
        date: '2018-05-18T02:00:00.000Z',
        stops: ['IST', 'DXB'],
        duration: 750,
      },
      {
        origin: 'HKT',
        destination: 'MOW',
        date: '2018-05-18T08:30:00.000Z',
        stops: ['IST', 'DXB'],
        duration: 650,
      },
    ],
  },
  {
    price: 40000,
    carrier: 'BA',
    segments: [
      {
        origin: 'MOW',
        destination: 'HKT',
        date: '2018-05-18T02:00:00.000Z',
        stops: ['LED'],
        duration: 500,
      },
      {
        origin: 'HKT',
        destination: 'MOW',
        date: '2018-05-18T08:30:00.000Z',
        stops: ['LED', 'AMS'],
        duration: 450,
      },
    ],
  },
  {
    price: 45000,
    carrier: 'LH',
    segments: [
      {
        origin: 'MOW',
        destination: 'HKT',
        date: '2018-05-18T02:00:00.000Z',
        stops: ['FRA', 'BKK', 'SIN'],
        duration: 800,
      },
      {
        origin: 'HKT',
        destination: 'MOW',
        date: '2018-05-18T08:30:00.000Z',
        stops: ['SIN', 'BKK', 'FRA'],
        duration: 750,
      },
    ],
  },
];
