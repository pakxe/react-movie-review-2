import {ComponentProps} from 'react';
import Text from '../Text';
import {css, SerializedStyles, useTheme} from '@emotion/react';

type SkeletonTextProps = Omit<ComponentProps<typeof Text>, 'children'>;

const SkeletonText = ({...rest}: SkeletonTextProps) => {
  const {skeletonCSS} = useTheme();

  const getCssProp = () => {
    const cssProp = rest.cssProp ? rest.cssProp : [];

    const completedCssProp = Array.isArray(cssProp) ? cssProp : [cssProp];

    return [...completedCssProp, skeletonCSS];
  };

  return (
    <Text {...rest} cssProp={getCssProp()}>
      &nbsp;
    </Text>
  );
};

type SkeletonImageProps = {
  cssProp: SerializedStyles | SerializedStyles[];
  minHeight?: number;
  minWidth?: number;
};

const SkeletonImage = ({cssProp, minHeight, minWidth}: SkeletonImageProps) => {
  const {skeletonCSS} = useTheme();

  return (
    <div css={[cssProp, skeletonCSS]}>
      <div
        css={css`
          width: ${minWidth ?? 1000}px;
          height: ${minHeight ?? 1000}px;
        `}
      />
    </div>
  );
};

const Skeleton = {
  Text: SkeletonText,
  Image: SkeletonImage,
};

export default Skeleton;
