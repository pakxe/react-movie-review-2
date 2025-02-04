import {css, SerializedStyles, useTheme} from '@emotion/react';
import {ComponentProps, useState} from 'react';
import noImage from '../../public/assets/no_image.png';
import useLoadImage from '../hooks/useLoadImage';

type Props = Omit<ComponentProps<'img'>, 'src'> & {
  cssProp: SerializedStyles;
  src: string;
};

const ImageWithSkeleton = ({cssProp, ...rest}: Props) => {
  const {skeletonCSS} = useTheme();
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <>
      <img
        css={cssProp}
        {...rest}
        src={hasError ? noImage : rest.src}
        onLoad={e => {
          if (rest.onLoad) rest.onLoad(e);

          setIsLoaded(true);
        }}
        onError={() => {
          setHasError(true);
          setIsLoaded(true); // 에러 발생 시에도 로딩 완료 상태로 변경
        }}
      />
      {!isLoaded && (
        <div
          css={[
            skeletonCSS,
            cssProp,
            css`
              overflow: hidden;
            `,
          ]}
        />
      )}
    </>
  );
};

export default ImageWithSkeleton;
