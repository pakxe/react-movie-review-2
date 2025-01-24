import {css, useTheme} from '@emotion/react';

const MovieListSkeleton = () => {
  // 지금 width를 가져와서 1024 이상이면 4개, 768 이상이면 3개, 768 미만 2개 배열을 만든다.
  const count = (window.innerWidth >= 1024 ? 4 : window.innerWidth >= 768 ? 3 : 2) * 3;
  const skeletons = Array.from({length: count}, (_, i) => i);
  const theme = useTheme();

  return (
    <ul
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
    </ul>
  );
};

export default MovieListSkeleton;
