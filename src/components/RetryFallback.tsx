import {css} from '@emotion/react';
import Text from './Text';

type Props = {
  onRetry: () => void;
};

const RetryFallback = ({onRetry}: Props) => {
  return (
    <div
      css={css`
        width: 100%;
        height: 100%;

        padding: 32px;

        color: white;

        display: flex;
        flex-direction: column;
        align-items: center;

        gap: 16px;
      `}
    >
      <Text color="gray1" type="subTitle">
        요청에 실패했습니다.
      </Text>
      <button onClick={onRetry}>다시 시도하기</button>
    </div>
  );
};

export default RetryFallback;
