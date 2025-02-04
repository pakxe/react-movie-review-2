import {css, useTheme} from '@emotion/react';
import {ModalProps} from '../../types/modal';
import Modal from '../Modal';
import style from './movieDetailModalStyle';
import Text from '../Text';
import Line from '../Line';
import Skeleton from '../Skeleton/Skeleton';

type Props = ModalProps & {};

const SkeletonMovieDetailModal = ({onClose, isOpen}: Props) => {
  const {skeletonCSS} = useTheme();

  if (!isOpen) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <section css={style.container}>
        <Skeleton.Text type="subTitle" cssProp={style.title} />
        <Line color="gray3" />

        <Modal.CloseButton onClose={onClose} />

        <div css={[style.movieDetail]}>
          <Skeleton.Image cssProp={style.poster} />
          <div css={[style.movieInfoAndRating, skeletonCSS]}></div>
        </div>
      </section>
    </Modal>
  );
};

export default SkeletonMovieDetailModal;
