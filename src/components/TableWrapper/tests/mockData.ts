const mockSegmentWithStops = {
  stops: ['LED', 'AMS', 'BCN'],
  duration: 500,
  date: '2018-05-18T02:00:00.000Z',
  origin: 'MOW',
  destination: 'HKT',
};
const mockSegmentNoStops = {
  stops: [],
  duration: 300,
  date: '2018-05-18T02:00:00.000Z',
  origin: 'MOW',
  destination: 'HKT',
};

const mockSegmentOneStop = {
  stops: ['LED'],
  duration: 400,
  date: '2018-05-18T02:00:00.000Z',
  origin: 'MOW',
  destination: 'HKT',
};

export { mockSegmentNoStops, mockSegmentOneStop, mockSegmentWithStops };
