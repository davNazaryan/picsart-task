import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

import './App.css';
import CustomThemeProvider from './ThemeProvider';
import Header from './Header';
import Router from './Router';

const App = () => (
  <div className="App">
    <CustomThemeProvider>
      <BrowserRouter>
        <CssBaseline />
        <Header />
        <Container sx={{ mt: 2 }}>
          <Router />
        </Container>
      </BrowserRouter>
    </CustomThemeProvider>
  </div>
);

export default App;
