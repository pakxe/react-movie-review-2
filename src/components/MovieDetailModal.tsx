import {css, useTheme} from '@emotion/react';
import useGetMovieDetail from '../queries/useGetMovieDetail';
import {ModalProps} from '../types/modal';
import Line from './Line';
import Modal from './Modal';
import StarRating from './StarRating';
import Text from './Text';
import ModalSkeleton from './ModalSkeleton';

type Props = ModalProps & {
  id: number;
};

const MovieDetailModal = ({isOpen, onClose, id}: Props) => {
  const {movieDetail} = useGetMovieDetail(id);
  const theme = useTheme();

  if (!movieDetail) {
    return <ModalSkeleton onClose={onClose} isOpen={isOpen} />;
  }

  const {title, overview, poster_path, genres, vote_average} = movieDetail;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <section
        css={css`
          height: 100%;

          display: flex;
          flex-direction: column;

          align-items: center;

          position: relative;
        `}
      >
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
        <Text
          color="gray1"
          type="subTitle"
          cssProp={css`
            padding: 1rem;
          `}
        >
          {title}
        </Text>
        <Line color="gray3" />
        <div
          css={css`
            width: 100%;

            display: flex;
            justify-content: space-between;

            padding: 1rem;

            gap: 2rem;
          `}
        >
          <img
            src={`https://image.tmdb.org/t/p/w220_and_h330_face/${poster_path}.jpg`}
            css={css`
              flex: 2;

              @media (max-width: 768px) {
                display: none;
              }
            `}
          />
          <div
            css={css`
              flex: 3;

              display: flex;
              flex-direction: column;

              justify-content: space-between;
            `}
          >
            <div
              css={css`
                display: flex;
                flex-direction: column;
                gap: 1rem;
              `}
            >
              <div
                css={css`
                  display: flex;
                  gap: 1.5rem;
                `}
              >
                <Text>{genres.map(({name}) => name).join(', ')}</Text>
                <div
                  css={css`
                    display: flex;
                  `}
                >
                  <img src="/assets/star_filled.png" />
                  <Text>{vote_average}</Text>
                </div>
              </div>
              <Text>{overview}</Text>
            </div>
            <StarRating id={id} />
          </div>
        </div>
      </section>
    </Modal>
  );
};

export default MovieDetailModal;
