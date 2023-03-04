import { style, styleVariants } from '@vanilla-extract/css';
import { COLORS } from '@/components/community/playground/common/colorToken';

const BREAKPOINTS = [500] as const;
const MEDIA_QUERY = {
  pc: `screen and (min-width: ${BREAKPOINTS[0]}px)`,
  mobile: `screen and (max-width: ${BREAKPOINTS[0]}px)`,
} as const;

/**
 * 개발자 성향 테스트에서 단독으로 사용하는 콘테이너 스타일
 */
export const devtestPage = style({
  padding: '0',
  margin: '0',
  background: `linear-gradient(
    135deg,
    ${COLORS.SSU.Blue}70,
    ${COLORS.SSU.SkyBlue}50
  )`,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

/**
 * 포춘에서 단독으로 사용하는 콘테이너 스타일
 */
export const fortunePage = style({
  padding: '0',
  margin: '0',
  background: `linear-gradient(
    135deg,
    ${COLORS.GDSC.Green}70,
    ${COLORS.SSU.SkyBlue}50
  )`,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

/**
 * 공통 wrapper의 base style
 */
const wrapperbase = style({
  width: '31.2vw',
  minHeight: '100vh',
  height: '100vh',
  overflowX: `hidden`,
  '@media': {
    [MEDIA_QUERY.mobile]: {
      width: '100vw',
      height: `calc(var(--var, 1vh) * 100)`,
    },
    [MEDIA_QUERY.pc]: {
      minWidth: '500px',
      boxShadow:
        'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px',
    },
  },
});

/**
 * 개발자 성향테스트 / 오늘의 포춘쿠키 공통 Wrapper
 * devtest & fortune
 */
export const wrapper = styleVariants({
  devtest: [
    wrapperbase,
    {
      background: `linear-gradient(
            135deg,
            ${COLORS.SSU.Blue},
            ${COLORS.SSU.SkyBlue}
          )`,
    },
  ],
  fortune: [
    wrapperbase,
    {
      background: `linear-gradient(
          135deg,
          ${COLORS.GDSC.Green},
          ${COLORS.SSU.SkyBlue}
        )`,
    },
  ],
});
