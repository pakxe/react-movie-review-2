import {css, useTheme} from '@emotion/react';
import List from './List';

const MovieListSkeleton = () => {
  // 지금 width를 가져와서 1024 이상이면 4개, 768 이상이면 3개, 768 미만 2개 배열을 만든다.
  const count = (window.innerWidth >= 1024 ? 4 : window.innerWidth >= 768 ? 3 : 2) * 3;
  const skeletons = Array.from({length: count}, (_, i) => i);
  const theme = useTheme();

  return (
    <List>
      {skeletons.map(i => (
        <li key={i}>
          <div
            className="item-card"
            css={css`
              width: 180px;
              height: 270px;

              background-color: ${theme.colors.gray3};
            `}
          />
        </li>
      ))}
    </List>
  );
};

export default MovieListSkeleton;
