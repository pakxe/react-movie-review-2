import {css, useTheme} from '@emotion/react';
import {ModalProps} from '../types/modal';
import {WithChildren} from '../types/with';
import {useEffect} from 'react';
import useKeyDown from '../hooks/useKeyDown';

type Props = WithChildren & ModalProps & {};

// TODO: 스크롤 막기
const Modal = ({children, onClose, isOpen}: Props) => {
  useKeyDown({key: 'Escape', cb: onClose});

  if (!isOpen) return null;

  // TODO: height, width를 어찌
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
      <Content onClose={onClose}>{children}</Content>
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

const Content = ({children}: WithChildren & Pick<ModalProps, 'onClose'>) => {
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
    >
      {children}
    </div>
  );
};

const ModalCloseButton = ({onClose}: Pick<ModalProps, 'onClose'>) => {
  const theme = useTheme();

  return (
    <button
      onClick={onClose}
      css={css`
        position: absolute;
        top: 1rem;
        right: 1rem;
        background: none;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        color: ${theme.colors.gray2};
      `}
    >
      X
    </button>
  );
};

Modal.CloseButton = ModalCloseButton;

export default Modal;
