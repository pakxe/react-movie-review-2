import {css} from '@emotion/react';
import useMovieDetailModal from '../../hooks/useMovieDetailModal';
import Text from '../Text';
import movieItemStyle from './movieItemStyle';
import Image from '../Image';

type Props = Movie & {};

const MovieItem = ({id, title, poster_path, vote_average}: Props) => {
  const {open} = useMovieDetailModal(id);

  return (
    <div onClick={open} css={movieItemStyle.container}>
      <Image
        src={`${import.meta.env.VITE_IMAGE_BASE_URL}${poster_path}.jpg`}
        loading="lazy"
        alt={title}
        cssProp={movieItemStyle.posterImage}
        minWidth={180}
        minHeight={270}
        aspectRatio={2 / 3}
      />
      <Text type="bodyBold" cssProp={movieItemStyle.title}>
        {title}
      </Text>
      <Text type="body">
        <img src="assets/star_filled.png" alt="별점" height={24} width={24} />
        {vote_average}
      </Text>
    </div>
  );
};

export default MovieItem;
