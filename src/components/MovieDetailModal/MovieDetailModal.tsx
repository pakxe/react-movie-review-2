import useGetMovieDetail from '../../queries/useGetMovieDetail';
import {ModalProps} from '../../types/modal';
import Line from '../Line';
import Modal from '../Modal';
import StarRating from '../StarRating';
import Text from '../Text';
import SkeletonMovieDetailModal from './SkeletonMovieDetailModal';
import ImageWithSkeleton from '../ImageWithSkeleton';
import style from './movieDetailModalStyle';
import RetryFallback from '../RetryFallback';
import {css} from '@emotion/react';
import {SyntheticEvent, useRef, useState} from 'react';

type Props = ModalProps & {
  id: number;
};

const MovieDetailModal = ({isOpen, onClose, id}: Props) => {
  const {movieDetail, isFetching, refetch} = useGetMovieDetail(id);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [imageHeight, setImageHeight] = useState<number | null>(null);

  const checkImageWithHeight = (e: SyntheticEvent<HTMLImageElement>) => {
    if (!(e.target instanceof HTMLImageElement)) return;
    const img = e.target;

    setImageHeight(img.clientHeight);
  };

  if (isFetching) {
    return <SkeletonMovieDetailModal onClose={onClose} isOpen={isOpen} />;
  }

  if (!movieDetail) {
    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <RetryFallback onRetry={refetch} />
      </Modal>
    );
  }

  const {title, overview, poster_path, genres, vote_average} = movieDetail;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <section css={style.container}>
        <Modal.CloseButton onClose={onClose} />

        <Text color="gray1" type="subTitle" cssProp={style.title}>
          {title}
        </Text>
        <Line color="gray3" />

        <div css={style.movieDetail}>
          <ImageWithSkeleton
            ref={imgRef}
            src={`https://image.tmdb.org/t/p/w220_and_h330_face/${poster_path}.jpg`}
            loading="lazy"
            cssProp={style.poster}
            onLoad={checkImageWithHeight}
          />
          <div css={style.movieInfoAndRating}>
            <div css={[style.movieInfoWrapper]}>
              <div css={style.genreAndVote}>
                <Text>{genres.map(({name}) => name).join(', ')}</Text>
                <div css={style.voteAverage}>
                  <img src="assets/star_filled.png" height={20} width={20} />
                  <Text>{vote_average}</Text>
                </div>
              </div>
              <Text
                cssProp={css`
                  height: ${imageHeight !== null
                    ? imageHeight === 0
                      ? '20vh'
                      : `${imageHeight - imageHeight * 0.4}px`
                    : 0};

                  overflow-y: auto;
                `}
              >
                {overview}
              </Text>
            </div>
            <StarRating id={id} />
          </div>
        </div>
      </section>
    </Modal>
  );
};

export default MovieDetailModal;
