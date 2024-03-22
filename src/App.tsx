import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { GlobalStyles } from './view/styles/GlobalStyles';

import defaultTheme from './view/styles/themes/default';
import { ThemeProvider } from 'styled-components';

import { Router } from './Router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthProvider } from '@app/context/AuthContext';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={defaultTheme}>
        <AuthProvider>
          <GlobalStyles />
          <Router />
          <ToastContainer position="bottom-center" />
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
