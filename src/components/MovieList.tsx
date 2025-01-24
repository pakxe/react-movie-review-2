import {css} from '@emotion/react';
import MovieItem from './MovieItem';
import Text from './Text';

type Props = {
  movies: Movie[];
};

const MovieList = ({movies}: Props) => {
  return (
    <ol
      css={css`
        display: grid;

        gap: 4rem; /* 각 아이템 간 간격 */
        place-items: center; /* 수평 및 수직 중앙 정렬 */
        justify-content: space-between;
        /* 데스크톱: 4개 */
        grid-template-columns: repeat(4, 1fr);

        @media (max-width: 1024px) {
          /* 태블릿: 3개 */
          grid-template-columns: repeat(3, 1fr);
        }

        @media (max-width: 768px) {
          /* 모바일: 2개 */
          grid-template-columns: repeat(2, 1fr);
        }
      `}
    >
      {movies.map(movie => (
        <li>
          <MovieItem key={movie.id} {...movie} />
        </li>
      ))}
    </ol>
  );
};

export default MovieList;
