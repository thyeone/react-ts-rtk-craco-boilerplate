import { GlobalStyle } from '@styles/globalStyle';
import { ThemeProvider } from 'styled-components';
import theme from '@styles/theme';
import Router from '@routes/router';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Router />
  </ThemeProvider>
);

export default App;
