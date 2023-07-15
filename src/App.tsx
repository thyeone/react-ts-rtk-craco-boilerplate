import { GlobalStyle } from '@styles/globalStyle';
import { ThemeProvider } from 'styled-components';
import { RouterProvider } from 'react-router-dom';
import router from '@routes/router';
import { theme } from '@styles/theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <RouterProvider router={router} />
  </ThemeProvider>
);

export default App;
