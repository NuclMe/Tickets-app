import { describe, expect, it } from 'vitest';

import rootReducer from './root-reducer';
import type { RootState } from './root-reducer';
import { reducer as ticketsReducer } from './ducks/tickets/tickets';
import { types } from './ducks/tickets/types';
import type { ITicket } from '../types';

describe('rootReducer', () => {
  it('should have correct initial state structure', () => {
    const initialAction = { type: '@@INIT' };
    const initialState = rootReducer(undefined, initialAction);

    expect(initialState).toHaveProperty('tickets');
    expect(initialState.tickets).toHaveProperty('tickets');
    expect(initialState.tickets).toHaveProperty('loading');
    expect(initialState.tickets).toHaveProperty('error');
    expect(initialState.tickets).toHaveProperty('selectedTransfer');
  });

  it('should have correct TypeScript types for RootState', () => {
    const initialState = rootReducer(undefined, { type: '@@INIT' });

    const typedState: RootState = initialState;

    expect(typedState).toHaveProperty('tickets');
    expect(typeof typedState.tickets.loading).toBe('boolean');
    expect(Array.isArray(typedState.tickets.tickets)).toBe(true);
    expect(typeof typedState.tickets.selectedTransfer).toBe('string');
  });
});
