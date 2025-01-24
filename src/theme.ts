// 라이트, 다크와 같은 특성의 테마에 따라 쉽게 바뀔 수 있는 값들을 위해 모아놓은 것

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

const theme = {
  colors,
} as const;

export default theme;
