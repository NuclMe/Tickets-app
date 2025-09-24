import { describe, expect, it, vi, beforeEach } from 'vitest';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

vi.mock('redux-saga');
vi.mock('@reduxjs/toolkit');
vi.mock('./root-saga');
vi.mock('./root-reducer');

const mockSagaMiddleware = {
  run: vi.fn(),
};

const mockStore = {
  dispatch: vi.fn(),
  getState: vi.fn(),
  subscribe: vi.fn(),
  replaceReducer: vi.fn(),
};

const mockCreateSagaMiddleware = vi.mocked(createSagaMiddleware);
const mockConfigureStore = vi.mocked(configureStore);

beforeEach(() => {
  vi.clearAllMocks();
  mockCreateSagaMiddleware.mockReturnValue(mockSagaMiddleware as any);
  mockConfigureStore.mockReturnValue(mockStore as any);
});

describe('Redux Store Configuration', () => {
  it('should create saga middleware', async () => {
    await import('./index');

    expect(mockCreateSagaMiddleware).toHaveBeenCalledTimes(1);
    expect(mockCreateSagaMiddleware).toHaveBeenCalledWith();
  });
});
