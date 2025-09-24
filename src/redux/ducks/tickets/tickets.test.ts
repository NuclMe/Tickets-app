import { describe, expect, it } from 'vitest';

import type { RootState } from '../../root-reducer';
import { selectFilteredTickets } from './tickets';
import { mockTickets } from './mockData';

const createMockState = (
  tickets: ITicket[] = [],
  selectedTransfer: string = 'all'
): RootState => ({
  tickets: {
    tickets,
    loading: false,
    error: null,
    selectedTransfer,
  },
});

describe('selectFilteredTickets', () => {
  it('should return all tickets when selectedTransfer is "all"', () => {
    const state = createMockState(mockTickets, 'all');
    const result = selectFilteredTickets(state);

    expect(result).toEqual(mockTickets);
    expect(result).toHaveLength(5);
  });

  it('should filter tickets with 0 stops in all segments', () => {
    const state = createMockState(mockTickets, '0');
    const result = selectFilteredTickets(state);

    expect(result).toHaveLength(1);
    expect(result[0].carrier).toBe('SU');
    expect(result[0].segments[0].stops).toHaveLength(0);
    expect(result[0].segments[1].stops).toHaveLength(0);
  });

  it('should filter tickets with 1 stop in all segments', () => {
    const state = createMockState(mockTickets, '1');
    const result = selectFilteredTickets(state);

    expect(result).toHaveLength(1);
    expect(result[0].carrier).toBe('S7');
    expect(result[0].segments[0].stops).toHaveLength(1);
    expect(result[0].segments[1].stops).toHaveLength(1);
  });

  it('should filter tickets with 2 stops in all segments', () => {
    const state = createMockState(mockTickets, '2');
    const result = selectFilteredTickets(state);

    expect(result).toHaveLength(1);
    expect(result[0].carrier).toBe('TK');
    expect(result[0].segments[0].stops).toHaveLength(2);
    expect(result[0].segments[1].stops).toHaveLength(2);
  });

  it('should filter tickets with 3 stops in all segments', () => {
    const state = createMockState(mockTickets, '3');
    const result = selectFilteredTickets(state);

    expect(result).toHaveLength(1);
    expect(result[0].carrier).toBe('LH');
    expect(result[0].segments[0].stops).toHaveLength(3);
    expect(result[0].segments[1].stops).toHaveLength(3);
  });

  it('should work with empty tickets array', () => {
    const state = createMockState([], 'all');
    const result = selectFilteredTickets(state);

    expect(result).toEqual([]);
    expect(result).toHaveLength(0);
  });
});
