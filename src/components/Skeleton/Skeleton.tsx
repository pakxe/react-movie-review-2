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
};

const SkeletonImage = ({cssProp}: SkeletonImageProps) => {
  const {skeletonCSS} = useTheme();

  return <div css={[cssProp, skeletonCSS]} />;
};

const Skeleton = {
  Text: SkeletonText,
  Image: SkeletonImage,
};

export default Skeleton;
