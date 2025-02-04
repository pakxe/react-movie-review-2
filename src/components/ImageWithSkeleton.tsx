import {css, SerializedStyles, useTheme} from '@emotion/react';
import {ComponentProps} from 'react';
import noImage from '../../public/assets/no_image.png';
import useLoadImage from '../hooks/useLoadImage';

type Props = Omit<ComponentProps<'img'>, 'onLoad' | 'src'> & {
  cssProp: SerializedStyles;
  minHeight?: number;
  minWidth?: number;
  src: string;
};

const ImageWithSkeleton = ({cssProp, minHeight, minWidth, ...rest}: Props) => {
  const {skeletonCSS} = useTheme();
  const {isLoaded, hasError} = useLoadImage(rest.src);

  return (
    <>
      {isLoaded ? (
        <img css={cssProp} {...rest} src={hasError ? noImage : rest.src} />
      ) : (
        <div
          css={[
            skeletonCSS,
            cssProp,
            css`
              overflow: hidden;
            `,
          ]}
        >
          <div
            css={css`
              width: ${minHeight ?? 1000}px;
              height: ${minWidth ?? 1000}px;
            `}
          />
        </div>
      )}
    </>
  );
};

export default ImageWithSkeleton;
