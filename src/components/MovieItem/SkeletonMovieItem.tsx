import {css, useTheme} from '@emotion/react';
import movieItemStyle from './movieItemStyle';
import Text from '../Text';

const SkeletonMovieItem = () => {
  const {skeletonCSS} = useTheme();

  return (
    <div css={[movieItemStyle.container]}>
      <div css={[movieItemStyle.posterImage, skeletonCSS]}>
        <div
          css={css`
            width: 1000px;
            height: 1000px;
          `}
        />
      </div>
      <div css={skeletonCSS}>
        <Text type="bodyBold">&nbsp;</Text>
      </div>
      <div css={skeletonCSS}>
        <Text type="body">&nbsp;</Text>
      </div>
    </div>
  );
};

export default SkeletonMovieItem;
