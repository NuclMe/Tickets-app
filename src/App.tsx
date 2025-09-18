import { useEffect } from 'react';
import { Header, Transfer, Flights } from './components';
import Box from '@mui/material/Box';
import styled from 'styled-components';
import { GlobalStyles } from './GlobalStyles';
import { device } from './const';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTickets } from './redux/ducks/tickets';
import { Items } from './components/Items';
import { selectFilteredTickets } from './redux/ducks/tickets';

const RootContainer = styled.div`
  padding: 2rem;
  background: #d3d3d3;
`;
const MainContentWrapper = styled.div`
  display: flex;
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;

  @media ${device.tablet} {
    flex-direction: column;
  }
`;

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTickets());
  }, [dispatch]);
  const filteredTickets = useSelector(selectFilteredTickets);

  const cheapestTickets = [...filteredTickets].sort(
    (a, b) => a.price - b.price
  );
  const fastestTickets = [...filteredTickets].sort(
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
