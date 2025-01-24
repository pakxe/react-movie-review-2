import {BrowserRouter, Route, Routes} from 'react-router-dom';
import PopularMovieListPage from './pages/PopularMovieListPage';
import KeywordMovieListPage from './pages/KeywordMovieListPage';

const Router = () => {
  return (
    <BrowserRouter basename="/react-movie-review-2">
      <Routes>
        <Route path="/" element={<PopularMovieListPage />} />
        <Route path="/:keyword" element={<KeywordMovieListPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
