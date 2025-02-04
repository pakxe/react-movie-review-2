import {css, SerializedStyles, useTheme} from '@emotion/react';
import {ComponentProps, useState} from 'react';
import noImage from '../../public/assets/no_image.png';

type Props = Omit<ComponentProps<'img'>, 'onLoad'> & {
  cssProp: SerializedStyles;
  aspectRatio: number;
  minHeight?: number;
  minWidth?: number;
};

const Image = ({cssProp, aspectRatio, minHeight, minWidth, ...rest}: Props) => {
  const {skeletonCSS} = useTheme();
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div
      css={css`
        aspect-ratio: ${aspectRatio};
      `}
    >
      <img
        onError={() => setHasError(true)}
        onLoad={() => setIsLoaded(true)}
        css={isLoaded ? cssProp : undefined}
        {...rest}
        src={hasError ? noImage : rest.src} // 🔹 에러 시 대체 이미지로 변경
      />
      {!isLoaded && (
        <div
          css={[
            skeletonCSS,
            css`
              width: 100%;
              height: 100%;
            `,
          ]}
        >
          <div
            css={css`
              width: ${minHeight ?? 1000}px;
              height: ${minWidth ?? 1000}px;

              overflow: hidden;
            `}
          />
        </div>
      )}
    </div>
  );
};

export default Image;
