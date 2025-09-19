import Box from '@mui/material/Box';
import type { FC } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';

import { Header, Transfer, Flights, Items } from './components';

import { GlobalStyles } from './GlobalStyles';
import {
  fetchTickets,
  selectFilteredTickets,
} from './redux/ducks/tickets/tickets';
import { MainContentWrapper, RootContainer } from './styledVars';
import type { ITicket } from './types';

export const App: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTickets());
  }, [dispatch]);

  const filteredTickets = useSelector(selectFilteredTickets);

  const cheapestTickets: ITicket[] = [...filteredTickets].sort(
    (a, b) => a.price - b.price
  );
  const fastestTickets: ITicket[] = [...filteredTickets].sort(
    (a, b) =>
      a.segments[0].duration +
      a.segments[1].duration -
      (b.segments[0].duration + b.segments[1].duration)
  );

  return (
    <RootContainer>
      <GlobalStyles />
      <Header />
      <MainContentWrapper>
        <Transfer />
        <Box sx={{ display: 'flex', flexDirection: 'column', flex: 3 }}>
          <Flights />
          <Routes>
            <Route path="/" element={<Navigate to="/cheapest" replace />} />
            <Route
              path="/cheapest"
              element={<Items items={cheapestTickets} />}
            />
            <Route path="/fastest" element={<Items items={fastestTickets} />} />
          </Routes>
        </Box>
      </MainContentWrapper>
    </RootContainer>
  );
};
