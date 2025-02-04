import useGetMovieDetail from '../../queries/useGetMovieDetail';
import {ModalProps} from '../../types/modal';
import Line from '../Line';
import Modal from '../Modal';
import StarRating from '../StarRating';
import Text from '../Text';
import SkeletonMovieDetailModal from './SkeletonMovieDetailModal';
import ImageWithSkeleton from '../ImageWithSkeleton';
import style from './movieDetailModalStyle';

type Props = ModalProps & {
  id: number;
};

const MovieDetailModal = ({isOpen, onClose, id}: Props) => {
  const {movieDetail} = useGetMovieDetail(id);

  if (!movieDetail) {
    return <SkeletonMovieDetailModal onClose={onClose} isOpen={isOpen} />;
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
            src={`https://image.tmdb.org/t/p/w220_and_h330_face/${poster_path}.jpg`}
            loading="lazy"
            cssProp={style.poster}
          />
          <div css={style.movieInfoAndRating}>
            <div css={style.movieInfoWrapper}>
              <div css={style.genreAndVote}>
                <Text>{genres.map(({name}) => name).join(', ')}</Text>
                <div css={style.voteAverage}>
                  <img src="assets/star_filled.png" height={20} width={20} />
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
