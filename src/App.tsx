import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { GlobalStyles } from './view/styles/GlobalStyles';

import defaultTheme from './view/styles/themes/default';
import { ThemeProvider } from 'styled-components';

import { Routes } from './routes/Routes';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Routes />
      <ToastContainer position="bottom-center" />
    </ThemeProvider>
  );
}
