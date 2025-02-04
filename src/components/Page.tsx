import {css} from '@emotion/react';
import {WithChildren} from '../types/with';
import {ReactNode} from 'react';

type Props = WithChildren & {
  align?: 'center' | 'start' | 'end';
  top?: ReactNode;
};

const Page = ({children, align, top}: Props) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;

        align-items: ${align ?? 'center'};
        height: 100vh;
        width: 100%;
      `}
    >
      {top}
      <main
        css={css`
          width: 100%;

          display: flex;
          align-items: center;
          justify-content: center;

          padding: 0 16px;
        `}
      >
        <div
          css={css`
            display: flex;
            flex-direction: column;
            justify-content: center;

            gap: 2rem;

            max-width: 1200px;
            width: 100%;
          `}
        >
          {children}
        </div>
      </main>
    </div>
  );
};

export default Page;
