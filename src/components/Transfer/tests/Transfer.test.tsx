import { configureStore } from '@reduxjs/toolkit';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { describe, expect, it, vi } from 'vitest';

import { TRANSFER_OPTIONS } from '../../../const';
import { reducer as ticketsReducer } from '../../../redux/ducks/tickets/tickets';
import { Transfer } from '../Transfer';

const createTestStore = (preloadedState = {}) => {
  const store = configureStore({
    reducer: {
      tickets: ticketsReducer,
    },
    preloadedState: {
      tickets: {
        tickets: [],
        loading: false,
        error: null,
        selectedTransfer: 'all',
        ...preloadedState,
      },
    },
  });

  store.dispatch = vi.fn(store.dispatch);
  return store;
};

const TestWrapper = ({ children, initialState = {} }) => {
  const store = createTestStore(initialState);
  return (
    <Provider store={store}>
      <BrowserRouter>{children}</BrowserRouter>
    </Provider>
  );
};

describe('Transfer', () => {
  it('renders the Transfer component via snapshot', () => {
    const { container } = render(
      <TestWrapper>
        <Transfer />
      </TestWrapper>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render all transfer options from TRANSFER_OPTIONS', () => {
    render(
      <TestWrapper>
        <Transfer />
      </TestWrapper>
    );

    TRANSFER_OPTIONS.forEach((option) => {
      expect(screen.getByLabelText(option.label)).toBeInTheDocument();
    });
  });

  it('should initialize with selectedTransfer from Redux state', () => {
    render(
      <TestWrapper initialState={{ selectedTransfer: '1' }}>
        <Transfer />
      </TestWrapper>
    );

    const radioButton = screen.getByDisplayValue('1');
    expect(radioButton).toBeChecked();
  });

  it('should handle radio button change and dispatch action (lines 69-71)', () => {
    const store = createTestStore();
    const dispatchSpy = vi.spyOn(store, 'dispatch');

    render(
      <Provider store={store}>
        <BrowserRouter>
          <Transfer />
        </BrowserRouter>
      </Provider>
    );

    const oneStopRadio = screen.getByDisplayValue('1');

    fireEvent.click(oneStopRadio);

    expect(dispatchSpy).toHaveBeenCalledWith({
      type: 'SET_TRANSFER_FILTER',
      payload: 1,
    });
  });

  it('should update field value when radio button is clicked (line 70)', () => {
    render(
      <TestWrapper>
        <Transfer />
      </TestWrapper>
    );

    expect(screen.getByDisplayValue('all')).toBeChecked();

    const zeroStopsRadio = screen.getByDisplayValue('0');
    fireEvent.click(zeroStopsRadio);

    expect(zeroStopsRadio).toBeChecked();
    expect(screen.getByDisplayValue('all')).not.toBeChecked();
  });

  it('should dispatch setTransferFilter with correct value (line 71)', () => {
    const store = createTestStore();
    const dispatchSpy = vi.spyOn(store, 'dispatch');

    render(
      <Provider store={store}>
        <BrowserRouter>
          <Transfer />
        </BrowserRouter>
      </Provider>
    );

    const twoStopsRadio = screen.getByDisplayValue('2');
    fireEvent.click(twoStopsRadio);

    expect(dispatchSpy).toHaveBeenCalledWith({
      type: 'SET_TRANSFER_FILTER',
      payload: 2,
    });
  });

  it('should maintain form state consistency with Redux state', () => {
    const store = createTestStore({ selectedTransfer: '0' });
    const dispatchSpy = vi.spyOn(store, 'dispatch');

    render(
      <Provider store={store}>
        <BrowserRouter>
          <Transfer />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByDisplayValue('0')).toBeChecked();

    const oneStopRadio = screen.getByDisplayValue('1');
    fireEvent.click(oneStopRadio);

    expect(oneStopRadio).toBeChecked();
    expect(dispatchSpy).toHaveBeenCalledWith({
      type: 'SET_TRANSFER_FILTER',
      payload: 1,
    });
  });

  it('should handle enableReinitialize correctly', () => {
    const { rerender } = render(
      <TestWrapper initialState={{ selectedTransfer: 'all' }}>
        <Transfer />
      </TestWrapper>
    );

    expect(screen.getByDisplayValue('all')).toBeChecked();

    rerender(
      <TestWrapper initialState={{ selectedTransfer: '2' }}>
        <Transfer />
      </TestWrapper>
    );

    expect(screen.getByDisplayValue('2')).toBeChecked();
  });
});
