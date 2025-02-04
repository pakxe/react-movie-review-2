import {css} from '@emotion/react';

const container = css`
  height: 100%;

  display: flex;
  flex-direction: column;

  align-items: center;

  position: relative;
`;

const title = css`
  padding: 1rem;
`;

const voteAverage = css`
  display: flex;
`;

const genreAndVote = css`
  display: flex;
  gap: 1.5rem;
`;

const movieInfoWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const movieInfoAndRating = css`
  flex-grow: 2;
  flex-basis: 0;

  display: flex;
  flex-direction: column;

  justify-content: space-between;
`;

const movieDetail = css`
  width: 100%;

  display: flex;
  justify-content: space-between;

  padding: 1rem;

  gap: 2rem;
`;

const poster = css`
  flex-grow: 1;
  flex-basis: 0; // flex-grow1로 차지하는 영역보다 실제로 더 작을 경우 그걸 무시하고 1만큼 차지하도록 한다

  aspect-ratio: 2 / 3;

  @media (max-width: 768px) {
    display: none;
  }
`;

const movieDetailModalStyle = {
  container,
  title,
  voteAverage,
  genreAndVote,
  movieInfoWrapper,
  movieInfoAndRating,
  movieDetail,
  poster,
};

export default movieDetailModalStyle;
