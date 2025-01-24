// 상수 파일은 변형될 가능성이 크므로 default export 를 사용하지 않음

export const TYPOGRAPHY = {
  title: {
    fontSize: '34px',
    fontWeight: '700',
    lineHeight: '24px',
  },
  subTitle: {
    fontSize: '20px',
    fontWeight: '700',
    lineHeight: '28px',
  },
  body: {
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: '24px',
  },
  bodyBold: {
    fontSize: '16px',
    fontWeight: '600',
    lineHeight: '24px',
  },
} as const;
