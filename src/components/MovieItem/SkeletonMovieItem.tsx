import movieItemStyle from './movieItemStyle';
import Skeleton from '../Skeleton/Skeleton';

const SkeletonMovieItem = () => {
  return (
    <div css={[movieItemStyle.container]}>
      <Skeleton.Image cssProp={movieItemStyle.posterImage} />

      <Skeleton.Text type="bodyBold" />
      <Skeleton.Text type="body" />
    </div>
  );
};

export default SkeletonMovieItem;
