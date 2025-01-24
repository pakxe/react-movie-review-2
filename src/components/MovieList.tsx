import MovieItem from './MovieItem';
import List from './List';

type Props = {
  movies: Movie[];
};

const MovieList = ({movies}: Props) => {
  return (
    <List>
      {movies.map(movie => (
        <li>
          <MovieItem key={movie.id} {...movie} />
        </li>
      ))}
    </List>
  );
};

export default MovieList;
