import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig(({mode}) => {
  const isDevelopment = mode === 'development';

  return {
    base: isDevelopment ? '/' : '/react-movie-review-2/',
    plugins: [react()],
  };
});
