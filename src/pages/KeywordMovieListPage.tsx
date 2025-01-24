import MovieList from '../components/MovieList';
import Text from '../components/Text';
import Header from '../components/Header';
import {useParams} from 'react-router-dom';
import useGetKeywordMovies from '../queries/useGetKeyworkMovies';
import Page from '../components/Page';
import MovieListSkeleton from '../components/MovieListSkeleton';
import InfiniteScrollContainer from '../components/InfiniteScrollContainer';
import {css} from '@emotion/react';

const KeywordMovieListPage = () => {
  const {keyword} = useParams();
  const {movies, ...rest} = useGetKeywordMovies(keyword ?? '');

  return (
    <Page align="start">
      <Header />
      <main
        css={css`
          width: 100%;

          display: flex;
          align-items: center;
          justify-content: center;
        `}
      >
        <div
          css={css`
            display: flex;
            flex-direction: column;
            align-items: start;
            justify-content: center;

            gap: 2rem;
          `}
        >
          <Text type="title">{keyword} 검색</Text>
          <InfiniteScrollContainer {...rest} skeletonList={<MovieListSkeleton />}>
            {movies.length === 0 && !rest.isFetching ? (
              <Text>영화 정보가 없습니다.</Text>
            ) : (
              <MovieList movies={movies} />
            )}
          </InfiniteScrollContainer>
        </div>
      </main>
    </Page>
  );
};

export default KeywordMovieListPage;
