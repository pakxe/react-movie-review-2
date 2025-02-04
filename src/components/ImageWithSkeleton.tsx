import {css, SerializedStyles, useTheme} from '@emotion/react';
import {ComponentProps} from 'react';
import noImage from '../../public/assets/no_image.png';
import useLoadImage from '../hooks/useLoadImage';

type Props = Omit<ComponentProps<'img'>, 'src'> & {
  cssProp: SerializedStyles;
  src: string;
};

const ImageWithSkeleton = ({cssProp, ...rest}: Props) => {
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
        />
      )}
    </>
  );
};

export default ImageWithSkeleton;
