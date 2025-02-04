import List from './List';
import SkeletonMovieItem from './MovieItem/SkeletonMovieItem';

const MovieListSkeleton = () => {
  // 지금 width를 가져와서 1024 이상이면 4개, 768 이상이면 3개, 768 미만 2개 배열을 만든다.
  const count = (window.innerWidth >= 1024 ? 4 : window.innerWidth >= 768 ? 3 : 2) * 3;
  const skeletons = Array.from({length: count}, (_, i) => i);

  return (
    <List>
      {skeletons.map(i => (
        <li key={i}>
          <SkeletonMovieItem />
        </li>
      ))}
    </List>
  );
};

export default MovieListSkeleton;
