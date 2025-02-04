import {Global, ThemeProvider} from '@emotion/react';
import theme from './theme';
import Router from './Router';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ModalProvider} from './hooks/useModal';
import {GlobalStyle} from './GlobalStyle';

function App() {
  const queryClient = new QueryClient();

  return (
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyle} />

      <QueryClientProvider client={queryClient}>
        <ModalProvider>
          <Router />
        </ModalProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
