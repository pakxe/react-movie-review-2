import {useRef, useState} from 'react';
import STORAGE_KEYS from '../constants/storageKeys';
import {css, useTheme} from '@emotion/react';
import Text from './Text';

const RATING = ['뿌딕', '으윽', '별로', '그저그럼', '좋음', '최고'];

const setRatingInLocalStorage = (id: number, rating: number) => {
  const ratingMap = new Map(JSON.parse(localStorage.getItem(STORAGE_KEYS.RATING) || '[]'));

  ratingMap.set(id, rating);

  localStorage.setItem(STORAGE_KEYS.RATING, JSON.stringify(Array.from(ratingMap.entries())));
};

const getRatingFromLocalStorage = (id: number) => {
  const ratingMap = new Map(JSON.parse(localStorage.getItem(STORAGE_KEYS.RATING) || '[]'));

  // 별점이 없을 경우 -1을 반환
  return (ratingMap.get(id) as number) ?? -1;
};

type Props = {
  id: number;
};

const StarRating = ({id}: Props) => {
  const [rating, setRating] = useState(getRatingFromLocalStorage(id));
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const theme = useTheme();

  const calculateRating = (clientX: number) => {
    if (!containerRef.current) return 0;

    const rect = containerRef.current.getBoundingClientRect();
    const offsetX = clientX - rect.left; // 컨테이너 안에서의 마우스 커서 위치
    const containerWidth = rect.width;

    const delta = offsetX / containerWidth; // 0~1 사이 값

    const score = Math.round(delta * 5) * 2;

    return score;
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    const newRating = calculateRating(e.clientX);
    setRating(newRating);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const newRating = calculateRating(e.clientX);
    setRating(newRating);
  };

  const handleMouseUp = () => {
    if (isDragging) {
      setIsDragging(false);

      setRatingInLocalStorage(id, rating);
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    setRating((index + 1) * 2);

    setRatingInLocalStorage(id, rating);
  };

  return (
    <div
      css={css`
        width: 100%;
        background-color: ${theme.colors.gray4};

        display: flex;
        gap: 1rem;

        align-items: center;

        padding: 1rem 2rem;

        border-radius: 16px;
      `}
    >
      <Text type="bodyBold">내 별점</Text>
      <div
        ref={containerRef}
        className="star-rating-container"
        onMouseMove={handleMouseMove} // 드래그 시 별점 변경
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        css={css`
          position: relative;
          width: min-content;
          height: 40px;
          cursor: pointer;
          display: flex;
          align-items: center;
        `}
      >
        {[...Array(5)].map((_, index) => (
          <img
            onMouseDown={e => e.stopPropagation()} // 상위 onMouseDown의 이벤트를 막는다.
            onClick={e => handleClick(e, index)} // 클릭 시 별점 변경
            key={index}
            src={`assets/star_${rating >= (index + 1) * 2 ? 'filled' : 'empty'}.png`}
          />
        ))}
      </div>
      <Text type="body">{rating === -1 ? 0 : rating}</Text>
      <Text type="body">{rating === -1 ? '별점을 입력해주세요.' : RATING[Math.floor(rating / 2)]}</Text>
    </div>
  );
};

export default StarRating;
