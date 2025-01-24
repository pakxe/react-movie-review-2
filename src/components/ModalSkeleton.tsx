import {css, useTheme} from '@emotion/react';
import {ModalProps} from '../types/modal';
import {WithChildren} from '../types/with';

type Props = ModalProps & {};

const ModalSkeleton = ({onClose, isOpen}: Props) => {
  if (!isOpen) return null;

  return (
    <div
      css={css`
        z-index: 3;
        width: 100vw;
        height: 100vh;

        display: flex;
        justify-content: center;
        align-items: center;

        position: fixed;

        @media (max-width: 768px) {
          align-items: end;
        }
      `}
    >
      <Dimmer onClose={onClose} />
      <Content />
    </div>
  );
};

const Dimmer = ({onClose}: Pick<ModalProps, 'onClose'>) => {
  return (
    <div
      onClick={onClose}
      css={css`
        position: fixed;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
      `}
    />
  );
};

const Content = () => {
  const theme = useTheme();

  return (
    <div
      css={css`
        z-index: 4;
        max-width: 826px;
        width: 100%;
        background-color: ${theme.colors.gray5};

        @media (max-width: 768px) {
          height: 50%;
        }
      `}
    ></div>
  );
};

export default ModalSkeleton;
