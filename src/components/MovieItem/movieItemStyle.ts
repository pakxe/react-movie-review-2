import {css} from '@emotion/react';

const container = css`
  cursor: pointer;

  width: 100%;

  display: flex;
  flex-direction: column;

  gap: 4px;
`;

const posterImage = css`
  border-radius: 8px;
  width: 100%;

  aspect-ratio: 2/3;
  object-fit: cover;

  overflow: hidden;
`;

const title = css`
  overflow: hidden;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  display: -webkit-box;
`;

const movieItemStyle = {
  container,
  posterImage,
  title,
};

export default movieItemStyle;
