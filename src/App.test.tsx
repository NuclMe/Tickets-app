import { configureStore } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';

import { App } from './App';
import { reducer as ticketsReducer } from './redux/ducks/tickets/tickets';

const createTestStore = () => {
  return configureStore({
    reducer: {
      tickets: ticketsReducer,
    },
  });
};

const TestWrapper = ({ children }) => {
  const store = createTestStore();
  return (
    <Provider store={store}>
      <BrowserRouter>{children}</BrowserRouter>
    </Provider>
  );
};

describe('App', () => {
  it('renders the App component via snapshot', () => {
    render(
      <TestWrapper>
        <App />
      </TestWrapper>
    );

    expect(App).toMatchSnapshot();
  });
});
