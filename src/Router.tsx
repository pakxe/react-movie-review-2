import {BrowserRouter, Route, Routes} from 'react-router-dom';
import PopularMovieListPage from './pages/PopularMovieListPage';
import KeywordMovieListPage from './pages/KeywordMovieListPage';

const Router = () => {
  return (
    <BrowserRouter basename={import.meta.env.VITE_BASE_URL}>
      <Routes>
        <Route path="/" element={<PopularMovieListPage />} />
        <Route path="/:keyword" element={<KeywordMovieListPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
