import {CSSProperties, ReactNode, useEffect, useRef} from 'react';
import Spinner from './Spinner';
import {useObserver} from '../hooks/useObserver';
import {css} from '@emotion/react';

type InfiniteScrollContainer = {
  children: ReactNode;
  fetchNextPage: () => void;
  isFetching: boolean;
  rootMargin?: number;
  isError: boolean;
  error: Error | null;
  skeletonList?: ReactNode;
  length?: number;
  hasNextPage: boolean;

  gap?: CSSProperties['gap'];
};

export default function InfiniteScrollContainer({
  children,
  isFetching,
  fetchNextPage,
  rootMargin = 200,
  isError,
  error,
  skeletonList,
  hasNextPage,
  gap,
}: InfiniteScrollContainer) {
  const bottom = useRef(null);

  const onIntersect = ([entry]: IntersectionObserverEntry[]) => !isFetching && entry.isIntersecting && fetchNextPage();

  useObserver({
    target: bottom,
    onIntersect,
    rootMargin: rootMargin + 'px', // 바닥에 덜 닿도록
  });

  useEffect(() => {
    if (isError && error) alert(error.message);
  }, [isError]);

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;

        gap: ${gap ?? '2rem'};
      `}
    >
      {children}
      {isFetching && hasNextPage && skeletonList}
      {isFetching && <Spinner />}
      {!isFetching && <div ref={bottom}></div>}
    </div>
  );
}
