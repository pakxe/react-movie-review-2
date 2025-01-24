import {ThemeProvider} from '@emotion/react';
import theme from './theme';
import Router from './Router';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ModalProvider} from './hooks/useModal';

function App() {
  const queryClient = new QueryClient();

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <ModalProvider>
          <Router />
        </ModalProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
