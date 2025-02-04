import movieItemStyle from './movieItemStyle';
import Skeleton from '../Skeleton/Skeleton';

const SkeletonMovieItem = () => {
  return (
    <div css={[movieItemStyle.container]}>
      <Skeleton.Image cssProp={movieItemStyle.posterImage} minWidth={180} />

      <Skeleton.Text type="bodyBold" />
      <Skeleton.Text type="body" />
    </div>
  );
};

export default SkeletonMovieItem;
