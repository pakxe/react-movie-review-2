import MovieItem from './MovieItem/MovieItem';
import List from './List';

type Props = {
  movies: Movie[];
};

const MovieList = ({movies}: Props) => {
  return (
    <List>
      {movies.map(movie => (
        <li key={movie.id}>
          <MovieItem {...movie} />
        </li>
      ))}
    </List>
  );
};

export default MovieList;
