import {css} from '@emotion/react';
import {WithChildren} from '../types/with';

const List = ({children}: WithChildren) => {
  return (
    <ol
      css={css`
        display: grid;

        gap: 3rem;
        place-items: center stretch; // width 늘리게
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
      {children}
    </ol>
  );
};

export default List;
