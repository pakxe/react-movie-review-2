// 라이트, 다크와 같은 특성의 테마에 따라 쉽게 바뀔 수 있는 값들을 위해 모아놓은 것

import {css, keyframes} from '@emotion/react';

const colors = {
  primary: '#EC4A0A',
  primaryLighten: '#F6A88A',
  gray6: '#000000',
  gray5: '#212122',
  gray4: '#383839',
  gray3: '#344054',
  gray2: '#888888',
  gray1: '#FFFFFF',
} as const;

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

const skeletonCSS = css`
  display: inline-block;
  background: linear-gradient(90deg, ${colors.gray4} 25%, ${colors.gray3} 50%, ${colors.gray4} 75%);
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s infinite linear;
  border-radius: 8px;

  width: 100%;

  overflow: hidden;
`;

const theme = {
  colors,
  skeletonCSS,
} as const;

export default theme;
