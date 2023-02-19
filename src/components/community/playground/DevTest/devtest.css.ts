import { style, styleVariants } from '@vanilla-extract/css';
import { bodyText } from '../common/textToken.css';
import { titleText } from '../common/textToken.css';
import { COLORS } from '../common/colorToken';

const BREAKPOINTS = [500, 800] as const;
const MEDIA_QUERY = {
  pc: `screen and (min-width: ${BREAKPOINTS[1]}px)`,
  mobile: `screen and (max-width: ${BREAKPOINTS[0]}px)`,
} as const;

/**
 * start-page의 container
 */
export const firstPage = style({
  width: '100%',
  height: '100%',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: '30px',
  paddingTop: '80px',
  '@media': {
    [MEDIA_QUERY.pc]: {
      paddingTop: '120px',
    },
    [`screen and (min-height: ${BREAKPOINTS[1]}px)`]: {
      paddingTop: '120px',
    },
  },
});

/**
 * play-page의 container
 */
export const playPage = style({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '50px',
  position: 'relative',
});

/**
 * 질문, 선택지가 담긴 영역
 */
export const questionArea = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '15px',
});

export const text = styleVariants({
  title: [bodyText['body2B'], { color: 'white' }],
});

export const decoImg = style({
  width: '65%',
  height: '40%',
  position: 'absolute',
  bottom: '0px',
  left: '50%',
  transform: 'translateX(-50%)',
});

export const progress = style({
  width: '90%',
  position: 'absolute',
  top: '20px',
  left: '50%',
  transform: 'translate(-50%, 0)',
});

export const resultPage = styleVariants({
  container: [
    {
      padding: '60px 30px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '30px',
    },
  ],
  btnBox: [
    {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '10px',
    },
  ],
});

export const resultTitle = styleVariants({
  box: [
    {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '5px',
      whiteSpace: 'pre-line',
      textAlign: 'center',
    },
  ],
  title: [
    titleText.subtitle1,
    {
      color: COLORS.grayscale.white,
      textShadow: '1px 1px 2px #14141460',
    },
  ],
  subtitle: [
    titleText.subtitle2B,
    {
      color: COLORS.grayscale.white,
      textShadow: '1px 1px 2px #14141460',
    },
  ],
});
