import {BrowserRouter, Route, Routes} from 'react-router-dom';
import PopularMovieListPage from './pages/PopularMovieListPage';
import SearchMovieListPage from './pages/SearchMovieListPage';
import PATHS from './constants/paths';

const Router = () => {
  return (
    <BrowserRouter basename={import.meta.env.VITE_BASE_URL}>
      <Routes>
        <Route path={PATHS.HOME} element={<PopularMovieListPage />} />
        <Route path={PATHS.SEARCH} element={<SearchMovieListPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
