import { styleVariants } from '@vanilla-extract/css';

const BREAKPOINTS = [500, 800] as const;
const MEDIA_QUERY = {
  pc: `screen and (min-width: ${BREAKPOINTS[1]}px)`,
  mobile: `screen and (max-width: ${BREAKPOINTS[0]}px)`,
} as const;

/**
 * 타이틀 텍스트 토큰
 */
export const titleText = styleVariants({
  title: {
    fontSize: 36,
    fontWeight: 900,
    '@media': {
      [MEDIA_QUERY.mobile]: {
        fontSize: 30,
        fontWeight: 900,
      },
    },
  },
  subtitle1: {
    fontSize: 30,
    fontWeight: 800,
    '@media': {
      [MEDIA_QUERY.mobile]: {
        fontSize: 22,
        fontWeight: 800,
      },
    },
  },
  subtitle2B: {
    fontSize: 22,
    fontWeight: 700,
    '@media': {
      [MEDIA_QUERY.mobile]: {
        fontSize: 20,
        fontWeight: 700,
      },
    },
  },
  subtitle2R: {
    fontSize: 22,
    fontWeight: 500,
    '@media': {
      [MEDIA_QUERY.mobile]: {
        fontSize: 20,
        fontWeight: 500,
      },
    },
  },
  subtitle3: {
    fontSize: 20,
    fontWeight: 700,
    '@media': {
      [MEDIA_QUERY.mobile]: {
        fontSize: 18,
        fontWeight: 700,
      },
    },
  },
});

/**
 * Body 텍스트 토큰
 */
export const bodyText = styleVariants({
  body1B: {
    fontSize: 20,
    fontWeight: 700,
    '@media': {
      [MEDIA_QUERY.mobile]: {
        fontSize: 18,
        fontWeight: 700,
      },
    },
  },
  body1R: {
    fontSize: 20,
    fontWeight: 400,
    '@media': {
      [MEDIA_QUERY.mobile]: {
        fontSize: 18,
        fontWeight: 400,
      },
    },
  },
  body2B: {
    fontSize: 18,
    fontWeight: 700,
    '@media': {
      [MEDIA_QUERY.mobile]: {
        fontSize: 18,
        fontWeight: 700,
      },
    },
  },
  body2R: {
    fontSize: 18,
    fontWeight: 400,
    '@media': {
      [MEDIA_QUERY.mobile]: {
        fontSize: 16,
        fontWeight: 400,
      },
    },
  },
  body3: {
    fontSize: 16,
    fontWeight: 400,
    '@media': {
      [MEDIA_QUERY.mobile]: {
        fontSize: 14,
        fontWeight: 400,
      },
    },
  },
  caption: {
    fontSize: 14,
    fontWeight: 400,
    '@media': {
      [MEDIA_QUERY.mobile]: {
        fontSize: 12,
        fontWeight: 400,
      },
    },
  },
});

/**
 * 버튼 텍스트 토큰
 */
export const btnText = styleVariants({
  border: {
    fontSize: 20,
    fontWeight: 800,
    '@media': {
      [MEDIA_QUERY.mobile]: {
        fontSize: 12,
        fontWeight: 800,
      },
    },
  },
  button1B: {
    fontSize: 20,
    fontWeight: 700,
    '@media': {
      [MEDIA_QUERY.mobile]: {
        fontSize: 12,
        fontWeight: 400,
      },
    },
  },
  button1R: {
    fontSize: 20,
    fontWeight: 400,
    '@media': {
      [MEDIA_QUERY.mobile]: {
        fontSize: 18,
        fontWeight: 400,
      },
    },
  },
  button2B: {
    fontSize: 18,
    fontWeight: 700,
    '@media': {
      [MEDIA_QUERY.mobile]: {
        fontSize: 16,
        fontWeight: 700,
      },
    },
  },
  button2R: {
    fontSize: 18,
    fontWeight: 400,
    '@media': {
      [MEDIA_QUERY.mobile]: {
        fontSize: 16,
        fontWeight: 400,
      },
    },
  },
  button3R: {
    fontSize: 16,
    fontWeight: 400,
    '@media': {
      [MEDIA_QUERY.mobile]: {
        fontSize: 14,
        fontWeight: 400,
      },
    },
  },
  button4B: {
    fontSize: 14,
    fontWeight: 800,
    '@media': {
      [MEDIA_QUERY.mobile]: {
        fontSize: 13,
        fontWeight: 800,
      },
    },
  },
});
