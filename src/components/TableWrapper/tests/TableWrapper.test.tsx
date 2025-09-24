import { render, screen } from '@testing-library/react';

import { TableWrapper } from '../TableWrapper';

import {
  mockSegmentNoStops,
  mockSegmentOneStop,
  mockSegmentWithStops,
} from './mockData';

describe('TableWrapper', () => {
  it('renders the TableWrapper component via snapshot', () => {
    const { container } = render(
      <TableWrapper segments={mockSegmentWithStops} />
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render flight route information', () => {
    render(<TableWrapper segments={mockSegmentWithStops} />);

    expect(screen.getByText('MOW - HKT')).toBeInTheDocument();
    expect(screen.getByText('В ПУТИ')).toBeInTheDocument();
  });

  it('should display correct transfer count based on stops length', () => {
    render(<TableWrapper segments={mockSegmentWithStops} />);

    expect(screen.getByText('3 ПЕРЕСАДКИ')).toBeInTheDocument();
  });

  it('should format flight duration correctly', () => {
    render(<TableWrapper segments={mockSegmentWithStops} />);

    expect(screen.getByText('8ч 20м')).toBeInTheDocument();
  });

  it('should handle segment with no stops', () => {
    render(<TableWrapper segments={mockSegmentNoStops} />);

    expect(screen.getByText('0 ПЕРЕСАДКИ')).toBeInTheDocument();
    expect(screen.queryByText('LED')).not.toBeInTheDocument();
  });

  it('should handle segment with single stop (no comma)', () => {
    render(<TableWrapper segments={mockSegmentOneStop} />);

    expect(screen.getByText('1 ПЕРЕСАДКИ')).toBeInTheDocument();
    expect(screen.getByText('LED')).toBeInTheDocument();
    expect(screen.queryByText(/LED,/)).not.toBeInTheDocument();
  });

  it('should render flight time range', () => {
    render(<TableWrapper segments={mockSegmentWithStops} />);

    expect(screen.getByText(/\d{2}:\d{2} - \d{2}:\d{2}/)).toBeInTheDocument();
  });
});
