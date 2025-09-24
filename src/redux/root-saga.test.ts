import { describe, expect, it } from 'vitest';
import { all, fork } from 'redux-saga/effects';
import { cloneableGenerator } from '@redux-saga/testing-utils';

import { rootSaga } from './root-saga';
import { ticketSaga } from './ducks/tickets/tickets';

describe('rootSaga', () => {
  it('should fork all child sagas', () => {
    const generator = rootSaga();

    const expected = all([fork(ticketSaga)]);
    const actual = generator.next().value;

    expect(actual).toEqual(expected);
  });

  it('should be a generator function', () => {
    const generator = rootSaga();

    expect(generator).toHaveProperty('next');
    expect(generator).toHaveProperty('throw');
    expect(generator).toHaveProperty('return');
    expect(typeof generator.next).toBe('function');
  });

  it('should complete after yielding all effects', () => {
    const generator = rootSaga();

    // First call should yield the all() effect
    const firstYield = generator.next();
    expect(firstYield.done).toBe(false);
    expect(firstYield.value).toEqual(all([fork(ticketSaga)]));

    // Second call should complete the generator
    const secondYield = generator.next();
    expect(secondYield.done).toBe(true);
    expect(secondYield.value).toBeUndefined();
  });

  it('should fork ticketSaga correctly', () => {
    const generator = rootSaga();
    const yielded = generator.next().value;

    // Extract the effects from the all() combinator
    const effects = yielded.payload;

    expect(effects).toHaveLength(1);
    expect(effects[0]).toEqual(fork(ticketSaga));
  });
});
