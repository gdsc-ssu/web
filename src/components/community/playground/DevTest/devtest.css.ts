import { style, styleVariants } from '@vanilla-extract/css';
import { bodyText } from '../common/textToken.css';

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
  height: 'auto',
  position: 'absolute',
  bottom: '0px',
  left: '50%',
  transform: 'translateX(-50%)',
});
