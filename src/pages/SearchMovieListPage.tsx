import MovieList from '../components/MovieList';
import Text from '../components/Text';
import Header from '../components/Header';
import {useSearchParams} from 'react-router-dom';
import useGetSearchMovies from '../queries/useGetKeyworkMovies';
import Page from '../components/Page';
import MovieListSkeleton from '../components/MovieListSkeleton';
import InfiniteScrollContainer from '../components/InfiniteScrollContainer';
import QUERY_PARAMETERS from '../constants/queryParameters';

const SearchMovieListPage = () => {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get(QUERY_PARAMETERS.QUERY);

  const {movies, ...rest} = useGetSearchMovies(keyword ?? '');

  return (
    <Page align="start" top={<Header />}>
      <Text type="title">{keyword} 검색</Text>
      <InfiniteScrollContainer {...rest} skeletonList={<MovieListSkeleton />}>
        {movies.length === 0 && !rest.isFetching ? <Text>영화 정보가 없습니다.</Text> : <MovieList movies={movies} />}
      </InfiniteScrollContainer>
    </Page>
  );
};

export default SearchMovieListPage;
