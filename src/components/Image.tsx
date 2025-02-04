import {css, SerializedStyles, useTheme} from '@emotion/react';
import {ComponentProps, useState} from 'react';

type Props = Omit<ComponentProps<'img'>, 'onLoad'> & {
  cssProp: SerializedStyles;
  minHeight?: number;
  minWidth?: number;
};

const Image = ({cssProp, minHeight, minWidth, ...rest}: Props) => {
  const {skeletonCSS} = useTheme();
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div css={cssProp}>
      <img onLoad={() => setIsLoaded(true)} css={isLoaded ? cssProp : undefined} {...rest} />
      {!isLoaded && (
        <div css={[skeletonCSS, cssProp]}>
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
