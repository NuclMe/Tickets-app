import './App.css';
import { Header, Transfer, Flights, Items } from './components';
import Box from '@mui/material/Box';

function App() {
  return (
    <>
      <Header />
      <Box
        sx={{
          display: 'flex',
          gap: '20px',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <Transfer />
        <Box sx={{ display: 'flex', flexDirection: 'column', flex: '3' }}>
          <Flights />
          <Items />
        </Box>
      </Box>
    </>
  );
}

export default App;
