import {css} from '@emotion/react';
import {WithChildren} from '../types/with';

type Props = WithChildren & {
  align?: 'center' | 'start' | 'end';
};

const Page = ({children, align}: Props) => {
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
      {children}
    </div>
  );
};

export default Page;
