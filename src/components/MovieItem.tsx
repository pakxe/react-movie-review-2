import {css} from '@emotion/react';
import useMovieDetailModal from '../hooks/useMovieDetailModal';
import Text from './Text';

type Props = Movie & {};

const MovieItem = ({id, title, poster_path, vote_average}: Props) => {
  const {open} = useMovieDetailModal(id);

  return (
    <div
      onClick={open}
      css={css`
        cursor: pointer;
        width: 180px;
        display: flex;
        flex-direction: column;
      `}
    >
      <img
        src={`https://image.tmdb.org/t/p/w220_and_h330_face/${poster_path}.jpg`}
        loading="lazy"
        alt={title}
        css={css`
          border-radius: 8px;
          width: 180px;
          height: 270px;
          background-size: contain;
        `}
      />
      <Text
        type="bodyBold"
        cssProp={css`
          overflow: hidden;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          display: -webkit-box;
        `}
      >
        {title}
      </Text>
      <Text type="body">
        <img src="/assets/star_filled.png" alt="별점" />
        {vote_average}
      </Text>
    </div>
  );
};

export default MovieItem;
