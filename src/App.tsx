import { Header, Transfer, Flights, Items } from './components';
import Box from '@mui/material/Box';
import styled from 'styled-components';
import { GlobalStyles } from './GlobalStyles';
import { device } from './const';

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

function App() {
  return (
    <RootContainer>
      <GlobalStyles />
      <Header />
      <MainContentWrapper>
        <Transfer />
        <Box sx={{ display: 'flex', flexDirection: 'column', flex: 3 }}>
          <Flights />
          <Items />
        </Box>
      </MainContentWrapper>
    </RootContainer>
  );
}

export default App;
